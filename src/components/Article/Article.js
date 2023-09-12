import { Link } from 'react-router-dom'
import './Article.css'

const Article = ({url, urlToImage, title, description, author, publishedAt, content, source}) => {

  window.scrollTo(0, 0);

  return (
    <article>
      <img className='article-img' src={urlToImage}/>
      <Link to='/'>
        <img className='article-logo' src='https://i0.wp.com/dailyplanetdc.com/wp-content/uploads/2021/11/2006-1.png?resize=735%2C196&ssl=1' alt='daily planet banner covering a globe'/>
      </Link>
      <div className='article-info'>
        <h2>{title}</h2>
        <div className='auth-date-container'>
            <p className='landing-author'>By {author}</p>
            <p className='landing-bullet'>•</p>
            <p>{publishedAt.slice(0,10)}</p>
        </div>
        <p className='article-src'>{source.name}</p>
        <p className='article-content'>{content}</p>
      </div>
    </article>
  )
}

export default Article