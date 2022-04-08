import { useState, useEffect } from 'react';

import FilterByCategory from './FilterByCategory';
import ResumePagination from './ResumePagination';

function ResumeRepo(props) {

    const [query, setQuery] = useState("");
    const [submitSearch, setSubmitSearch] = useState(false);
    const [searchTerm, setsearchTerm] = useState("");
    const [company, setCompany] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        if (submitSearch) {
            setCompany(query);
            setsearchTerm(`matching "${query}"`);
            setSubmitSearch(false);
        };
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

                <FilterByCategory />
                
                <div className="col-10">
                    <ResumePagination company={company} />
                </div>
                
            </div>
        </div>
    );
}

export default ResumeRepo;