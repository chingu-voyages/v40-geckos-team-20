import React from "react";
import "./Header.css";
import logo from "../images/logo.png";
import styled from "styled-components";

export default function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="Ez-Logo" />
      <h1> EZ Cocktails</h1>
    </div>
  );
}
