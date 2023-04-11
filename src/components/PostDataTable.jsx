import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostDataTable() {


    const [userData, setUserData]=useState([]);
    const [isChecked,setIsChecked]=useState(true);
    // const [search,setSearch]=useState("");

    useEffect(()=>{
             axios.get("https://jsonplaceholder.typicode.com/posts")
             .then((res)=>setUserData(res.data));
            },[]);

const handleDeletion=(id)=>{

    const allNewData=userData.filter((item)=>item.id!=id);
    setUserData([...allNewData]);
}





  return (
    <div>
    <h1>React Assignment 4</h1>
      <h2> Data Of GetPost API</h2>
      <label>Show Data: </label>
      <input className='checkBox' type='checkbox' onChange={()=>setIsChecked(!isChecked)} checked={isChecked}  />
      {/* <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={handleShowData}>Show</button> */}
      {
        isChecked &&
     
      <div>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>Action</th>
              
            </tr>
        </thead>
        <tbody>
            {
               userData.map((item)=>{
                     return(
                         <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td><span onClick={()=>handleDeletion(item.id)}>❌</span></td>
                       </tr>
                     )
               }) 
                }
        </tbody>
      </table>
      </div>
    }
    </div>
  );
}

export default PostDataTable;
