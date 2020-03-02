import React from 'react';
import { Route, Link } from 'react-router-dom';
import RegisterForm from './components/RegisterForm'
import styled from 'styled-components';


const Container = styled.div`
  padding: 2%;
`

function App() {
  return (
    <Container>
      <Route path="/">
        <RegisterForm />
      </Route>
    </Container>
  );
}

export default App;
