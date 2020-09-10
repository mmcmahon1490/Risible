import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './Styles/Header.css'
import MainPage from './Components/MainPage';
import CreatePost from './Components/CreatePost';
import Article from './Components/Article';
import Footer from './Components/Footer';
import CreatePostForm from './Components/CreatePostForm';
import ReadArticle from './Components/ReadArticle';
import VoteButton from './Components/VoteButton';

function App() {
    const [posts, setPosts] = useState('');
    const [fetchPost, setFetchPost] = useState(true);
  
  useEffect(() => {
    const getPosts = async () => {
      const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/risible`;
  
      const response = await axios.get(baseURL,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
          },
        }
      );
      console.log(response.data.records)
      setPosts(response.data)
    }
    getPosts()
    }, [fetchPost])

  return (
    <div className="App">
      { posts && 
        <MainPage posts={posts}/>
      }
      <Article/>
      <CreatePostForm fetchPost={fetchPost} setFetchPost={setFetchPost}/>
      <ReadArticle />
      <Footer />
    </div>
  );
}

export default App;
