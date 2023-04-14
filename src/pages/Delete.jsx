import React, { useState,useContext } from 'react';
import {allNotesRef,setAllNotesRef} from '../App'


function Delete() {
  const [deletingId,setDeletingId]=useState(0);
  const notesRef=useContext(allNotesRef);
  const setNotesRef=useContext(setAllNotesRef);



const handleNoteDeltion =()=>{
        // const tempData= notesRef.filter((item)=>item.id!=deletingId)
        // setNotesRef(tempData);
        // console.log(tempData);
        // console.log(notesRef);
}

  return (
    <div>
      <h1>This is the Delete Page.</h1>
      <h1>Data has been deleted.....</h1>
      
      {/* <input type='number' value={deletingId} onChange={(e)=>setDeletingId(e.target.value)}/>
      <button onClick={handleNoteDeltion}>Delete</button> */}
    </div>
  );
}

export default Delete;
