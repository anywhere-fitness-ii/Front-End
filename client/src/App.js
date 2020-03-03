import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import RegisterForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm';
import AddClassForm from './components/AddClass';
import LoginNav from './components/LoginNav';
import Dashboard from './components/Dashboard'
// import './App.css';
import { Container } from './styles/Styles';



function App() {
  return (
    <Container>
      {/* Home page with login and registration */}
     <div> 
       <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/login">Login</NavLink>
      </div>
      <Route exact path="/">
        <LoginNav/>
        <RegisterForm />
      </Route>

      <Route path="/login">
        <LoginNav/>
        <LoginForm />
      </Route>

      {/* User dashboard with class options and personal info */}
      <Route path="/user/:id">
      </Route>

      {/* Instructor dashboard with addclass form and upcoming classes */}
      <Route path="/instructor/:id">
        <AddClassForm />
      </Route>
      <Route path="/dashboard" component={Dashboard} />

    </Container>
  );
}

export default App;
