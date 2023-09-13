import CategoryButton from "./CategoryButton/CategoryButton"
import { Link } from 'react-router-dom'
import './LandingNav.css'

const LandingNav = () => {
  return (
    <nav>
      <Link to ='/'>
        <h1>
          <img className='logo' src='https://i0.wp.com/dailyplanetdc.com/wp-content/uploads/2021/11/2006-1.png?resize=735%2C196&ssl=1' alt='daily planet banner covering a globe'/>
        </h1>
      </Link>      
      <div className="category-button-container">
        <CategoryButton category={'business'}/>
        <CategoryButton category={'entertainment'}/>
        <CategoryButton category={'health'}/>
        <CategoryButton category={'science'}/>
        <CategoryButton category={'sports'}/>
        <CategoryButton category={'technology'}/>
      </div>
    </nav>
  )
}

export default LandingNav