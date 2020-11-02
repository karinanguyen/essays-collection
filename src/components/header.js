import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

class Header extends React.Component{
  constructor(props) {
    super(props) 

    this.state ={
      hasScrolled: false 
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',
    this.handleScroll)

  }

  handleScroll = (event) =>{
    const scrollTop = window.pageXOffset
    if (scrollTop > 50) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({hasScrolled: false})
    }
  }


  render(){
    return (
      <div>
        <div className ={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className = "HeaderGroup">
          <Link to ="/"><img src={require('../images/logo.png')} width="30" /></Link>
          <Link to ="/About"> About </Link>
          <Link to ="/Work"> Work </Link>
          <Link to ="/Projects"> Projects </Link>
          <Link to ="/Photography"> Photography </Link>
          <Link to ="/Contact"><button>Contact</button></Link>
        </div>
  </div>

      </div>
    )
  }
}

export default Header
