import React, { useState } from 'react';

function Categories(props) {

    return (
        <div>
            {props.categories.map((value, index) => (
                <div className="checkbox align-left">
                    <label><input type="checkbox" className="icheck right-spacing"/>{value}</label>
                </div>
            ))}
        </div>

    );

}

export default Categories;