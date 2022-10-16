import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <h1><Link to="/">The Coffee Company.</Link></h1>
      <div>
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  )
}

export default Nav