import React from "react";

function Card({ children, reverse }) {
  const headerStyle = {
    backgroundColor: reverse ? "rgba(0, 0, 0, 0.4)" : "#fff",
    color: reverse ? "#fff" : "rgba(0,0,0,1)",
  };
  return (
    <div className="card" style={headerStyle}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};
export default Card;
