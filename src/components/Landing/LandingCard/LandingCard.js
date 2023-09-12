import './LandingCard.css'

const LandingCard = ({url, urlToImage, title, description, author, publishedAt, handleArticleClick}) => {
  return (
      <div className='landing-card' id={url} onClick={((e) => handleArticleClick(e))}>
        <img className='landing-article-img' src={urlToImage} alt={description}/>
        <div className='landing-article-info'>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className='auth-date-container'>
            <p>By {author}</p>
            <p>-</p>
            <p>{publishedAt.slice(0,10)}</p>
          </div>
        </div>
      </div>
  )
}

export default LandingCard