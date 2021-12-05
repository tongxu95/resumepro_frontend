import { useState } from 'react';

import Pagination from './Pagination';

function ResumeRepo(props) {

    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const searchCompany = (query) => {
        console.log(query);
        if (query !== "") {
            setSearchResult(`matching "${query}"`);
        } 
    }

    return (
        <div className="container">
            <div className="row grid">
                <div className="col-12 grid-body">
                    <h2 className="align-left vertical-spacing">
                        <i className="fas fa-database right-spacing"></i> 
                        Resume Marketplace
                    </h2>

                    {/* Search */}
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search Company"
                            value={query}
                            onChange={handleChange}
                        />
                        <span>
                            <button 
                                className="btn btn-primary button-height" 
                                type="button"
                                onClick={() => {
                                    searchCompany(query)
                                }}
                            >
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                    <p className="align-left subtext">Showing all results {searchResult}</p>
                </div>

                <div className="col-2-min-wid grid-body">
                    <h4 className="align-left">
                        <i className="fa fa-filter right-spacing"></i> 
                        Filters
                    </h4>
                    <hr/>
                    {/* Filter by category */}
                    <h6 className="align-left">By category:</h6>
                    <div className="checkbox align-left">
                        <label><input type="checkbox" className="icheck right-spacing"/>Application</label>
                    </div>
                    <div className="checkbox align-left">
                        <label>
                            <input type="checkbox" className="icheck right-spacing"/> 
                            Design
                        </label>
                    </div>
                    <div className="checkbox align-left">
                        <label>
                            <input type="checkbox" className="icheck right-spacing"/> 
                            Desktop
                        </label>
                    </div>
                    <div className="checkbox align-left">
                        <label>
                            <input type="checkbox" className="icheck right-spacing"/> 
                            Management
                        </label>
                    </div>
                    <div className="checkbox align-left">
                        <label>
                            <input type="checkbox" className="icheck right-spacing"/> 
                            Mobile
                        </label>
                    </div>
                </div>

                <Pagination pages="2" />
                
            </div>
        </div>
    );
}

export default ResumeRepo;