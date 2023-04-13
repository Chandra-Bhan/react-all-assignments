import React,{useContext} from 'react';
import {bodyContext} from '../GetPosts/GetPosts';
import  styles from './PostBody.module.css';

function PostBody() {
    const bodyCon=useContext(bodyContext);
  return (
    <div>
      <h1><span>ID:</span> {bodyCon.id}</h1>
      <h1><span>Title:</span> {bodyCon.title}</h1>
      <h1><span>Body:</span> {bodyCon.body}</h1>
    </div>
  );
}

export default PostBody;
