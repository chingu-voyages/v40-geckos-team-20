import React from "react";
import "./Header.css";
import logo from "../images/logo.png";
import styled from 'styled-components/macro';
import { useLocation, Link } from "react-router-dom";

const BackCTAWrapper = styled.div`
  visibility: ${ props => props.notRoot ? "visible" : "hidden"};
  background-color: #ca0000;
  width: 160px;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;

  &:hover,
  &:focus {
    background-color: #b80202;
  }
`;


export default function Header() {
  const location = useLocation();
  const notRoot = () => {
    return location.pathname !== "/";
  }
  
  return (
    <div className="Header">
      <BackCTAWrapper notRoot={notRoot()}>
        <Link to="/" className="back-cta">Back</Link>
      </BackCTAWrapper>
      <img src={logo} alt="Ez-Logo" />
      <h1> EZ Cocktails</h1>
    </div>
  );
}
