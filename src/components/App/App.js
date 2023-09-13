import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Landing from '../Landing/Landing'
import Article from '../Article/Article'
import Category from '../Category/Category'
import BadRoute from '../BadRoute/BadRoute';

function App() {
  const [currentArticle, setCurrentArticle] = useState(null)
  const [apiError, setApiError] = useState('')

  const handleApiError = (error) => {
    setApiError(error)
  }

  if(apiError) {
    return (
      <h2>{apiError}</h2>
    )
  } else {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Landing setCurrentArticle={setCurrentArticle} handleApiError={handleApiError}/>}/>
          <Route path='/categories/:category' element={<Category setCurrentArticle={setCurrentArticle}/>}/>
          <Route path='/article' element={<Article {...currentArticle} currentArticle={currentArticle} handleApiError={handleApiError}/>}/>
          <Route path='*' element={<BadRoute/>}/>
        </Routes>
      </div>
    )
  }
}

export default App
