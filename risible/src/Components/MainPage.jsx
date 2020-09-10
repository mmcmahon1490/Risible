import React from 'react';
import CreatePost from './CreatePost';

const MainPage = (props) => {
  console.log(props.posts)

return (
  <div class="header">
    <div class='container'>
      <h1>risible</h1>
      <p>too good to be fake!</p>
      <button>create post</button>
    <CreatePost />
    </div>
    <h2>headlines</h2>
    <div class='posts'>
    {
        props.posts.records.map((post) => (
        <h1>{post.fields.link}</h1>
      ))
      }
      {
        props.posts.records.map((post) => (
        <h1>{post.fields.description}</h1>
      ))
      }
      {
        props.posts.records.map((post) => (
        <h1>{post.fields.author}</h1>
      ))
      }
      {
        props.posts.records.map((post) => (
        <h1>{post.fields.date}</h1>
      ))
      }
      </div>
  </div>

)
}

export default MainPage;