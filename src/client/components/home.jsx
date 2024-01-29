import React from 'react';
import { Routes,Route,Link,useNavigate } from "react-router-dom";
import myPicture from '/src/client/assets/myPicture.png';

function Home(){
    
return(
    <div className='home-container'>
        Hi my name is ...Kendra Morris.
        I am a fullstack developer based in Frisco, Texas.
       
       <img src={myPicture} alt='resume picture' style={{width: '290px', height: '340px', border: 'black solid 2px'}}/>

    
    </div>
)
}
export default Home;