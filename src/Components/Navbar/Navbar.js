import React from 'react'
import PropTypes from 'prop-types'
import hearderCSS from '../Navbar/Navbar.module.css'
import img1 from './wpx.png'
import { VscMenu } from 'react-icons/vsc'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  const justShow = () => {
    let Nav = document.querySelector('#Nav')
    let ul = Nav.getElementsByTagName('ul')
    ul[0].style.display = 'block'
  }
  const justHide = () => {
    let Nav = document.querySelector('#Nav')
    let ul = Nav.getElementsByTagName('ul')
    ul[0].style.display = 'none'
  }
  return (
    <div className={hearderCSS.header}>
      <div className={hearderCSS.logo}>
        <img className={hearderCSS.logoimage} src={img1} alt="webxpose" />
      </div>

      <div className={hearderCSS.navbar} id="Nav">
        <ul>
          <Link to="/Home">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
          <Link to="/Condition">
            <li>Terms & Condition</li>
          </Link>
          <Link to="/donation">
            <li>Feedback</li>
          </Link>

          <div className={hearderCSS.crossBar}>
            <RxCross2 className={hearderCSS.crs} onClick={justHide} />
          </div>
        </ul>
      </div>
      <div className={hearderCSS.icons}>
        <VscMenu className={hearderCSS.vsc} onClick={justShow} />
      </div>
    </div>
  )
}

Navbar.prototype = { home: PropTypes.string.isRequired }
