import React from "react";

const linkColor = "#0066FF";

const footerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  height: "30px",
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
  lineHeight: "35px",
//   textSize: '8px'
};

export default function Footer() {
  return (
    <>
      <div style={{...footerStyle, textSize:'12px'}}>
        2023 Brandon Builds it LLC |{" "}
        <a
          href="/"
          style={{ color: linkColor, textDecoration: "none", textSize: "12px" }}
        >
          Archives
        </a>{" "}
        |{" "}
        <a href="/" style={{ color: linkColor, textDecoration: "none" }}>
          Policies
        </a>{" "}
        |{" "}
        <a href="/" style={{ color: linkColor, textDecoration: "none" }}>
          FAQ
        </a>
      </div>
    </>
  );
}
