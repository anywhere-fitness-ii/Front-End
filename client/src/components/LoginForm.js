import React, { useState } from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

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
    username: '',
    password: ''
  })

  const history=useHistory();
  console.log(history, 'history')

  const handleChange = (e) => {
    setInputValues({...inputValues, [e.target.name]: e.target.value})
    console.log(inputValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValues({
      username: '',
      password: ''
    })
  }

  const login = e =>{
    e.preventDefault()
    axios
    .post(`http://localhost:5555/api/login`, inputValues)
    .then(res =>{
      // console.log(res, 'res'); console.log(res.data, 'res.data'); console.log(res.data.payload, 'res.daa.payload')
    window.localStorage.setItem('token', res.data.payload)
    history.push('/instructor')
    })
    .catch(err=> err)
  }

  return (
    <FormContainer onSubmit={login}>
      <Input onChange={handleChange} type="text" name="username" placeholder="Username" value={inputValues.username}/>
      <Input onChange={handleChange} type="text" name="password" placeholder="Password" value={inputValues.password}/>

      <button type="submit">Login</button>
    </FormContainer>
  )
}

export default LoginForm;