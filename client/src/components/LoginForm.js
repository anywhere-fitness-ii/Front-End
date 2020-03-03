import React, { useState } from 'react';
import {StyledForm, Input, Select} from '../styles/Styles'
import { useForm } from "react-hook-form"

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
    <StyledForm onSubmit={handleSubmit}>
      <Input onChange={handleChange} type="text" name="userName" placeholder="Username" value={inputValues.userName}/>
      <Input onChange={handleChange} type="text" name="password" placeholder="Password" value={inputValues.password}/>

      <button type="submit">Login</button>
    </StyledForm>
  )
}

export default LoginForm;