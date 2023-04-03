import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Tasks from './pages/Tasks/Tasks';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element=<Home/>/>
      <Route path="/tasks" element=<Tasks/>/>
     </Routes>
    </div>
  );
}

export default App;
