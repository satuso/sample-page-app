import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div>
        <h4><Link to="/contact">Ipsum</Link></h4>
        <p><Link to="/">Lorem ipsum dolor sit amet</Link></p>
        <p>Nemo enim ipsam 5</p>
        <p>00000 Lorem</p>
        <p>Ipsum</p>
      </div>
      <div>
        <h4><Link to="/">Ut enim ad minim veniam</Link></h4>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Duis aute irure dolor in reprehenderit</p>
      </div>
      <div>
        <h4><Link to="/">Ut enim ad minim veniam</Link></h4>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </footer>
  )
}

export default Footer