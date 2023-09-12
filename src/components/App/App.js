import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Landing from '../Landing/Landing'
import Article from '../Article/Article'
import Category from '../Category/Category'

function App() {
  const [currentArticle, setCurrentArticle] = useState(null)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing setCurrentArticle={setCurrentArticle}/>}/>
        <Route path='/categories/:category' element={<Category setCurrentArticle={setCurrentArticle}/>}/>
        <Route path='/article' element={<Article {...currentArticle}/>}/>
      </Routes>
    </div>
  );
}

export default App;
