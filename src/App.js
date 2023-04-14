import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './navbar/Navbar';



// Create a simple React app with React Router. Set up two routes: one for
//  the home page and one for a contact page. Use React Router's Link 
//  component to navigate between the two pages.



function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Navbar/>
      <Routes>
     
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
