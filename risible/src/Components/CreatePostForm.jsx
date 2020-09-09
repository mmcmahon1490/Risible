import React from 'react';
import Footer from './Footer';

const CreatePostForm = () => {
  
  return (
    <div>
      <div class='form'>
        <h2>Create Post</h2>
        <label for='link'><b>link</b></label>
        <input type='lnk' placeholder='enter link' name='lnk' id='lnk' required></input>
        <label for='description'><b>description</b></label>
        <input type='dsc' placeholder='enter description' name='dsc' id='dsc' required></input>
      </div>
      <button type='submit' class='submit-post'>submit</button>
      <Footer />
    </div>
  )

}

export default CreatePostForm;