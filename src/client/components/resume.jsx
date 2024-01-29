import React from 'react';


function Resume(){
    const resumeUrl= '/src/client/assets/resume-2024.pdf'
    return(
    <div>
        <iframe
         src={resumeUrl}
         style={{ width: '100%', height: '500px', border: 'none' }}
         >
        </iframe>
    
    </div>
    )

}
export default Resume;