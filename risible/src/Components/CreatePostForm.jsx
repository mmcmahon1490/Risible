import React, { useState } from 'react';
import axios from 'axios';

const CreatePostForm = (props) => {
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState('');
  const [date, setDate] = useState('');
  const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/risible`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      link,
      description,
      user,
      date,
    };

    await axios.post(
      baseURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.envREACT_APP_AIRTABLE_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    props.setFetchPosts(!props.fetchPosts);
    setLink('');
    setDescription('');
    setUser('');
    setDate('');
  }
  
  // return (
  //   <div>
  //     <div class='form'>
  //       <h2>Create Post</h2>
  //       <label for='link'><b>link</b></label>
  //       <input type='lnk' placeholder='enter link' name='lnk' id='lnk' required></input>

  //       <label for='description'><b>description</b></label>
  //       <input type='dsc' placeholder='enter description' name='dsc' id='dsc' required></input>

  //       <label for='user'><b>user</b></label>
  //       <input type='usr' placeholder='enter username' name='usr' id='usr' required></input>

  //       <label for='date'><b>enter date</b></label>
  //       <input type='dte' placeholder='enter date' id='dte' required></input>
  //     </div>
  //     <button type='submit' class='submit-post'>submit</button>
  //     <Footer />
  //   </div>
  // )

  return (
    // <div>
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor='link'>link</label>
    //   <input class='lnk' placeholder='enter link' />
    //   <label htmlFor='description'>description</label>
    //   <input class='dsc' placeholder='enter description' />
    //   <label htmlFor='user'>user</label>
    //   <input class='usr' placeholder='enter username' />
    //   <label htmlFor='date'>date</label>
    //   <input class='dte' placeholder='enter date' />
    //   <button type='submit' class='submit-post'>submit</button>
    // </form>
    
    // </div>

    <form onSubmit={handleSubmit}>
      <label htmlFor='link'>link</label>
      <input
        class='lnk'
        name='link'
        type='text'
        value={link}
        onClick={(event) => setLink(event.target.value)}
      />
      <button type='submit'>submit</button>
    </form>
    
    
  )

}

export default CreatePostForm;