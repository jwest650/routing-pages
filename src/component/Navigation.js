import React from "react";
import { Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const Navigation = () => {
    return (
        <div className="d-flex justify-content-evenly">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contacts</Link>
        </div>
    );
};

export default Navigation;
