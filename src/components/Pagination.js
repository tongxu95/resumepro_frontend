import React from 'react';

function Pagination(props) {

    const pageNumbers = [];

    if (props.pages > 1) {
        for (let i = 1; i <= props.pages; i++) {
            pageNumbers.push(i);
        }
    }
    
    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li class="li-style"
                key={number}
                id={number}
            >
                <a href="#">{number}</a>
            </li>
        );
    });

    const changePage = () => {

    }

    return (
        <div>
            <ul class="pagination pages">
                { renderPageNumbers }
            </ul>
        </div>
    );

}

export default Pagination;