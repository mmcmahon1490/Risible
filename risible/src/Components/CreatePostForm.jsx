import React, { useState } from 'react';
import axios from 'axios';

const CreatePostForm = (props) => {
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      link,
      description,
      author,
      date
    };

    const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/risible`;

    console.log(fields)

    await axios.post(baseURL, { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    props.setFetchPost(!props.fetchPost);
    setLink('');
    setDescription('');
    setAuthor('');
    setDate('');
  }
  
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor='link'>link</label>
      <input
        class='lnk'
        name='link'
        type='text'
        value={link}
        onChange={(event) => setLink(event.target.value)}
        />
        <label htmlFor='description'>description</label>
      <input
        class='dsc'
        name='description'
        type='text'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        />
        <label htmlFor='author'>username</label>
        <input
          class='usr'
          name='author'
          type='text'
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <label htmlFor='date'>date</label>
        <input
          class='dte'
          name='date'
          type='text'
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        
        <button
          type='submit'>submit</button>
    </form>
    </div>
  )

  //   <form onSubmit={handleSubmit}>
  //     <label htmlFor='link'>link</label>
  //     <input
  //       class='lnk'
  //       name='link'
  //       type='text'
  //       value={link}
  //       onChange={(event) => setLink(event.target.value)}
  //     />
  //     <button type='submit'>submit</button>
  //   </form>
  // )

}

export default CreatePostForm;