import React from 'react'
import "../../styles/_main.scss";
import "../../styles/_mediaQuery.scss";
import HeadingTemp from '../common/HeadingTemp';
import myPic from "../../assets/pp.jpg";
const About = () => {
    return (
        <>
            <section className='about-sec'>
                <HeadingTemp headingNumber="01." headingText="About me" />
                <div className="about-sec-inner">
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
