import React from 'react'
import style from './Contact.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Skill from '../OurSkills/Skill';
import Footer from '../Footer/Footer'
import { addUser } from '../Services/api.js'
import Feedback from '../Feedback/Feedback';



function Contact() {
    const [hide, setHide] = useState(true)
    const [value, setValue] = useState({
        fullName: '',
        Email: '',
        mobileNO: '',
        desc: '',
        Website: ''

    })

    const getInputValue = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })


    }


    const justFlip = () => {
        if (value.fullName === "" || value.fullName.length < 1) {
            document.getElementById('er1').innerHTML = 'name required'


        } else if (value.Email === "") {
            document.getElementById('er2').innerHTML = 'email required'
        } else if (value.mobileNO === "") {
            document.getElementById('er3').innerHTML = 'Number required'
        } else if (value.Website === "") {
            document.getElementById('err4').innerHTML = 'Website required'
        }
        else {
            setHide(false)
            addUser(value)

        }


    }
    const goBack = () => {
        setHide(true)
    }



    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>
            <div className={style.Nav}>
                <Navbar />
            </div>
            <div className={style.MainBox} >
                <h4 className={style.bgColor}>Contact Us</h4>
                {hide ? <div className={style.ContImg} data-aos='fade-up' data-aos-easing="ease-in-sine" data-aos-duration="1000" >
                    <div className={style.contain} data-aos='flip-up' data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <h4>Contact Us</h4>
                        <h5>LET'S  GET IN TOUCH</h5>
                        <p>We are available all the time for any project acording to your need.</p>
                    </div>
                    <div className={style.OurSelf} data-aos='flip-up' data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <h4>Web<span>X</span>pose.com</h4>
                        <p>webxpose4@gmail.com</p>
                    </div>
                    {/* Here We will Use form Tag Accroding to Our Need */}

                    <div className={style.whole_form}>
                        <div className={style.inptbox}>
                            <input type="text" placeholder='Enter Your Name' name='fullName' autoComplete="off" onChange={(e) => { getInputValue(e) }} /><br />
                            <p id='er1' className={style.errormsg}></p>
                            <input type='email' placeholder='Enter Your Email' autoComplete="off" className={style.ext} name='Email' onChange={(e) => { getInputValue(e) }} /><br />
                            <p id='er2' className={style.errormsg}></p>
                            <input type='number' placeholder='Enter Your Number' autoComplete="off" className={style.ext} name='mobileNO' onChange={(e) => { getInputValue(e) }} /><br />
                            <p id='er3' className={style.errormsg}></p>
                            <div className={style.WholeSelectors}>
                                <label htmlFor='Website' className={style.ext}>Choose Your Website</label>
                                <p id='err4' className={style.errormsg}></p>
                                <select name="Website" id="Website" form="WebsiteForm" className={style.ext} onChange={(e) => { getInputValue(e) }}>
                                    <option value="Chossing">Choose Your Website</option>
                                    <option value="Ecommerce websites">Ecommerce websites</option>
                                    <option value="Personal  websites">Personal websites</option>
                                    <option value="Portfolio websites">Portfolio websites</option>
                                    <option value="Small business websites">Small business websites</option>
                                    <option value="School websites">School websites</option>
                                    <option value="Blog websites">Blog websites</option>
                                </select>
                            </div>
                            <br />
                            <div className={style.btnDiv}>
                                <button className={style.btn} onClick={justFlip}>Submit</button>
                            </div>

                        </div>
                        <div className={style.textarea}>
                            <textarea name="desc" id="txtAr" cols="30" rows="10" autoComplete="off" placeholder='Tell me about Your bussiness' onChange={(e) => { getInputValue(e) }}></textarea>
                            <p id='err5'></p>

                        </div>
                    </div>




                </div > :
                    <div>
                        <div className={style.BoxOverlay} data-aos='flip-up' data-aos-easing="ease-in-sine" data-aos-duration="1000">
                            <div id='normalDiv'>
                                <div className={style.CntSupport} data-aos='flip-left' data-aos-easing="ease-in-sine" data-aos-duration="1000">

                                    <p>We provide support  24/7 on business days. Your email will be answered within  24 to 48
                                        hours in business hours after being sent. We will surely reach out and answer your concern
                                        and provide you full support till your satisfaction.
                                    </p>
                                    <div className={style.sptBtn} data-aos='fade-up' data-aos-easing="ease-in-sine" data-aos-duration="1000"  >
                                        <button onClick={goBack}>Go Back</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                }



            </div >
            <div className={style.Cnt}>
                <Skill />
                <Feedback />
                <Footer />
            </div>


        </div >
    )
}

export default Contact
