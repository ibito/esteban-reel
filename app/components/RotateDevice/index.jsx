"use client"
import React from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const RotateDevice = () => {
  return (
    <div className="overlay">
      <div className="iconContainer">
        <div className="phone">
          <i><FontAwesomeIcon icon={faRepeat} className="icon"/></i>
        </div>
        <p>Please rotate your device!</p>
      </div>
    </div>
  );
};

export default RotateDevice;