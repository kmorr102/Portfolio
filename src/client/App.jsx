import React from 'react';
import { Routes,Route,Link } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Resume from './components/resume';
import Work from './components/work';


function App(){
return(
    <div id="container">
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/About">About Me</Link>
            <Link to="/Work">My Work</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Contact">Contact Me</Link>
      
        </div>
    
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Work" element={<Work/>}/>
            <Route path="/Resume" element={<Resume/>}/>

        </Routes>
    </div>
)
}
export default App;