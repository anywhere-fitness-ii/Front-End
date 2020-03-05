import React from 'react';
import { Route } from 'react-router-dom';
import RegisterForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm';
import LoginNav from './components/LoginNav';
import Dashboard from './components/Dashboard';
import MainNav from './components/MainNav';
import './App.css';
import { LoginWrapper } from './styles/Styles';



function App() {
  return (
    <div>
      <MainNav/>
      <LoginWrapper>
        <Route exact path="/">
          <LoginNav/>
          <RegisterForm />
        </Route>

        <Route path="/login">
          <LoginNav/>
          <LoginForm />
        </Route>

        <Route path="/dashboard" component={Dashboard} />

      </LoginWrapper>
    </div>
  );
}

export default App;
