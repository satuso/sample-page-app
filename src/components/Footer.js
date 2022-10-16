import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer>
    <div>
      <p><Link to="/">The Coffee Company</Link></p>
      <p>Coffee Road 5</p>
      <p>00100 Helsinki</p>
      <p>Finland</p>
    </div>
    <div>
      <p><Link to="/contact">Contact Us</Link></p>
    </div>    
    <div>
      <p>© The Coffee Company</p>
    </div>
    </footer>
  )
}

export default Footer