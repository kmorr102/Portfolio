import React from 'react';
import { Routes,Route,Link,useNavigate } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Resume from './components/resume';
import Work from './components/work';


function App(){
    const navigate= useNavigate()
return(
    
    <div id="container">
        <div id='homebar'>
        <Link className='homelink' to="/"> Kendra Morris </Link>  
        </div>  
       
        <div id="navbar">
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/About">About Me</Link>
            <Link className='link' to="/Work">My Work</Link>
            <Link className='link' to="/Resume">Resume</Link>
            <Link className='link' to="/Contact">Contact Me</Link>
      
        </div>
       
    
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Work" element={<Work/>}/>
            <Route path="/Resume" element={<Resume/>}/>

        </Routes>
        <div id='bottombar'>Contact me:</div>
    </div>
)
}
export default App;