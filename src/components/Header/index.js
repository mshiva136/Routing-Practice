import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="nav-bar">
    <li className="icon-holder">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="icon-image"
        alt="wave"
      />
      <p className="name">Wave</p>
    </li>
    <li className="ml">
      <Link to="/" className="name">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="name">
        About
      </Link>
    </li>
    <li>
      <Link to="/contact" className="name">
        Contact
      </Link>
    </li>
  </ul>
)

export default Header
