import PropTypes from "prop-types";
import React from "react";

function Header({ bgColor, text, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
  text: "Feedback Ui",
};
Header.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
