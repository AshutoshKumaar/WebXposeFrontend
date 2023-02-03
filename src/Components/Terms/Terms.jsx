import React from 'react'
import Navbar from '../Navbar/Navbar'
import Skill from '../OurSkills/Skill'
import Footer from '../Footer/Footer'
import Style from './Terms.module.css'
import Feedback from '../Feedback/Feedback'

function Terms() {
    return (
        <div>
            <Navbar />
            <div className={Style.start}>
                <h3>Terms and Condition</h3>
                <div className={Style.head}>
                    <div className={Style.Domain}>
                        <div className={Style.img}>
                            <img src="https://cdn.pixabay.com/photo/2016/04/22/04/35/domain-1345116_960_720.jpg" alt="error" />
                        </div>
                        <div className={Style.des}>
                            <h3>Domain</h3>
                            <p>
                                We will create a website for you free of charge but for the Domain, you have to purchase it to
                                go live on the internet and connect with the real world which gives you a strong base that cost
                                you some amount depending on your priorities. Domain charges depend on a monthly and yearly basis and will guide you for every step.
                            </p>
                        </div>

                    </div>
                    <div className={Style.Hosting}>
                        <div className={Style.img}>
                            <img src="https://cdn.pixabay.com/photo/2020/07/31/05/44/server-5451985_960_720.jpg" alt="error" />
                        </div>
                        <div className={Style.des}>
                            <h3>Hosting</h3>
                            <p>
                                First, let me explain to you what is Hosting &quot;Hosting [also known as Web site hosting, web
                                hosting, and webhosting] is the business of housing, serving, and maintaining files for one or more
                                Web site. More important than the computer that is provided for the website is the fast connection
                                to the internet.&quot;  that cost you some amount or for that, we have an alternative solution, we
                                can help you with free hosting as per your priorities.
                            </p>
                        </div>

                    </div>
                    <div className={Style.updateBugs}>
                        <div className={Style.img}>
                            <img src="https://media.istockphoto.com/id/1355611023/photo/software-update-or-operating-system-upgrade-to-keep-the-device-up-to-date-with-added.jpg?b=1&s=170667a&w=0&k=20&c=GUL7dRw62ONkWgZjIc7igUUR7_nYQWVbkk3VK05yfwc=" alt="" />
                        </div>
                        <div className={Style.des}>
                            <h3>Update and Bugs</h3>
                            <p>We provide you free website at the initial stage. if you want to update your site or face any
                                bugs in the website then we will charge you depending upon the situation accordingly.
                                These are the only services that are paid.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
            <Skill />
            <Feedback />
            <Footer />

        </div>
    )
}

export default Terms
