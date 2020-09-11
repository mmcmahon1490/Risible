import React from 'react';
import CreatePostForm from './CreatePostForm';

const MainPage = (props) => {
  console.log(props.posts)

  return (
  <div class='body'>
    <div class="container">
     <div class='header'>
        <h1>risible</h1>
        <p>too good to be fake!</p>
      </div>
        <CreatePostForm />
    <div class='posts'>
      {
        props.posts.records.map((post) => (
        <p>{post.fields.description}</p>
      ))
      }
      {
        props.posts.records.map((post) => (
        <a href="{post.fields.link}">{post.fields.link}</a>
      ))
      }
      {
        props.posts.records.map((post) => (
        <p>posted by {post.fields.author},</p>
      ))
      }
      {
        props.posts.records.map((post) => (
        <p>on {post.fields.date}</p>
      ))
      }
    </div>
  </div>
</div>

)
}

export default MainPage;