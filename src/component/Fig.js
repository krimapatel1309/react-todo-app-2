import React from "react";
import Img from '../assets/img.png'

const Fig = () => {
    return (
        <>
            <figure>
                <img src={Img} alt="todologo" />
                <figcaption>Add Your ToDo-List Here ✌</figcaption>
            </figure>
        </>
    );
};

export default Fig;
