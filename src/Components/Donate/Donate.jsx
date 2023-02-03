
import Navbar from '../Navbar/Navbar'
import style from './Donate.module.css'
import Skill from '../OurSkills/Skill'
import Footer from '../Footer/Footer'
import Feedback from '../Feedback/Feedback'
import { BsFillStarFill } from 'react-icons/bs'
import { useState } from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import { feedBacUser } from '../Services/api'

// Import Swiper styles


const colors = {
    orange: 'FFA500',
    grey: '#a9a9a9'
}


function Donate() {
    useEffect(() => {
        Aos.init()
    })
    const stars = Array(5).fill(0)
    const [currentValue, setValue] = useState(0)
    const [userFeedback, setFeedBack] = useState({ UserName: "", userEmail: "", userfeedBack: "", StarsValue: "" })
    const [hoverValue, setHoverValue] = useState(undefined)

    const handleClick = (value) => {
        setValue(value)
        setFeedBack({ ...userFeedback, StarsValue: value })

    }
    const handleMouseHover = (value) => {
        setHoverValue(value)
    }
    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
    const handleSearch = (e) => {
        setFeedBack({ ...userFeedback, [e.target.name]: e.target.value })
    }
    const justClick = () => {
        document.getElementById('justName').value = ''
        document.getElementById('justEmail').value = ''
        document.getElementById('justText').value = ''
        feedBacUser(userFeedback)
    }

    return (
        <div>
            <Navbar />
            <div className={style.main_part}>
                <div className={style.frst}>
                    <div className={style.main} data-aos="flip-left" data-aos-delay="100" >
                        <div className={style.conatin}>
                            <p>Please Invest your few minutes and rate us. Every rating is important for us</p>
                        </div>
                        <div className={style.inpts}>
                            <input type="text" placeholder='Enter Your Name' name='UserName' autoComplete="off" onChange={(e) => { handleSearch(e) }} id='justName' /><br />
                            <input type="email" placeholder='Enter Your Email' name='userEmail' autoComplete="off" onChange={(e) => { handleSearch(e) }} id='justEmail' /><br />
                            <textarea name="userfeedBack" id="justText" cols="30" rows="10" placeholder='Write Something about us' onChange={(e) => { handleSearch(e) }} ></textarea>
                        </div>
                        <div className={style.stars}>
                            {stars.map((_, index) => {
                                return (
                                    <BsFillStarFill
                                        key={index}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseHover(index + 1)}
                                        onMouseLeave={() => handleMouseLeave()}
                                        className={style.iconsStars}

                                    />
                                )
                            })}
                        </div>
                        <div className={style.btn}>
                            <button onClick={justClick}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Feedback />
            </div>
            <Skill />
            <Footer />

        </div>
    )
}

export default Donate
