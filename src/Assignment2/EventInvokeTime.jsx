import React, { useState } from 'react';

function EventInvokeTime() {

    const [collection,setCollection]=useState([]);
    const timeis=new Date().toLocaleTimeString();
    const dateis=new Date().toLocaleDateString();
    const timeDate=dateis+ " " + timeis;
    const handleOver=(tagName)=>{
                 if(tagName=="h1"){
                    setCollection([...collection,
                        {TagName:tagName,EventName:"onMouseOver",Time:timeDate},
                       
                    ]);
                 }
                 else if(tagName=="h2"){
                    setCollection([...collection,
                        {TagName:tagName,EventName:"onMouseOver",Time:timeDate},

                    ]);
                 }
                 else{
                    setCollection([...collection,
                        {TagName:tagName,EventName:"onMouseOver",Time:timeDate},
                       
                    ]);
                 }
                
    }



    const handleOut=(tagName)=>{
        
        if(tagName=="h1"){
            setCollection([...collection,
                {TagName:tagName,EventName:"onMouseOut",Time:timeDate},
               
            ]);
         }
         else if(tagName=="h2"){
            setCollection([...collection,
                {TagName:tagName,EventName:"onMouseOut",Time:timeDate},

            ]);
         }
         else{
            setCollection([...collection,
                {TagName:tagName,EventName:"onMouseOut",Time:timeDate},
               
            ]);
         }
    }


    console.log(collection,timeDate);
  return (
    <>
    <h3>Assignment 2</h3>
    <div className='mainDiv'>
      <h1 onMouseOver={()=>handleOver("h1")} onMouseOut={()=>handleOut("h1")}>This is the Heading 1</h1>
      <h2 onMouseOver={()=>handleOver("h2")} onMouseOut={()=>handleOut("h2")}>This is the Heading 2</h2>
      <div className='dummyDiv' onMouseOver={()=>handleOver("div")} onMouseOut={()=>handleOut("div")}>This is a Div</div>

</div><div>
<label>Table</label>
      <table>
      <thead>
        <tr>
            <td>Element Name</td>
            <td>Event Name</td>
            <td>Time</td>

        </tr>
        </thead>
        <tbody>
        {
            collection.map((item)=>{
                return (
                    <tr>
                      <td>{item.TagName}</td>
                      <td>{item.EventName}</td>
                      <td>{item.Time}</td>
                    </tr>
                )
            })
        }
        </tbody>
      </table>
    </div>
    </>
  );
}

export default EventInvokeTime;
