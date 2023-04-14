import React, { useState } from 'react';

function Create({handleNotes}) {
  const [note,setNote]=useState("");


  return (
    <div>
      <h1>This is the Create Page</h1>
      <textarea rows={20} cols={80} value={note} onChange={(e)=>setNote(e.target.value)} placeholder='Write the note'></textarea>
      <button onClick={()=>handleNotes(note)}>Add Note</button>
    </div>
  );
}

export default Create;
