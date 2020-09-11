import React from 'react';
// import axios from 'axios';

const CreatePost = (props) => {
  // const [link] = useState('');
  // const [description] = useState('');
  // const [author] = useState('');
  // const [date] = useState();
  

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const fields = {
  //     link,
  //     description,
  //     author,
  //     date
  //   };

  //   const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/risible`;

  //   console.log({fields})

  //   await axios.post(baseURL, { fields },
  //     {
  //       headers: {
  //         'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   );
  // }

  return (
    <div>
      {/* <form>
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
        
        <button onClick={handleSubmit}
          type='submit'>submit</button>
    </form> */}
    </div>
  )

}

export default CreatePost;