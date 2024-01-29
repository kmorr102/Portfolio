import React from 'react';
import { Routes,Route,Link,useNavigate } from "react-router-dom";
import girlDinner from '/src/client/assets/girlDinner.png'
import strangersThings from '/src/client/assets/strangersThings.png'
import GirlDinnerDemo from '/src/client/assets/GirlDinner-FINAL.mp4'

function Work(){
    
    const navigateToGirlDinner=()=>{
        window.location.href = 'https://github.com/kmorr102/Girl-Dinner'
    }
    const navigateToStrangersThingsGithub=()=>{
        window.location.href= 'https://github.com/kmorr102/strangers-things'
    }
    const navigateToGirlDinnerVideo=() =>{
        window.location.href='https://youtu.be/Z1e_ZUrt28E'
    }
    const navigateToStrangersThingsDemo=() =>{
        window.location.href='https://sage-stroopwafel-c13960.netlify.app/'
    }
return(
    <div className='projects'>
        {/* <div className='header'> Kendra Morris </div> */}
        <img className='girlDinner' src={girlDinner} alt='girl dinner tech project' style={{width:'365px', height: '260px', border: 'black solid 3px'}}/>
        
        <button onClick={navigateToGirlDinnerVideo}>Demo</button>  <button onClick={navigateToGirlDinner}>Github</button>
       
        <img className='strangersThings' src={strangersThings} alt='strangers things tech project' style={{width:'365px', height: '260px', border: 'black solid 3px'}}/>
       
        <button onClick={navigateToStrangersThingsDemo}>Demo</button> <button onClick={navigateToStrangersThingsGithub}>Github</button>
    </div>

)
}
export default Work;