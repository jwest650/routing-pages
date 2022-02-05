import React from "react";
import { useParams } from "react-router-dom";
const Details = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>
                ID: <span>{id}</span>
            </h2>
        </div>
    );
};

export default Details;
