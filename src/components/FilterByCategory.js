import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Categories from './Categories';
import * as Constants from './../constants';

function FilterByCategory(props) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(Constants.COACH_REST_API_URL + Constants.CATEGORIES).then((response) => {
            console.log(response.data);
            setCategories(response.data);
        })
    }, [])

    const selectCategory = () => {

    };

    return (
        <div className="col-2-min-wid grid-body">
            <h4 className="align-left">
                <i className="fa fa-filter right-spacing"></i> 
                Filters
            </h4>
            <hr/>
            {/* Filter by category */}
            <h6 className="align-left">By category:</h6>
            <Categories categories={categories} categorySelected={selectCategory}/>
        </div>
    );
}

export default FilterByCategory;