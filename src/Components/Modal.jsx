import React from "react";
import ReactDOM from "react-dom";

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

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div className="modal-container">
          <div className="modal-content">
            <div className="title">Create Account</div>
            <div className="input-container">
              <div className="input-label">User Name</div>
              <div className="input-field">
                {/* Input field for User Name */}
              </div>
            </div>
            <div className="input-container">
              <div className="input-label">Email</div>
              <div className="input-field">{/* Input field for Email */}</div>
            </div>
            <div className="input-container">
              <div className="input-label">Password</div>
              <div className="input-field">
                {/* Input field for Password */}
              </div>
            </div>
            <div className="login-button">LOGIN</div>
            <div className="sign-in-button">Sign In</div>
            <div className="google-login-button">
              <div className="google-icon" />
              <div className="google-text">Sign in with Google</div>
            </div>
            <div className="facebook-login-button">
              <div className="facebook-text">Log in with Google</div>
              <div className="facebook-icon" />
            </div>
            <div className="apple-login-button">
              <div className="apple-icon" />
              <div className="apple-text">Continue with Apple</div>
            </div>
            <div className="separator">
              <div className="separator-text">OR</div>
              <div className="separator-line" />
            </div>
          </div>
        </div>

        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
