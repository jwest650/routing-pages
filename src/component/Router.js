import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Error from "./pages/Error";
import Home from "./pages/Home";
const Router = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
