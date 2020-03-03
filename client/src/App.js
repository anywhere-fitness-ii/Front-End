import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import RegisterForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm';
import AddClass from './components/AddClass';
import styled from 'styled-components';
import Instructor from './components/Instructor'
import Dashboard from './components/Dashboard';


const Container = styled.div`
  padding: 2%;
`

function App() {
  return (
    <Container>
      {/* Home page with login and registration */}
      <NavLink to="/">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/instructor">Instructor</NavLink>
      <Route exact path="/">
        <RegisterForm />
      </Route>

      <Route path="/login">
        <LoginForm />
      </Route>

      {/* User dashboard with class options and personal info */}
      <Route path="/user/:id">
      </Route>

      {/* Instructor dashboard with addclass form and upcoming classes */}
      <Route path="/instructor/:id">
      </Route>

      <Route path="/dashboard" component={Dashboard} />
    </Container>
  );
}

export default App;
