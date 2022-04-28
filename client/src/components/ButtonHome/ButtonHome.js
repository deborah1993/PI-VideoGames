import React from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./ButtonHome.css";

export default function ButtonHome() {
  return (
    <Link to="/home">
      <img id="logo-joystick" src={Logo} alt="logo" />
    </Link>
  );
}
