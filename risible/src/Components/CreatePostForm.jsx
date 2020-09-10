import React, { useState } from 'react';
import Footer from './Footer';
import axios from 'axios';

const CreatePostForm = () => {
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
  }
  
  return (
    <div>
      <div class='form'>
        <h2>Create Post</h2>
        <label for='link'><b>link</b></label>
        <input type='lnk' placeholder='enter link' name='lnk' id='lnk' required></input>
        <label for='description'><b>description</b></label>
        <input type='dsc' placeholder='enter description' name='dsc' id='dsc' required></input>

        <label for='user'><b>user</b></label>
        <input type='usr' placeholder='enter username' name='usr' id='usr' required></input>
        <label for='date'><b>enter date</b></label>
        <input type='dte' placeholder='enter date' id='dte' required></input>
      </div>
      <button type='submit' class='submit-post'>submit</button>
      <Footer />
    </div>
  )

}

export default CreatePostForm;