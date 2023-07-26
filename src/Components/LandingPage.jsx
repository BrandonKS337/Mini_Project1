import React from "react";
import orWithArrows from "../Assets/Icons/orWithArrows.svg";
import "../App.css";
import combatGiantBackground from "../Assets/images/combatGiantBackground.jpg";
import fantasyNexusLogo from "../Assets/Icons/fantasyNexusLogo.svg";

const componentStyle = {
  backgroundImage: `url(${combatGiantBackground})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  height: "100vh",
  width: "100vw",
};

const loginBox = {
  position: "fixed",
  top: "20%",
  left: "10%",
  zIndex: 2,
  gap: "15px",
};

const logo = {
  width: "500px",
};

const inputBox = {
  width: "25rem",
  height: "4rem",
  borderRadius: "12px",
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
  alignItems: "center",
};

const checkBox = {
    width: '12px',
    height: '12px',
    border: '1px solid black',
    borderRadius: '45px',
    
}

const Landing = () => {
  return (
    <>
      <div style={componentStyle}>
        <div style={loginBox}>
          <div>
            <img style={logo} src={fantasyNexusLogo} alt="Fantasy Nexus Logo" />
            {/* <h1>Fantasy Nexus</h1>
            <p>A BrandonBuildsStuff Inc Product</p> */}
          </div>
          <div className="authentication" style={centerInputs}>
            {/* <label for="userName">Name</label> */}

            <input
              style={inputBox}
              type="userName"
              placeholder="Username"
              id="userName"
            />

            <input
              style={{ ...inputBox, marginBottom: 0 }}
              type="password"
              placeholder="Password"
              id="password"
            />

            <div className="rememberMe">
              <button style={checkBox}></button>
              Remember Me
            </div>
            <div className="loginButton">
              <button>Login</button>
              Forgot Password?
              {/* This needs to be an a href by end of project. Just placing for now until the main mini project is completed. */}
            </div>
            <div>
              Don't have an Account? Create new
              {/* Create new also needs to be an href but needs to open the overlay */}
            </div>
            <div>
              <img src={orWithArrows} alt="Or with arrows" />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
