import React from 'react';
import "../../styles/_main.scss";
import "../../styles/_mediaQuery.scss";
import introImg from "../../assets/intro.png"
const Home = () => {
    return (
        <>
            <section className="introduction">
                <div className="intro-img">
                    <img src={introImg} alt="intro-banner" />
                </div>
                <div className="introduction-typo">
                    <div className="intro-greet">
                        <small>Hi, my name is</small>
                    </div>
                    <div className="my-name">
                        <h2>Jay Rautel.</h2>
                    </div>
                    <div className="role">
                        <h2>I'm a Frontend <br /> Web Developer</h2>
                    </div>
                    <div className="brief-intro">
                        <p>| Frontend Developer | Javascript | React js |</p>
                    </div>
                    <div className="dwnld-cv">
                        <button>Resume</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
