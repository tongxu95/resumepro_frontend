import React, { useState, useEffect } from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import { Rating } from 'react-simple-star-rating';
import axios from 'axios';

import './AddRating.css';


function AddRating(props) {

    const [rated, setRated] = useState(false);

    // useState is asynchronous; state update is reflected in the next re-render
    // use useEffect to perform action on state update
    const handleRating = async(rate) => {
        props.setRating(rate/20);
        setRated(true);
    }

    return (
        <div className="popup">
            <div className="popup-inner">

                <FaRegWindowClose className='close-btn' color='grey' size='20px' onClick={() => props.trigger(false)}/>

                {!rated && <div>
                    <p>Rate your experience with {props.coach}</p>
                    <Rating onClick={handleRating} />
                </div>}
                {rated && <div>
                    <p className="centered-text">Thanks for rating!</p>
                </div>}

            </div>
        </div>
    );
}

export default AddRating;