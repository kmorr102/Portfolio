import React from 'react';
import { Routes,Route,Link,useNavigate } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Resume from './components/resume';
import Work from './components/work';
import Video from './components/Video';

import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App(){
    const navigate= useNavigate()
return(
    
    <div id="container">
        {/* <div id='homebar'>
        <Link className='homelink' to="/"> Kendra Morris </Link>  
        </div>   */}
       
        <div id="navbar">
            <Link className='link' to="/">Home</Link>
            {/* <Link className='link' to="/About">About Me</Link> */}
            <Link className='link' to="/Work">My Work</Link>
            <Link className='link' to="/Resume/pdf">Resume</Link>
            {/* <Link className='link' to="/Contact">Contact Me</Link> */}
      
        </div>

        <div id='topbar'></div>
  
       
    
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Work" element={<Work/>}/>
            <Route path="/Resume/pdf" element={<Resume/>}/>
            <Route path="/Video" element={<Video/>}/>

        </Routes>
       <div id='bottombar'>
       <footer className='footer'>Contact Info
       <Button
        variant = "text"
        component={Link} to={'https://github.com/kmorr102'}>
        <GitHubIcon sx={{marginRight: "4px", color: 'white'}} ></GitHubIcon> 
      </Button>
      <Button
        variant = "text"
        component={Link} to={"mailto:kendranmorris@gmail.com?"}>
        <EmailIcon sx={{marginRight: "4px", color:'white'}} ></EmailIcon> 
      </Button>
      <Button
        variant = "text"
        component={Link} to={'https://www.linkedin.com/in/kendra-morris/'}>
        <LinkedInIcon sx={{marginRight: "4px", color:'white'}} ></LinkedInIcon> 
      </Button>
      </footer>
      </div>
    </div>
)
}
export default App;