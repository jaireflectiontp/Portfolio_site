import React from 'react'
import "../../styles/_main.scss";
import "../../styles/_mediaQuery.scss";
import HeadingTemp from '../common/HeadingTemp';
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Contact = () => {
    return (
        <>
            <section className='contact-sec'>
                <HeadingTemp headingNumber="04." headingText="Contact Me" />
                <div className="contact-container">
                    <div className="contact-form">
                        <form action="contact">
                            <div className="input-control">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div className="input-control">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" placeholder="Enter your email address" />
                            </div>
                            <div className="input-control">
                                <label htmlFor="name">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Type your message....."
                                    id=""
                                    cols="30"
                                    rows="10"
                                ></textarea>
                            </div>
                            <div className="input-control">
                                <div className="submit-btn">
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        endIcon={<SendIcon />}
                                    >
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="contact-details">
                        <div className="map-wrap">
                            <iframe style={{ width: '100%', height: '100%' }} src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d510832.1010589424!2d78.94499084544778!3d21.473206280510286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI0JzMwLjgiTiA3OMKwNTknMDkuNyJF!5e0!3m2!1sen!2sin!4v1691834997510!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                        <div className="map-info">
                            Jay Rautel
                            <br />
                            India
                            <br />
                            Gumagaon Mine, Khapa 441101
                            <br />
                            Nagpur, Maharashtra
                            <br />
                            <span>jayrautel625@gmail.com
                                <br />
                                +91-9146635275
                            </span>
                        </div>
                        <div class="social-contact">
                            <div class="social-links" id="linkdn">
                                <a href="https://www.linkedin.com/in/jay-rautel-96b57b20a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJeUkgAYgS86sPZGuPEAnAw%3D%3D">
                                    <LinkedInIcon fontSize="large" />
                                </a>
                            </div>
                            <div class="social-links" id="git">
                                <a href="https://github.com/jaireflectiontp">
                                    <GitHubIcon />
                                </a>
                            </div>
                            <div class="social-links" id="insta">
                                <a href="https://www.instagram.com/jay_rautel/">
                                    <InstagramIcon />
                                </a>
                            </div>
                            <div class="social-links" id="twtr">
                                <a href="https://www.instagram.com/jay_rautel/">
                                    <TwitterIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
