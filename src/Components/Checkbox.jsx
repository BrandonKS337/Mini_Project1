import React, { useState } from "react";

const checkBoxStyle = {
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  border: "2px solid white",
  background: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  marginTop: '8px',
  marginBottom: '25px'
};

const blueCheckmarkStyle = {
  width: "25px",
  height: "25px",
  fill: "blue",
};

const rememberMeContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: 'flex-start',
  gap: "10px", 
};

const rememberMeTextStyle = {
  color: "white",
};

export default function CheckboxButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={rememberMeContainerStyle}>
      <div style={checkBoxStyle} onClick={handleCheckboxClick}>
        {isChecked && (
          <svg style={blueCheckmarkStyle} viewBox="0 0 24 24">
            <path d="M9 16.2l-4.6-4.6L3 14l6 6 12-12-1.4-1.4z" />
          </svg>
        )}
      </div>
      <div style={rememberMeTextStyle}></div>
    </div>
  );
}
