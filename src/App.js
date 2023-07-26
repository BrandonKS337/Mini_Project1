import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import React from 'react'
import Landing from "./Components/LandingPage";

const Button_Wrapper_styles = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}

function App() {
  return (
    <>
      {/* <div>
      <NavBar />
      </div> */}
      {/* <div style={Button_Wrapper_styles}>
        <button>Open Modal</button>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Main Content</div> */}
      <Landing />
    </>
  );
}

export default App;
