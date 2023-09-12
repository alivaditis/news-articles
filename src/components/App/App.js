import { useState, useEffect } from 'react';
import { getArticles } from '../../api';
import { Routes, Route } from 'react-router-dom';
import Landing from '../Landing/Landing'
import './App.css';
import Article from '../Article/Article';

function App() {
  const [currentArticle, setCurrentArticle] = useState(null)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing setCurrentArticle={setCurrentArticle}/>}/>
        <Route path='/categories/:category' element={<Landing/>}/>
        <Route path='/article' element={<Article {...currentArticle}/>}/>
      </Routes>
    </div>
  );
}

export default App;
