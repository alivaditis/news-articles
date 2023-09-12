import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { getArticles } from '../../api'
import './Category.css'
import LandingCard from "../Landing/LandingCard/LandingCard"


const Category = ({setCurrentArticle}) => {
  const [categoryArticles, setCategoryArticles] = useState([])

  const { category } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getArticles(category)
      .then(res => setCategoryArticles(res.articles))
      .catch(err => console.log(err))
  }, [])
  
  const handleArticleClick = (e) => {
    const articleId = e.target.id || e.target.parentNode.id || e.target.parentNode.parentNode.id
    setCurrentArticle(categoryArticles.find(article => article.url === articleId))
    navigate('/article')
  }

  let categoryArticleCards = categoryArticles.map(article => <LandingCard key={article.url} handleArticleClick={handleArticleClick} {...article}/>)

  return (
    <div className='landing'>
        <Link to='/'>
          <h1>
            <img className='category-logo' src='https://i0.wp.com/dailyplanetdc.com/wp-content/uploads/2021/11/2006-1.png?resize=735%2C196&ssl=1' alt='daily planet banner covering a globe'/>
          </h1>
        </Link>
        <h2 className='category-heading'>{category.toUpperCase()}</h2>
        {categoryArticleCards}
    </div>
  )
}

export default Category