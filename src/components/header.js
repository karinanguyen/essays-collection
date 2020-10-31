import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className ="Header">
    <div className = "HeaderGroup">
      <Link to ="/"><img src={require('../images/logo.png')} width="30" /></Link>
      <Link to ="/About"> About </Link>
      <Link to ="/Work"> Work </Link>
      <Link to ="/Projects"> Projects </Link>
      <Link to ="/Photography"> Photography </Link>
      <Link to ="/Contact"><button>Contact</button></Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
