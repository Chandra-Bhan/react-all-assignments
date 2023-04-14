import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';
import Delete from './pages/Delete';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
       
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/update' element={<Update/>}/>
          <Route path='/delete' element={<Delete/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
