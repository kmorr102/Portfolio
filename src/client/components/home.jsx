import React from 'react';
import { Routes,Route,Link,useNavigate } from "react-router-dom";
import myPicture from '/src/client/assets/myPicture.png';

function Home(){
    
return(
    <div className='home-container'>
        <div id='name-container'>
        <a>My name is</a>
        <a className='k'>K</a>
        <a className='e'>e</a>
        <a className='n'>n</a>
        <a className='d'>d</a>
        <a className='r'>r</a>
        <a className='a'>a</a>
        </div>
        {/* <div id='homebar'>
        <Link className='homelink' to="/"> Kendra Morris </Link>  
        </div>   */}
        <a>I am a  <a style={{fontFamily: 'monospace', fontWeight:"bold"}}> Fullstack Developer</a> based in Frisco, Texas.</a>
       
       {/* <img src={myPicture} alt='resume picture' style={{width: '290px', height: '340px', border: 'black solid 2px'}}/> */}

    
    </div>
)
}
export default Home;