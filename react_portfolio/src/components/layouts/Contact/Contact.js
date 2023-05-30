import React from "react";
import "./contact.scss";
import Heading from "../../common/Heading";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <Heading headingNumber="03." headingText="Contact Me" />
        <div className="contact-container">
          <div className="contact-details">
            <div className="map-wrap">
              <MapContainer center={[21.408580, 78.986015]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[21.408580, 78.986015]}>
                  <Popup>Hey, This is where i live</Popup>
                </Marker>
              </MapContainer>
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
        </div>
      </section>
    </>
  );
};

export default Contact;
