import { useState } from 'react';

import Pagination from './Pagination';

function ResumeRepo(props) {

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

    const coaches = {coach1, coach2};
    // sample data


    const numResults = Object.keys(coaches).length;
    const numPages = Math.ceil(numResults/8);

    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
        console.log(numPages);
    }

    const searchCompany = (query) => {
        console.log(query);
        if (query !== "") {
            setSearchResult(`matching "${query}"`);
        } 
    }

    const rating = ( coach ) => {
        if (coach.rating === 0) {
            return (
                <span class="rating">
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </span>
            ); 
        } else if (coach.rating > 0 && coach.rating <= 0.5) {
            return (
                <span class="rating">
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </span>
            ); 
        } else if (coach.rating > 0.5 && coach.rating <= 1) {
            return (
                <span class="rating">
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </span>
            ); 
        } else if (coach.rating > 1 && coach.rating <= 1.5) {
            return (
                <span class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </span>
            ); 
        } else if (coach.rating > 1.5 && coach.rating <= 2) {
            return (
                <span class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </span>
            ); 
        } else if (coach.rating > 2 && coach.rating <= 2.5) {
            return (
                <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </span>
            ); 
        } else if (coach.rating > 2.5 && coach.rating <= 3) {
            return (
                <span class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </span>
            ); 
        } else if (coach.rating > 3 && coach.rating <= 3.5) {
            return (
                <span class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                </span>
            ); 
        } else if (coach.rating > 3.5 && coach.rating <= 4) {
            return (
                <span class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </span>
            ); 
        } else if (coach.rating > 4 && coach.rating <= 4.5) {
            return (
                <span class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </span>
            ); 
        } else if (coach.rating > 4.5 && coach.rating <= 5) {
            return (
                <span class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </span>
            ); 
        }
    };


    return (
        <div class="container">
            <div class="row grid">
                <div class="col-12 grid-body">
                    <h2 class="align-left vertical-spacing">
                        <i class="fas fa-database right-spacing"></i> 
                        Resume Marketplace
                    </h2>

                    {/* Search */}
                    <div class="input-group">
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Search Company"
                            value={query}
                            onChange={handleChange}
                        />
                        <span>
                            <button 
                                class="btn btn-primary button-height" 
                                type="button"
                                onClick={() => {
                                    searchCompany(query)
                                }}
                            >
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                    <p class="align-left subtext">Showing all results {searchResult}</p>
                </div>

                <div class="col-2-min-wid grid-body">
                    <h4 class="align-left">
                        <i class="fa fa-filter right-spacing"></i> 
                        Filters
                    </h4>
                    <hr/>
                    {/* Filter by category */}
                    <h6 class="align-left">By category:</h6>
                    <div class="checkbox align-left">
                        <label><input type="checkbox" class="icheck right-spacing"/>Application</label>
                    </div>
                    <div class="checkbox align-left">
                        <label>
                            <input type="checkbox" class="icheck right-spacing"/> 
                            Design
                        </label>
                    </div>
                    <div class="checkbox align-left">
                        <label>
                            <input type="checkbox" class="icheck right-spacing"/> 
                            Desktop
                        </label>
                    </div>
                    <div class="checkbox align-left">
                        <label>
                            <input type="checkbox" class="icheck right-spacing"/> 
                            Management
                        </label>
                    </div>
                    <div class="checkbox align-left">
                        <label>
                            <input type="checkbox" class="icheck right-spacing"/> 
                            Mobile
                        </label>
                    </div>
                </div>

                <div class="col-10">
                    <div class="row">
                        {/* Dropdown for sorting results */}

                        {/* Table Result */}
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <tbody>
                                    <tr>
                                        <td class="image">
                                            <img class="profile-img" src="https://via.placeholder.com/400x300/FF8C00" alt=""/>
                                        </td>
                                        <td class="description">
                                            <strong>{coach1.name}</strong>
                                            <br/>
                                            {coach1.role}
                                        </td>
                                        <td>
                                            {rating(coach1)}
                                        </td>
                                        <td class="price" >${coach1.resume.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div>
                    <ul>
                        <Pagination pages="2" />
                    </ul>
                </div>
                
            </div>
        </div>
    );
}

export default ResumeRepo;