import React from 'react';
import { Routes,Route,Link,useNavigate } from "react-router-dom";
import GirlDinnerDemo from '/src/client/assets/GirlDinner-FINAL.mp4'

function Video(){
    return(
    
    <iframe className='video' src={GirlDinnerDemo} frameborder="100" 
    style={{height:'800%', width: '600'}} allowFullScreen></iframe>
    )
}

export default Video;