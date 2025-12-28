import React from "react";
import './App.css';
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Navigate from "./navigate";
import NotFound from "./NotFound" ;
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Navigate />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;