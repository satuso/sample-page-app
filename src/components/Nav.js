import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <h1><Link to="/">Lorem ipsum dolor sit amet</Link></h1>
      <div>
        <Link to="/about">Lorem</Link> | {" "}
        <Link to="/contact">Ipsum</Link>
      </div>
    </nav>
  )
}

export default Nav