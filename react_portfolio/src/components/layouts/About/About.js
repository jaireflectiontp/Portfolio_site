import React from 'react'
import "./about.scss"
import myPic from "../../../assets/images/aboutPic.jpg"
import Heading from '../../common/Heading'
const About = () => {
  return (
    <>
       <section className='about-section'>
                <Heading headingNumber="01." headingText="About me"/>
                <div className="about-content">
                    <div className="about-me">
                        <p>Hello! I'm Jay Rautel. A Full-Stack Web Developer</p>
                        <p>I am an enthusiast learner, so far i have worked with frontend technology such as HTML, CSS, JavaScript, ReactJs, Jquery,
                            BootStarp & Looking forward to apply my skills and knowledge as a developer to the growth of the organization.
                        </p>
                    </div>
                    <div className="my-img">
                        <div className="img-container">
                            <img src={myPic} alt="my image" /></div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default About
