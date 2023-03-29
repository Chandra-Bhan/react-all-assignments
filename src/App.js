import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './assignment/home/Home';
import AboutUs from './assignment/aboutUs/AboutUs';
import Login from './assignment/login/Login';
import Register from './assignment/register/Register';
import Navbar from './assignment/navbar/Navbar';

function App() {


  const router=createBrowserRouter([{
    path:"/",
    element:<Home/>
  },
  {
    path:"/aboutus",
    element:<AboutUs/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }]);



  return (
    <div className="App">
    
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
