import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route,useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';
import Delete from './pages/Delete';
import Navbar from './navbar/Navbar';
import { createContext, useState } from 'react';



// 2. Build a multi-page app with React Router that allows
//  users to create, edit, and delete notes. Use React 
//  Router's Route component to set up the routes for 
//  each page. Use the Link component to navigate between 
//  the pages


export const allNotesRef=createContext([]);
export const setAllNotesRef=createContext();

function App() {
  const navigate=useNavigate();
const [notes,setNotes]=useState([]);
const [count,setCount]=useState(1);


  const handleNotes=(note)=>{
     setNotes([...notes,{id:count,note:note}]);
     setCount(count+1);
     alert("Note Added");
  }
  const handleDeleteNote =(id)=>{
    const tempData= notes.filter((item)=>item.id!=id);
    setNotes(tempData);
    navigate("/delete");
 
    
  }



  return (
    <div className="App">
   <allNotesRef.Provider value={notes}>
   <setAllNotesRef value={setNotes}>
    
      <Navbar/>
        <Routes>
       
          <Route path='/' element={<Home  handleDeleteNote={handleDeleteNote}/>}/>
          <Route path='/create' element={<Create handleNotes={handleNotes}/>}/>
          <Route path='/update' element={<Update/>}/>
          <Route path='/delete' element={<Delete/>}/>
        </Routes>
  
      </setAllNotesRef>
      </allNotesRef.Provider>
    
    </div>
  );
}

export default App;
