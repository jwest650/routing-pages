import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
    const navigate = useNavigate();
    const foods = ["Fufu", "Kenkey", "Banku", "Rice"];
    return (
        <div>
            <h1>Contacts</h1>
            {foods.map((food, i) => (
                <h2
                    onClick={() => navigate(`/details/${i}`)}
                    className="cursor"
                >
                    {food}
                </h2>
            ))}
        </div>
    );
};

export default Contact;
