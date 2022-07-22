import React from 'react';


function EyesOnMe (){
    function handleFocus (){
        console.log("Good!")
    } 

    function handleBlur (){
        console.log("Hey! Eyes on me!")
    }
    
    
    return(
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}>Hey! Eyes on me!</button>
        </div>
    )

}

export default EyesOnMe

// Code EyesOnMe Component Here
