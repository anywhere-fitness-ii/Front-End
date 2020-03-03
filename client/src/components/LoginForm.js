import React, { useState } from 'react';
import {StyledForm, StyledInput} from '../styles/Styles'
import { useForm } from "react-hook-form"

const LoginForm = (props) => {
  const { errors, register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    reset({
      username: '', 
      password: ''
    })
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <StyledInput ref={register({required: true})} type="text" name="userName" placeholder="Username"/>
      {errors.userName && <p>Enter username.</p>}

      <StyledInput ref={register({required: true})} type="password" name="password" placeholder="Password"/>
      {errors.userName && <p>Enter password.</p>}

      <button type="submit">Login</button>
    </StyledForm>
  )
}

export default LoginForm;