import { func } from 'prop-types';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { taskListAtom } from '../../components/RecoilState';

function Home() {

    const navigate=useNavigate();
     const [list,setList]=useRecoilState(taskListAtom)
     const [todoItem,setTodoItem]=useState("");

    function handleTodoItem(){
            setList([...list,todoItem]);
            alert(`${todoItem} is Added in TodoList`);
            setTodoItem("");
            // console.log(list);
    }


    function handleTasks(){
        navigate("/tasks");
    }


  return (
    
    <div>
      <h1 style={{fontSize:"100px"}}>This is the home page</h1>
      <input style={{fontSize:"30px"}} type='text' value={todoItem} onChange={(e)=>setTodoItem(e.target.value)}/><br/><br/><br/>
      <button onClick={handleTodoItem} style={{fontSize:"30px"}}>Add task +</button> &nbsp;&nbsp;
      <button onClick={handleTasks} style={{fontSize:"30px"}}>Check tasks</button>
    </div>
  );
}

export default Home;
