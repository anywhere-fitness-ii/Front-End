import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import RegisterForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm';
import AddClassForm from './components/AddClass';
import LoginNav from './components/LoginNav';
import Dashboard from './components/Dashboard'
import './App.css';
import { LoginWrapper } from './styles/Styles';
import PrivateRoute from './components/PrivateRoute'



function App() {
  return (
    <LoginWrapper>
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

      {/* Instructor dashboard with addclass form and upcoming classes
      <Route path="/instructor/:id">
        <AddClassForm />
      </Route> */}
      <PrivateRoute path="/dashboard" component={Dashboard} />

    </LoginWrapper>
  );
}

export default App;
