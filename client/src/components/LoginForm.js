import React, { useState } from 'react';
import styled from 'styled-components';

//Styles to be moved to a separate file
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`

const Input = styled.input`
  margin: 1% 0;
  padding: 2%;
  font-size: 1.5rem;
`

const LoginForm = (props) => {
  const [ inputValues, setInputValues ] = useState({
    userName: '',
    password: ''
  })

  const handleChange = (e) => {
    setInputValues({...inputValues, [e.target.name]: e.target.value})
    console.log(inputValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValues({
      userName: '',
      password: ''
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input onChange={handleChange} type="text" name="userName" placeholder="Username" value={inputValues.userName}/>
      <Input onChange={handleChange} type="text" name="password" placeholder="Password" value={inputValues.password}/>

      <button type="submit">Login</button>
    </FormContainer>
  )
}

export default LoginForm;