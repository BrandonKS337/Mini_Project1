// import { title } from "process";
import React from "react";
import ReactDOM from "react-dom";
import appleButton from "../Assets/buttons/appleButton.svg";
import googleButton from "../Assets/buttons/googleButton.svg";
import facebookButton from "../Assets/buttons/facebookButton.svg";


const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
  borderRadius: "20%",
  width: "25rem",
  height: "30rem",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, .7)",
  zIndex: 1000,
};

const Overlay = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
  gap: "15px",
};

const title = {};

const closeModal = {
  width: "35%",
  borderRadius: "20px",
  position: "fixed",
  bottom: "15px",
  gap: "15px",
};

const loginButtons = {
  display: "flex",
  flexDirection: "row",
  gap: "15px",
  

};

const svgButtonStyle = {
  background: "none",
  border: "none",
  // width: '100%',
  alignItems: "center",
};
const altLoginButtons = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div style={Overlay}>
          <div style={title}>
            <h2>Create Account</h2>
          </div>
          <div>
            <input type="userName" placeholder="UserName..." id="userName" />
            {/* Input field for User Name */}
          </div>
          <div>
            <input type="userEmail" placeholder="Email..." id="userEmail" />
            {/* Input field for User Name */}
          </div>
          <div>
            <input
              type="userPassword"
              placeholder="Password..."
              id="userPassword"
            />
            {/* Input field for User Name */}
          </div>
          <div style={loginButtons} type="login/signin buttons">
            <button>Sign Up</button>
            <button>Sign In</button>
          </div>
          <div><img src={require("../Assets/images/Or Divider Red.svg").default} alt="Divider Red" /></div>
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
          <button style={closeModal} onClick={onClose}>
            Close Modal
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
