import logo from './logo.svg';
import './App.css';
import {useRecoilState} from 'recoil';
import {colorAdd} from './components/RecoilState';

function App() {

const [colorWill,setColorWill]=useRecoilState(colorAdd);
  function handleColor(){
    colorWill=="blue"?setColorWill("red"):setColorWill("blue");
       
  }

  return (
    <div className="App">
    <h1>Assignment 1 Color Change Using Recoil</h1>
  <h1 style={{color:colorWill}}>Hi, I change the color on click button</h1>
  <button style={{fontSize:"25px"}} onClick={handleColor}>ChangeColor</button>
    </div>
  );
}

export default App;
