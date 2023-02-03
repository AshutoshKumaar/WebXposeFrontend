import React from 'react'
import Style from './Home.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {
    const [hide, setHide] = useState(true)
    const [user, setUser] = useState({
        userName: ''
    })
    const getValue = (e) => {
        setUser({ ...user, userName: e.target.value })
    }
    const justFun = () => {
        if (user.userName === "") {
            setHide(true)
        } else {

            setHide(false)

        }

    }


    useEffect(() => {
        AOS.init({

            easing: 'ease-in-sine',

        })
    })
    return (
        <div className={Style.Home}>
            <div className={Style.WelcomeNote} data-aos='fade-down' data-aos-duration='400'>
                <h1 className={Style.Welcome_content}>
                    <span className={Style.capital} data-aos='flip-up' data-aos-duration="700"  >W</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="800" >E</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="1000" >L</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="1200" >C</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="1400" >O</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="1600"  >M</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="1600" >E</span><span className={Style.capital} data-aos='flip-up' data-aos-duration="1800">T</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="1800">O</span><span className={Style.capital} data-aos='flip-up' data-aos-duration="1800" >W</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="2000">E</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="2200" >B</span><span className={Style.new} data-aos='fade-down' data-aos-duration="2400" >X</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="2600">P</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="2800" >O</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="3000" >S</span><span className={Style.letter} data-aos='fade-down' data-aos-duration="3000" >E</span>
                </h1>
            </div>
            {
                hide ? <div className={Style.getUserInfo} data-aos='fade-up' data-aos-duration='1000'>
                    <label htmlFor="name">Enter Your Name</label> <input type="text" placeholder='Enter Your Name' onChange={(e) => { getValue(e) }} />
                    <button onClick={justFun}>Submit</button>
                </div> : <div>
                    <div className={Style.msg} data-aos='flip-left' >
                        <p>
                            Hello <span className={Style.name}>{user.userName}</span> , Welcome to the <span className={Style.name}>web<span className={Style.X}>X</span>pose</span>. <br />I would to say that it is a non-profitable orginazation. We provide a free website for your Business Insights and analytics. We create sites depending on your need and requirements without any cost because for us satisfaction matters. We don't think about money We always think about your satisfaction.
                        </p>
                        <div className={Style.ComeIn}>
                            <Link to='/Home'><button>Welcome</button></Link>
                        </div>

                    </div>
                </div>
            }



        </div >
    )
}

export default Home
