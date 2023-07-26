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
        <div>
          <div>Create Account</div>
          <div>
            <div>User Name</div>
            {/* Input field for User Name */}
          </div>
          <div>
            <div>Email</div>
            {/* Input field for Email */}
          </div>
          <div>
            <div>Password</div>
            {/* Input field for Password */}
          </div>
          <div>LOGIN</div>
          <div>Sign In</div>
          <div>Sign in with Google</div>
          <div>Log in with Google</div>
          <div>Continue with Apple</div>
          <div>OR</div>
        </div>

        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
