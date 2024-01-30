import React from 'react';
import myResume from '/src/client/assets/resume.pdf'


function Resume(){
    const resumeUrl= '/src/client/assets/resume.pdf'
    return(
    <div>
        <iframe className='resume'
         src={myResume}

         style={{ frameBorder:'0', width: '100%', height: '1000px', border: 'none' }}
        allowFullScreen
        >
  
        </iframe>
    
    </div>
    )

}
export default Resume;