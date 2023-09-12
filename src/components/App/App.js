import { useState, useEffect } from 'react';
import { getArticles } from '../../api';
import { Routes, Route } from 'react-router-dom'
import Landing from '../Landing/Landing'
import './App.css';
import Article from '../Article/Article';

function App() {
  const [topArticles, setTopArticles] = useState([])

  useEffect(() => {
    getArticles()
      .then(res => setTopArticles(res.articles.slice(0, 5)))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      {topArticles.length > 0 && topArticles.map(article => <p>{article.title}</p>)}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/categories/:category' element={<Landing/>}/>
        <Route path='/articles/:id' element={<Article/>}/>
      </Routes>
    </div>
  );
}

export default App;
