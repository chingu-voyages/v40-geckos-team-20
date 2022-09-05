import React from 'react';
import logo from '../../images/logo.png';
import { useLocation, Link } from 'react-router-dom';
import { HeaderWrapper } from './Header.styled';

export default function Header() {
  const location = useLocation();
  const notRoot = () => {
    return location.pathname !== '/';
  };

  // Note: the reason why the link enclosing the img logo is a direct <a> and not a <Link> is because we want clicking the logo to refresh the app completely (i.e. load new cocktails, and (I think?) clear state) - i.e. as if the user clicks the refresh button in the browser.  Therefore <a> will do this instead of just changing the url with <Link>

  return (
    <HeaderWrapper notRoot={notRoot()}>
      <Link to='/' className='back-cta'>
        Back
      </Link>
      <a className='logo' href='/'>
        <img src={logo} alt='Ez-Logo' />
      </a>
      <h1> EZ Cocktails</h1>
    </HeaderWrapper>
  );
}
