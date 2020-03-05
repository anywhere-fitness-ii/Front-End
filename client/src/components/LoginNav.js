import React from 'react';
import {LoginNavLink, LoginNavContainer} from '../styles/Styles';


const LoginNav = () => 
  <LoginNavContainer>
    <LoginNavLink activeStyle={{border: "3px solid #C4C4C4", fontSize: '1.75rem', fontWeight: 'bold'}} exact to="/">Register</LoginNavLink>
    <LoginNavLink activeStyle={{border: "3px solid #C4C4C4", fontSize: '1.75rem', fontWeight: 'bold'}} to="/login">Login</LoginNavLink>
  </LoginNavContainer>
    
export default LoginNav;
