import React from "react";
import "./homepage.scss"
const HomePage = () => {
    return (
        <>
            <section className="intro-section">
                <div className="intro-in">
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
                <div className="intro-img"></div>
            </section>
        </>
    );
};

export default HomePage;
