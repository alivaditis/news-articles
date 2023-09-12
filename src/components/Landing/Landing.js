import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { getArticles } from '../../api'
import LandingCard from "./LandingCard/LandingCard"
import LandingNav from './LandingNav/LandingNav'

const Landing = ({setCurrentArticle}) => {
  const [topArticles, setTopArticles] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getArticles()
      .then(res => setTopArticles(res.articles.slice(0, 5)))
      .catch(err => console.log(err))
  }, [])
  
  const handleArticleClick = (e) => {
    const articleId = e.target.id || e.target.parentNode.id || e.target.parentNode.parentNode.id
    setCurrentArticle(topArticles.find(article => article.url === articleId))
    navigate('/article')
  }

  let topArticleCards = topArticles.map(article => <LandingCard key={article.url} handleArticleClick={handleArticleClick} {...article}/>)

  return (
    <div>
      {/* <LandingNav/> */}
      {topArticleCards}
    </div>
  )
}

export default Landing