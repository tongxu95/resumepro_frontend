import React, { useState } from 'react';
import StarRating from './StarRating';

function Pagination(props) {
    
    // sample data
    const coach1 = {
        name: 'Olive Tree',
        role: 'Product Manager at Orange', 
        rating: 4.2,
        resume: 5.0,
    };

    const coach2 = {
        name: 'Adam Tran',
        role: 'Software Developer at Orange', 
        rating: 3.9,
        resume: 15.0,
    };

    const coaches = [coach1, coach2];
    // sample data

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 1;

    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    const currentIndices = coaches.slice(firstIndex, lastIndex);

    const renderResults = currentIndices.map((result, index) => {
        return(
            <tr>
                <td className="image">
                    <img className="profile-img" src="https://via.placeholder.com/400x300/FF8C00" alt=""/>
                </td>
                <td className="description" valign="middle">
                    <strong>{result.name}</strong>
                    <br/>
                    {result.role}
                </td>
                <td valign="middle">
                    <StarRating rating={result.rating}/>
                </td>
                <td className="price" valign="middle">${result.resume.toFixed(2)}</td>
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
            <div className="col-10">
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