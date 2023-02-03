import React from 'react';
import style from './Skill.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'


function Skill() {

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className={style.box}>
            <div className={style.firsBox} >
                <div className={style.FImg}>
                    <img src="	https://obelisk.themescamp.com/demo6/wp-content/uploads/sites/7/2021/11/01-2.jpg" alt="error" />
                </div>
                <div className={style.Exp}>
                    <h4>5</h4>
                    <p>Years Of Experience</p>
                </div>
            </div>
            <div className={style.BgImg} data-aos='fade-up' data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <img src="https://obelisk.themescamp.com/demo6/wp-content/uploads/sites/7/2021/11/02-1.jpg" alt="error" />
            </div>
            <div className={style.Contain}>
                <h3>Unlimited Skills <br /> for Super Projects.</h3>
                <p>Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).
                    We develop creative solutions for small and big brands alike, build authentic product identities and much more.
                </p>
                <div className={style.btn}>
                    <button><Link to='/about'>Know Team</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Skill
