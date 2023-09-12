import { Link } from "react-router-dom";
import './CategoryButton.css'

const CategoryButton = ({category}) => {
  return (
    <Link to={`/categories/${category.toLowerCase()}`}>
      <button className="category-button">
        {category[0].toUpperCase()+category.slice(1)}
      </button>
    </Link>
  )
}

export default CategoryButton