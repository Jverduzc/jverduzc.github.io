/**
 * Home component
 *
 * A header section resembling a professional profile layout, featuring a profile picture,
 * a background image, and organized details such as name, title, and additional information.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * Home background and profile images
 *
 * Replace `backgroundImage` and `profileImage` with your chosen images.
 * You can upload your images into the "images" directory.
 */
import backgroundImage from "../images/snowy_background.jpg";
import profileImage from "../images/JCVerduzco_ProfilePicture.png";

const imageAltText = "Background showcasing a cool forest";
const profileAltText = "Profile picture of the user";

const Home = ({ name, title }) => {
  return (
    <header id="home" className="header-container">
      {/* Background Image */}
      <div className="background-container">
        <img className="background-image" src={backgroundImage} alt={imageAltText} />
      </div>

      {/* Content Section */}
      <div className="content-container">
        {/* Profile Picture */}
        <div className="profile-frame">
          <img className="profile-picture" src={profileImage} alt={profileAltText} />
        </div>

        {/* Name and Title */}
        <div className="text-container">
          <h1 className="name" style={{ fontSize: "2rem" }}>{name}</h1>
          <h2 className="title" style={{ fontSize: "1.5rem" }}>{title}</h2>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <a href="#home" className="button">Home</a>
          <a href="#about" className="button">About</a>
          <a href="#portfolio" className="button">Research Publications</a>
          <a href="#footer" className="button">Contact</a>
        </div>
      </div>
    </header>
  );
};

Home.defaultProps = {
  name: "Your Name",
  title: "Your Title or Career Focus",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;