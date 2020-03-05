import React from 'react';
import {StyledForm, StyledInput, StyledButton, H1} from '../styles/Styles'
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form"
import {axiosWithAuth} from '../utils/axiosWithAuth'

const LoginForm = (props) => {
  const { errors, register, handleSubmit, reset } = useForm();
  const history=useHistory();

  const onSubmit = (data) => {
    axiosWithAuth()
    .post(`/auth/login`, data)
    .then(res => {
      console.log(res, 'res')
      window.localStorage.setItem('token', res.data.token);
      window.localStorage.setItem('user_Id', res.data.user_Id);
      console.log(res.data.user_Id,'res ID')
      // history.push(`/dashboard/${Number(res.data.user_Id)}`)
      history.push(`/dashboard/`)

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