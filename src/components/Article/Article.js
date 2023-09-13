import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Article.css'

const Article = ({url, urlToImage, title, author, publishedAt, content, source, currentArticle}) => {

  const navigate = useNavigate()

  window.scrollTo(0, 0);
  
  useEffect(() => {
    if (!currentArticle) {
      navigate ('/')
    }
  }, [currentArticle])

  if (currentArticle) {
    return (
      <article>
        <img className='article-img' src={urlToImage}/>
        <Link to='/'>
          <img className='article-logo' src='https://i0.wp.com/dailyplanetdc.com/wp-content/uploads/2021/11/2006-1.png?resize=735%2C196&ssl=1' alt='daily planet banner covering a globe'/>
        </Link>
        <div className='article-info'>
          <h2>{title.split(' - ')[0]}</h2>
          <div className='auth-date-container'>
              {author && <p className='landing-author'>By {author}</p>}
              {author && publishedAt && <p className='landing-bullet'>•</p>}
              {publishedAt && <p>{publishedAt.slice(0,10)}</p>}
          </div>
          <p className='article-src'>{source.name}</p>
          <p className='article-content'>{content}</p>
        </div>
      </article>
    )
    }
}

export default Article