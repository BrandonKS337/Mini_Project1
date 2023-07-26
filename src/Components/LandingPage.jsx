import React from "react";
import { Link } from "react-router-dom";
import orWithArrows from "../Assets/Icons/orWithArrows.svg";
import "../App.css";
import combatGiantBackground from "../Assets/images/combatGiantBackground.jpg";
import fantasyNexusLogo from "../Assets/Icons/fantasyNexusLogo.svg";
import appleButton from "../Assets/buttons/appleButton.svg";
import googleButton from "../Assets/buttons/googleButton.svg";
import facebookButton from "../Assets/buttons/facebookButton.svg";
import CheckboxButton from "./Checkbox";

const linkColor = "#0066FF";
const visitedLinkColor = "#0066FF";

const componentStyle = {
  backgroundImage: `url(${combatGiantBackground})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  height: "100vh",
  width: "100vw",
};

const logo = {
  width: "35rem",
  position: "fixed",
  top: "14%",
  left: "5%",
  zIndex: 2,
  gap: "15px",
};

const loginBox = {
  position: "fixed",
  top: "35%",
  left: "10%",
  zIndex: 2,
  gap: "15px",
};

const inputBox = {
  width: "40vw",
  height: "2rem",
  display: "flex",
  // alignItems: 'left',
  borderRadius: "20px",
  background: "#fff",
  border: "1px solid black",
  padding: "10px 20px",
  fontSize: "24px",
  marginBottom: "15px",
  display: "block",
};

const centerInputs = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  // alignItems: "left",
  // width: '100%'
};

const orWithArrowsStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px auto",
};

const loginButton = {
  width: "20vw",
  height: "2.5rem",
  border: "1px solid white",
  borderRadius: "20px",
  fill: "white",
};

const loginRowStyle = {
  display: "flex",
  // justifyContent: "space-between",
  // alignItems: "center",
  gap: "10rem",
};

const altLoginButtons = {
  display: "flex",
  flexDirection: "column",
  width:'100%'
};

const svgButtonStyle = {
  background: "none",
  border: "none",
  // width: '100%',
  alignItems: 'center'
};

const rememberMeContainerStyle = {
  display: "flex",
  alignItems: " left",
  gap: "10px",
  marginBottom: "15px",
};

const rememberMeTextStyle = {
  color: "white",
  // horizontalAlign: "left",
};

const dividerGap = {
  // margin: "1rem",
};

export default function LandingPage({ onLogin }) {
  return (
    <>
      <div style={componentStyle}>
        <div>
          <img style={logo} src={fantasyNexusLogo} alt="Fantasy Nexus Logo" />
          {/* <h1>Fantasy Nexus</h1>
            <p>A BrandonBuildsStuff Inc Product</p> */}
        </div>
        <div style={loginBox}>
          <div className="authentication" style={centerInputs}>
            {/* <label for="userName">Name</label> */}

            <input
              style={inputBox}
              type="userName"
              placeholder="Username"
              id="userName"
            />

            <input
              style={{ ...inputBox, marginBottom: "10px" }}
              type="password"
              placeholder="Password"
              id="password"
            />

            <div className="rememberMe" style={rememberMeContainerStyle}>
              <CheckboxButton />
              <span style={rememberMeTextStyle}>Remember Me</span>
            </div>

            <div style={loginRowStyle}>
              {/* <Link to="HomePage" style={{ textDecoration: "none" }}> */}
                <button style={loginButton} onClick={onLogin}>Login</button>
              {/* </Link> */}
              <a href="/" style={{ color: linkColor, textDecoration: "none" }}>
                Forgot Password?
              </a>
              {/* This needs to be an a href by end of project. Just placing for now until the main mini project is completed. */}
            </div>
            <div>
              <p style={{ color: "white" }}>
                Don't have an Account?{" "}
                <a
                  href="/"
                  style={{ color: linkColor, textDecoration: "none" }}
                >
                  {" "}
                  Create new
                </a>
              </p>
              {/* Create new also needs to be an href but needs to open the overlay */}
            </div>
            <div style={orWithArrowsStyle}>
              <img src={orWithArrows} style={dividerGap} alt="Or with arrows" />{" "}
            </div>
            <div style={altLoginButtons}>
              <button style={svgButtonStyle}>
                <a href="https://www.facebook.com">
                  <img src={facebookButton} />
                </a>
              </button>
              <button style={svgButtonStyle}>
                <a href="https://www.google.com">
                  <img src={googleButton} />
                </a>
              </button>
              <button style={svgButtonStyle}>
                <a href="https://www.apple.com">
                  <img src={appleButton} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
