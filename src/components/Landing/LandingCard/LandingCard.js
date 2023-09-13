import './LandingCard.css'

const LandingCard = ({url, urlToImage, title, description, author, publishedAt, handleArticleClick, source}) => {
  return (
      <div className='landing-card' id={url} >
        <img className='landing-article-img' src={urlToImage} alt={description}onClick={((e) => handleArticleClick(e))}/>
        <div className='landing-article-info'>
          <h2 className='landing-article-title' onClick={((e) => handleArticleClick(e))}>{title.split(' - ')[0]}</h2>
          <p className='landing-article-description'>{description}</p>
          <div className='auth-date-container'>
            {author && <p className='landing-author'>By {author}</p>}
            {author && publishedAt && <p className='landing-bullet'>•</p>}
            {publishedAt && <p>{publishedAt.slice(0,10)}</p>}
          </div>
          <p className='landing-article-source'>{source.name}</p>
        </div>
      </div>
  )
}

export default LandingCard