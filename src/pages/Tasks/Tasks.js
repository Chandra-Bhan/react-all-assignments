import React from 'react';
import { taskListAtom } from '../../components/RecoilState';
import {useRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';

function Tasks() {
    const toDoList=useRecoilState(taskListAtom);
   const navigate=useNavigate();
    function handleBack(){
         navigate(-1);
    }
    
    // console.log(toDoList[0]);
  return (
    <div>
      <h1 style={{fontSize:"90px"}}>This is the Task Page</h1>
      <h2 style={{fontSize:"70px"}}>Tasks to do !</h2>
      <button style={{fontSize:"40px"}} onClick={handleBack}>Back</button>
      <ul style={{width:"500px",margin:"auto"}}>
      {
        toDoList[0].map((item,index)=><li style={{fontSize:"45px"}} key={index}>{item}</li>)
      }
      </ul>
      <br/>
    </div>
  );
}

export default Tasks;
