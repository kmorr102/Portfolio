import React from 'react';
import { Routes,Route,Link } from "react-router-dom";
import Home from './components/home';
import About from './components/about';

function App(){
return(
    <div id="container">
        <div id="navbar">
        <Link to="/About">About me</Link>
        </div>
    <div>Welcome!</div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
        </Routes>
    </div>
)
}
export default App;