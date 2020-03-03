import React, { useState } from 'react';
import {StyledForm, StyledInput, StyledButton, H1} from '../styles/Styles'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form"
import {axiosWithAuth} from '../utils/axiosWithAuth'

const LoginForm = (props) => {
  const { errors, register, handleSubmit, reset } = useForm();
  const history=useHistory();

  const onSubmit = (data) => {
    axiosWithAuth()
    .post(`/api/login`, data)
    .then(res => {

      console.log(res, 'res')
      window.localStorage.setItem('token', res.data.payload)
      history.push('/dashboard')
    })
    .catch(err=>err)
    console.log(data)
    reset()
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <H1>Login</H1>
      <StyledInput ref={register({required: true})} type="text" name="username" placeholder="Username"/>
      {errors.username && <p>Enter username.</p>}

      <StyledInput ref={register({required: true})} type="password" name="password" placeholder="Password"/>
      {errors.password && <p>Enter password.</p>}

      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  )
}

export default LoginForm;