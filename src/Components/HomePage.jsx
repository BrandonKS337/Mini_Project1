import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage(onLogin) {
  const navigate = useNavigate();

  // Function to handle the back button click
  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      {" "}
      <h1>
        Blank Home Page
        <br /> Work In Progress <br />
      </h1>
      <h3>
        Personal Note should really have the state change check credentials
        before putting user straight through to the homePage....
      </h3>
      <h3>Here's a Button to go back to Login for now</h3>
      <div>
        <button onClick={onLogin}>Login</button>
      </div>
    </>
  );
}
