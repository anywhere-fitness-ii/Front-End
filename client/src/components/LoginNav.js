import React from 'react';
import {LoginNavLink, LoginNavContainer} from '../styles/Styles';


const LoginNav = () => 
  <LoginNavContainer>
    <LoginNavLink to="/">Register</LoginNavLink>
    <LoginNavLink to="/login">Login</LoginNavLink>
  </LoginNavContainer>
    
export default LoginNav;
