import { useState } from "react";
import Star from "./Star";

function StarRating(props) {

    return (
        <span>
        {[1, 2, 3, 4, 5].map((value) => (
            <Star
                key={value}
                filled={value <= Math.ceil(props.rating)}
            />
        ))}
        </span>
    );

}

export default StarRating;
