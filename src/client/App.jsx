import React from 'react';
import { Routes,Route,Link,useNavigate } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Resume from './components/resume';
import Work from './components/work';
import Video from './components/Video';


// import GitHubIcon from '@mui/icons-material/GitHub';
// import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App(){
    const navtoLinkedIn=() =>{
        window.location.href="https://www.linkedin.com/in/kendra-morris/" 
    }
    const navtoEmail=() =>{
        window.location.href="mailto:kendranmorris@gmail.com" 
    }
    const navtoGitHub=() =>{
        window.location.href="https://github.com/kmorr102" 
    }
return(
    <div id="container">
        
       <div id="navbar">
            <Link className='link' to="/">Home</Link>
            {/* <Link className='link' to="/About">About Me</Link> */}
            <Link className='link' to="/Work">My Work</Link>
            <Link className='link' to="/Resume/pdf">Resume</Link>
            {/* <Link className='link' to="/Contact">Contact Me</Link> */}
        </div>

        <div id='topbar'></div>
  
       
        {/* <footer className='footer'>
            Contact Info
        <button onClick={navtoGitHub} className="icon-button">
            <div> <GitHubIcon sx={{ marginRight: "4px", color: 'white' }} /></div>
        </button>
        <button onClick={navtoEmail} className="icon-button">
            <div> <EmailIcon sx={{ marginRight: "4px", color: 'white' }} /></div>
        </button>
        <button onClick={navtoLinkedIn} className="icon-button">
            <div> <LinkedInIcon sx={{ marginRight: "4px", color: 'white' }} /></div>
        </button>
        </footer> */}
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Work" element={<Work/>}/>
            <Route path="/Resume/pdf" element={<Resume/>}/>
            <Route path="/Video" element={<Video/>}/>
        </Routes>

</div>
)
}
export default App;