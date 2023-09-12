import CategoryButton from "./CategoryButton/CategoryButton"
import './LandingNav.css'

const LandingNav = () => {
  return (
    <nav>
      <img className='logo' src='https://i0.wp.com/dailyplanetdc.com/wp-content/uploads/2021/11/2006-1.png?resize=735%2C196&ssl=1' alt='daily planet banner covering a globe'/>
      <div className="category-button-container">
        <CategoryButton category={'business'}/>
        <CategoryButton category={'enertainment'}/>
        <CategoryButton category={'health'}/>
        <CategoryButton category={'science'}/>
        <CategoryButton category={'sports'}/>
        <CategoryButton category={'technology'}/>
      </div>
    </nav>
  )
}

export default LandingNav