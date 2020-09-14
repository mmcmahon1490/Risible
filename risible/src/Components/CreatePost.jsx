import React from 'react';

const CreatePost = (props) => {

  return (
  <div className='posts'>
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
  )
}

export default CreatePost;