import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Button_Wrapper_styles = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? <HomePage /> : <LandingPage onLogin={handleLogin} />}
      <Footer />
    </>
  );
}

export default App;
