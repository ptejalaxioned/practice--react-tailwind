import PropTypes from "prop-types";
import React from 'react';

const Header = ({ title, caption }) => {
  const headerStyling={
    padding:"20px 20px",
    backgroundColor:"#a71b28",
    color:"white",
    fontWeight:"bolder",
  }
  return (
    <div style={headerStyling}>
      <h1>Practice</h1>
      {caption ? <p>{title}</p> : ""}
    </div>
  );
};

// Default props (Only applies if props are missing)
Header.defaultProps = {
  title: "Your title",
  caption: true,
};

// Remove .isRequired if using defaultProps
Header.propTypes = {
  title: PropTypes.string,  // No .isRequired
  caption: PropTypes.bool,  // No .isRequired
};

export default Header;
