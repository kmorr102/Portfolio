import React from 'react';
import girlDinner from '/src/client/assets/girlDinner.png'
import strangersThings from '/src/client/assets/strangersThings.png'
function Work(){
    
return(
    <div className='projects'>
        {/* <div className='header'> Kendra Morris </div> */}
        <img className='girlDinner' src={girlDinner} alt='girl dinner tech project' style={{width:'365px', height: '260px', border: 'black solid 3px'}}/>
        <button>Demo</button> <button>Github</button>
        <img className='strangersThings' src={strangersThings} alt='strangers things tech project' style={{width:'365px', height: '260px', border: 'black solid 3px'}}/>
        <button>Demo</button> <button>Github</button>
    </div>

)
}
export default Work;