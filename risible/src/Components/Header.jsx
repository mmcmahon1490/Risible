import React from 'react';
import CreatePost from './CreatePost';

const Header = (props) => {
  console.log(props.posts)

return (
  <div class="header">
    <div id="header">
    <h1>risible</h1>
      <p>too good to be fake!</p>
    <CreatePost />
    </div>
    <h2>headlines</h2>
    {
      props.posts.records.map((post) => (
        <h1>{post.fields.author}</h1>
      ))
    }
  </div>

)
}

export default Header;