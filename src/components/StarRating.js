import Star from "./Star";

function StarRating(props) {

    return (
        <div>
            <span>
            {[1, 2, 3, 4, 5].map((value) => (
                <Star
                    key={value}
                    filled={value <= Math.ceil(props.rating)}
                />
            ))}
            </span>
            {props.count != 0 && 
                <span>&nbsp;({props.count})</span>
            }
        </div>

    );

}

export default StarRating;
