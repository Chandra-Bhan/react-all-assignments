import React, { useState } from 'react';

function Greeting() {
    const [greetings,setGreetings]=useState(["Good Morning","Good Afternoon","Good Evening", "Good Night","You are the best","Be Unique"]);
    const [inc,setInc]=useState(0);
    const [showGreet,setShowGreet]=useState("Hello");

    const handleGreetings=()=>{
        console.log(inc,greetings.length)
        
      
                setShowGreet(greetings[inc]);
        setInc(inc+1);
       if (inc==greetings.length) {    
            setInc(0);
            setShowGreet("Hello");
       }
        

    }
  return (
    <div>
    <h1 style={{color:"aqua"}}>Assignment 3</h1>
      <h1>{showGreet}</h1>
      <button onClick={()=>handleGreetings()}>Change Greetings</button>
    </div>
  );
}

export default Greeting;
