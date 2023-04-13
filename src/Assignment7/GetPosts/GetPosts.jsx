import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import PostBody from '../PostDetails/PostBody';
import styles from './GetPosts.module.css';




export const bodyContext=createContext("");

function GetPosts() {

    const [Posts,setPosts]=useState([]);
    const [body,setBody]=useState({});
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
       .then((res)=>setPosts(res.data));
    },[]);


    const handleShowPosts=(bodyData,id,title)=>{
            setBody({id:id,title:title,body:bodyData})
    }


  return (
    <div className={styles.container}>
      <h3>Assignment 7 (vir) get-posts-and-if-we-click-then-show-all-info-of-that-post</h3>
     <div className={styles.mainDiv}>
     <div className={styles.innerDiv}>
     <h2>POST LIST</h2>
        <ul>
            {
                Posts.map((item)=>{
                    return (
                        <li key={item.id} onClick={()=>handleShowPosts(item.body,item.id,item.title)}>{item.id}. {item.title}</li>
                    )
                })
            }
        </ul>
     </div>
   
   <bodyContext.Provider value={body}>
     <div className={styles.innerDiv2}>
     <h2>POST DETAILS</h2>
        <PostBody />
     </div>
     </bodyContext.Provider>
    </div>
    </div>
  );
}

export default GetPosts;
