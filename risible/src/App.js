import React from 'react';
import './App.css';
import './Styles/Header.css'
import Header from './Components/Header';
import CreatePost from './Components/CreatePost';
import Article from './Components/Article';
import Footer from './Components/Footer';
import CreatePostForm from './Components/CreatePostForm';
import ReadArticle from './Components/ReadArticle';

function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <Footer />
      <CreatePostForm />
      <ReadArticle />
    </div>
  );
}

export default App;
