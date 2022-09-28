import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import Owner from "../../../images/owner.png"
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/_ankushnain_";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
            //   src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              src={Owner}
              alt="Founder"
            />
            <Typography>Ankush Kumar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @ankushKumar. Only with the
              purpose to Learning MERN Stack on the channel of 6 Pack Programmer
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCOP6Ysf4-uT6dhOl-X-1dSQ"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/_ankushnain_" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;