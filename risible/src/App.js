import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './Styles/Header.css'
import Header from './Components/Header';
import CreatePost from './Components/CreatePost';
import Article from './Components/Article';
import Footer from './Components/Footer';
import CreatePostForm from './Components/CreatePostForm';
import ReadArticle from './Components/ReadArticle';
import VoteButton from './Components/VoteButton'

function App() {
  

  return (
    <div className="App">
      <Header />
      <Article/>
      <CreatePostForm />
      <ReadArticle />
      <Footer />
    </div>
  );
}

export default App;
