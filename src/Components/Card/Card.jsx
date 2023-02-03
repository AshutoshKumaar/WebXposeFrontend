import React from 'react'
import Style from '../Feedback/Feedback.module.css'
import { BsFillStarFill } from 'react-icons/bs'
// import { useState } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ImUser } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { getFeedBack } from '../Services/api'



import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import { useState, useEffect } from 'react'

function Card() {

    const [feedBacUser, setFeedBackUser] = useState([])

    useEffect(() => {
        getAllFeedBack()
    })
    const getAllFeedBack = async () => {
        const res = await getFeedBack()
        setFeedBackUser(res.data)

    }









    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Autoplay]}
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {feedBacUser.map((item, index) => {
                    const showStarts = Array(item.StarsValue).fill(0)
                    return (<SwiperSlide key={index}> <div className={Style.FeedbackDiv}>
                        <div className={Style.perSonal}>
                            <h3 className={Style.Name}><span><ImUser /></span>{item.UserName}</h3>
                            <p className={Style.email}><span><MdEmail /></span>{item.userEmail}</p>
                        </div>
                        <div className={Style.getStars}>
                            {showStarts.map((_, index) => { return (<BsFillStarFill key={index} className={Style.getICons} />) })}
                        </div>
                        <div className={Style.content}>
                            <p>{item.userfeedBack}.</p>
                        </div>
                    </div></SwiperSlide>)
                })}

            </Swiper>

        </div >
    )
}

export default Card
