import { useState, useEffect } from 'react';
import axios from 'axios';

import ResumePagination from './ResumePagination';

function ResumeRepo(props) {

    const [query, setQuery] = useState("");
    const [submitSearch, setSubmitSearch] = useState(false);
    const [searchTerm, setsearchTerm] = useState("");
    const [company, setCompany] = useState();

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        if (submitSearch && query !== "") {
            setCompany(query);
            setsearchTerm(`matching "${query}"`);
        };
        setSubmitSearch(false);
    }, [submitSearch]);

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
                                    setSubmitSearch(true)
                                }}
                            >
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                    <p className="align-left notes">Showing all results {searchTerm}</p>
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
                        <label><input type="checkbox" className="icheck right-spacing"/>Product</label>
                    </div>
                    <div className="checkbox align-left">
                        <label>
                            <input type="checkbox" className="icheck right-spacing"/> 
                            Software
                        </label>
                    </div>
                    <div className="checkbox align-left">
                        <label>
                            <input type="checkbox" className="icheck right-spacing"/> 
                            Consulting
                        </label>
                    </div>
                    <div className="checkbox align-left">
                        <label>
                            <input type="checkbox" className="icheck right-spacing"/> 
                            HR
                        </label>
                    </div>
                    <div className="checkbox align-left">
                        <label>
                            <input type="checkbox" className="icheck right-spacing"/> 
                            Accounting
                        </label>
                    </div>
                </div>
                
                <div className="col-10">
                    <ResumePagination company={company} />
                </div>
                
            </div>
        </div>
    );
}

export default ResumeRepo;