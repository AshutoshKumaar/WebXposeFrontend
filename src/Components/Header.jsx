import React from 'react'
import '../App.css'
import Skill from './OurSkills/Skill'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer';
import { useEffect } from 'react';
import Feedback from './Feedback/Feedback';




function Header() {

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className='mainComponets'>
            <div className='Navbar'>
                <Navbar />
            </div>


            {/* Starting of Header Components */}
            <div className='headerComponets'>
                <div className='fItem'>
                    <img src="https://cpwebassets.codepen.io/assets/packs/illu-editor-24091b7edc92fba11a2595fe767e6c2b.png" alt="error" />
                </div>

                <div className='cnt'>
                    <div className='cnt1'>
                        <h1>The New Chapter of Tech</h1>
                        <p>WebXpose is a new revolution in the Tech-World</p>

                    </div>
                    <div className='cnt2'>
                        <h1>trusted & Safe</h1>
                        <h3>We code We live</h3>
                        <p>We make webiste for you free beacuse we love coding</p>

                    </div>

                </div>

            </div>
            {/* Ending of header */}


            <Skill />
            <Feedback />
            <Footer />




        </div >
    )
}

export default Header
