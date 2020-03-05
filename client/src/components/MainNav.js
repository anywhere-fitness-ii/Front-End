import React from 'react';
import { MainNavLink, MainNavContainer } from '../styles/Styles'

const MainNav = () => 
  <MainNavContainer> 
    <div>
      <MainNavLink to="/dashboard">Dashboard</MainNavLink>
      <MainNavLink to="/login">Login</MainNavLink>
    </div>
  </MainNavContainer>

export default MainNav;

