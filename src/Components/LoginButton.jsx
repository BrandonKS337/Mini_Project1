import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"; // Imports useHistory hook

export default function MyComponent() {
  const history = useHistory(); // Use useHistory hook to get access to history object

  const handleButtonClick = () => {
    history.push("/HomePage");
  };

  return (
    <div>
      {LoginButton.jsx}
      <Link to="/HomePage">Go to Home Page</Link>
      <button onClick={handleButtonClick}>Login</button>
    </div>
  );
}
