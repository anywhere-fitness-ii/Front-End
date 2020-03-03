import React, { useState } from 'react';
import {StyledForm, StyledInput} from '../styles/Styles'
import axios from 'axios'
import { useForm } from "react-hook-form"
import {axiosWithAuth} from '../utils/axiosWithAuth'

const LoginForm = (props) => {
  const { errors, register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axiosWithAuth()
    .post(`/api/login`, data)
    .then(res => console.log(res, 'res'))
    console.log(data)
    reset()
  }

  

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <StyledInput ref={register({required: true})} type="text" name="username" placeholder="Username"/>
      {errors.username && <p>Enter username.</p>}

      <StyledInput ref={register({required: true})} type="password" name="password" placeholder="Password"/>
      {errors.password && <p>Enter password.</p>}

      <button type="submit">Login</button>
    </StyledForm>
  )
}

export default LoginForm;