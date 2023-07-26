import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./Components/Modal";
// import Modal2 from "./Components/SignUp";
// import SignUp from "./Components/SignUp";

const BUTTON_WRAPPER_STYLES = {
  position: "fixed",
  top: "600px",
  left: "10%",
  zIndex: 1000,
  
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

const ModalStyle = {
  width:'25px',
  heigh: '35px'
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isLoggedIn ? <HomePage /> : <LandingPage onLogin={handleLogin} />}
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log("clicked")}>
        <button onClick={() => setIsOpen(true)}>Sign UP!</button>
        <Modal style={ModalStyle} open={isOpen} onClose={() => setIsOpen(false)}>
          
        </Modal>
      </div>
      {/* <SignUp/> */}


      <Footer />
    </>
  );
}
