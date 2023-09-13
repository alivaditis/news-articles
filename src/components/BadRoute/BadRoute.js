import LandingNav from "../Landing/LandingNav/LandingNav"
import './BadRoute.css'

const BadRoute = () => {
  return (
    <div className="bad-route">
      <LandingNav/>
      <h2 className='bad-route-heading'>There's nothing here!</h2>
    </div>
  )
}

export default BadRoute