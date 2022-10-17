import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div>
        <h4><Link to="/contact">Contact Us</Link></h4>
        <p><Link to="/">The Coffee Company</Link></p>
        <p>Nemo enim ipsam 5</p>
        <p>00100 Lorem</p>
        <p>Ipsum</p>
      </div>
      <div>
        <h4>Ut enim ad minim veniam</h4>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div>
        <p><a href="https://github.com/satuso/" target="blank">© satuso</a></p>
      </div>
    </footer>
  )
}

export default Footer