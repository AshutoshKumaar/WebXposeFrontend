import React, { useEffect } from 'react'
import Sec from './Section.module.css'
import Navbar from '../Navbar/Navbar'
import Skill from '../OurSkills/Skill'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Sam from './sam.jpeg'
import Annu from './Annu.jpg'
import Rahul from './rahul.png'
import Ashu from './ashutoshv.jpg'
import Footer from '../Footer/Footer'
import Feedback from '../Feedback/Feedback'

export default function Section() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className={Sec.StartDiv}>
      <div className={Sec.nav}>
        <Navbar />
      </div>
      <div className={Sec.mainDiv}>
        <h3 className={Sec.Teams}>Our Teams</h3>
        <div className={Sec.section1}>
          <div
            className={Sec.profilesection}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <div>
              <img className={Sec.profileimage} src={Annu} alt="Anuridhi" />
            </div>
            <div className={Sec.mem}>
              <h3 className={Sec.profilename}>Anuridhi Rathore</h3>
              <h4 className={Sec.profileposition}>Product Manager</h4>
              <a href="https://annuportfolio.netlify.app/" target='_blank' rel="noreferrer" ><button>Know More</button></a>
            </div>
          </div>

          <div
            className={Sec.profilesection}
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <div>
              <img className={Sec.profileimage} src={Ashu} alt="Anuridhi" />
            </div>
            <div className={Sec.mem}>
              <h3 className={Sec.profilename}>Ashutosh Sinha</h3>
              <h4 className={Sec.profileposition}>
                Chief Executive Officer (CEO)
              </h4>
              <a href="https://ashutoshinfo.netlify.app/" target='_blank' rel='noreferrer'> <button>Know More</button></a>
            </div>
          </div>
          <div
            className={Sec.profilesection}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <div>
              <img className={Sec.profileimage} src={Sam} alt="Anuridhi" />
            </div>
            <div className={Sec.mem}>
              <h3 className={Sec.profilename}>Somnath Banarjee</h3>
              <h4 className={Sec.profileposition}>Front End Developer</h4>
              <a href="https://samcoonector.netlify.app/" target='_blank' rel='noreferrer'> <button>Know More</button></a>
            </div>
          </div>
          <div
            className={Sec.profilesection}
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <div>
              <img className={Sec.profileimage} src={Rahul} alt="Anuridhi" />
            </div>
            <div className={Sec.mem}>
              <h3 className={Sec.profilename}>Rahul Pareek</h3>
              <h4 className={Sec.profileposition}>Full Stack Developer</h4>
              <a href="https://rahulpareekporfolio.netlify.app/" target='_blank' rel='noreferrer'> <button>Know More</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className={Sec.exSkill}>
        <Skill />
        <Feedback />
        <Footer />
      </div>
    </div>
  )
}
