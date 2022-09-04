import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import styled from 'styled-components/macro';
import { useLocation, Link } from 'react-router-dom';

const BackCTAWrapper = styled.div`
  visibility: ${(props) => (props.notRoot ? 'visible' : 'hidden')};
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
    return location.pathname !== '/';
  };

  // Note: the reason why the link enclosing the img logo is a direct <a> and not a <Link> is because we want clicking the logo to refresh the app completely (i.e. load new cocktails, and (I think?) clear state) - i.e. as if the user clicks the refresh button in the browser.  Therefore <a> will do this instead of just changing the url with <Link>

  return (
    <div className='Header'>
      <BackCTAWrapper notRoot={notRoot()}>
        <Link to='/' className='back-cta'>
          Back
        </Link>
      </BackCTAWrapper>
      <a href='/'>
        <img src={logo} alt='Ez-Logo' />
      </a>

      <h1> EZ Cocktails</h1>
    </div>
  );
}
