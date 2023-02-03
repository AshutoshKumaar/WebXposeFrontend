import React from 'react'
import Style from './Footer.module.css'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { CgTwitter } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { AiOutlineGithub } from 'react-icons/ai'

function Footer() {
    return (
        <div className={Style.main}>
            <div className={Style.GetInTouch} >
                <div className={Style.OurLogo}>
                    <h1>Web<span>X</span>pose</h1>
                    <p>©<span>2023</span></p>
                </div>
                <div className={Style.Company}>
                    <h3>Company</h3>
                    <Link to="/about"><p>About us</p></Link>
                    <Link to="/Contact"><p>Contact us</p></Link>
                    <Link to="/Condition"><p>Condition</p></Link>
                </div>
                <div className={Style.furtherInfo}>
                    <h3>Further Information</h3>
                    <Link to="/Condition">
                        <p>Terms and Condition</p>
                    </Link>
                    <Link to="/donation">
                        <p>Rate us</p>
                    </Link>
                    <div className={Style.FollowUs}>
                        <h3>Follow Us</h3>
                        <ul>
                            <a href="https://www.instagram.com/webxpose4/" target='_blank' rel='noreferrer' ><li><BsInstagram /></li></a>
                            <a href="https://github.com/thewebxpose" target='_blank' rel='noreferrer' > <li><AiOutlineGithub /></li></a>
                            <a href="https://www.linkedin.com/in/web-x-pose-4954b3264/" target='_blank' rel='noreferrer'> <li> <BsLinkedin /> </li></a>
                            <a href="https://twitter.com/webxpose4" target='_blank' rel='noreferrer'><li> <CgTwitter /> </li></a>
                        </ul>
                    </div>
                </div>
                <div className={Style.FooterImg}>
                    <img src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="error" />
                </div>
            </div>
        </div>
    )
}

export default Footer
