import React, { useContext } from 'react';
import {allNotesRef} from '../App'
import { Link } from 'react-router-dom';

function Home({handleDeleteNote}) {
    const notesRef=useContext(allNotesRef);
    console.log(notesRef);
  return (
    <div>
    <h1>React Day 5 Assignment 2</h1>
      <h1>This is the Home Page </h1>
      {
        notesRef.map((item)=>{
            return <div key={item.id}>
            <p >Note: {item.id}. {item.note}</p>
            <button onClick={()=>handleDeleteNote(item.id)}>Delete</button>
            </div>
      })
      }
    </div>
  );
}

export default Home;
