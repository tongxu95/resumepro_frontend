import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './StarRating';
import AddRating from './AddRating';
import * as Constants from './../constants';


function Pagination(props) {    

    const [coaches, setCoaches] = useState([]);
    // useEffect = componentDidMount + componentDidUpdate + componentWillUnmount
    // passing an empty array [] as second argument tells React that your effect doesn't depend on any value from props or states; otherwise the state change triggers re-rendering (infinite loop) = componentDidMount + componentWillUnmount
    useEffect(() => {
        if (props.company) {
            axios.get(Constants.COACH_REST_API_URL + Constants.FILTER_COMPANY + `${props.company}`).then((response) => {
                console.log(response);
                setCoaches(response.data);
            })
        } else {
            axios.get(Constants.COACH_REST_API_URL).then((response) => {
                console.log(response.data._embedded.coaches);
                setCoaches(response.data._embedded.coaches);
            });
        }
    }, [props.company]);

    const averageRatings = (arr) => {
        return (arr != null) ? arr.reduce((a,b) => a+b, 0)/arr.length : 0;
    }

    const countRatings = (arr) => {
        return (arr != null) ? arr.length : 0;
    }

    const [trigger, setTrigger] = useState(false);
    const [coachIndexForNewRating, setcoachIndexForNewRating] = useState();
    const [coachesIndex, setcoachesIndex] = useState();
    const [newRating, setNewRating] = useState();

    useEffect(() => {
        if (newRating != null) {
            console.log(newRating);
            console.log(coachesIndex);
            console.log(coachIndexForNewRating);
            console.log(coaches[coachesIndex].ratings);
            let oldRatings = coaches[coachesIndex].ratings;
            if (oldRatings == null) {
                axios.patch(Constants.COACH_REST_API_URL + `/${coachIndexForNewRating}`, {"ratings":[`${newRating}`]}).then((response) => {
                    console.log(response.data);                        
                })
            } else {
                oldRatings.push(newRating);
                axios.patch(Constants.COACH_REST_API_URL + `/${coachIndexForNewRating}`, {"ratings": oldRatings}).then((response) => {
                    console.log(response.data);
                })
            }
        }

    }, [newRating])

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 8;

    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    const currentIndices = coaches.slice(firstIndex, lastIndex);

    const renderResults = currentIndices.map((result, index) => {
        return(
            <tr key={index}>
                <td className="image">
                    <img className="profile-img" src="https://via.placeholder.com/400x300/FF8C00" alt=""/>
                </td>
                <td className="description" valign="middle">
                    <strong>{result.name}</strong>
                    <br/>
                    {`${result.role} at ${result.company}`}
                </td>
                <td valign="middle">
                    <div>
                        <StarRating rating={averageRatings(result.ratings)} count={countRatings(result.ratings)}/>
                    </div>
                    <br/>
                    <div >
                        <a 
                            className="nav-link"
                            onClick={() => {
                                setcoachIndexForNewRating(result.id);
                                setcoachesIndex(index);
                                setTrigger(true);
                            }}
                        >
                            Rate {result.name} 
                        </a>
                        {coachIndexForNewRating == result.id && trigger && <AddRating coach={result.name} trigger={setTrigger} setRating={setNewRating}/>}
                    </div>
                </td>
                <td className="price" valign="middle">${result.resumeFee.toFixed(2)}</td>
            </tr>
        );
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(coaches.length/perPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (e) => {
        setCurrentPage( Number(e.target.id) );
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li className="li-style"
                key={number}
            >
                <a 
                    id={number}
                    href="#"
                    onClick={handleClick}
                >{number}</a>
            </li>
        );
    });


    return (
        <div>
            <div>
                <div className="row">
                    {/* Dropdown for sorting results */}

                    {/* Table Result */}
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <tbody>
                                {renderResults}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <ul className="pagination pages">
                    { renderPageNumbers }
                </ul>
            </div>
        </div>
    );

}

export default Pagination;