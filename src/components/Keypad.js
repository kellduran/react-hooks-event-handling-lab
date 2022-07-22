import React from 'react';
function handleChange(){
    console.log( "Entering password..." )
   }

function Keypad (){
   
    
    
    return(
        <input onChange={handleChange} placeholder="enter password" type= "password"></input>
    )

}

export default Keypad
