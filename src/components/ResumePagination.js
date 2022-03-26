import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './StarRating';


const COACH_REST_API_URL = "http://localhost:8080/coaches";

function Pagination(props) {    

    const [coaches, setCoaches] = useState([]);
    // useEffect = componentDidMount + componentDidUpdate + componentWillUnmount
    // passing an empty array [] as second argument tells React that your effect doesn't depend on any value from props or states; otherwise the state change triggers re-rendering (infinite loop) = componentDidMount + componentWillUnmount
    useEffect(() => {
        axios.get(COACH_REST_API_URL).then((response) => {
            setCoaches(response.data._embedded.coaches);
        });
    }, []);

    const averageRatings = (arr) => {
        return arr.reduce((a,b) => a+b, 0)/arr.length;
    }

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
                    {result.role}
                </td>
                <td valign="middle">
                    <StarRating rating={averageRatings(result.ratings)}/>
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