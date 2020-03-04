import React from 'react';
import {StyledForm, StyledInput, StyledSelect, StyledButton, H1} from '../styles/Styles';
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import {axiosWithAuth} from '../utils/axiosWithAuth'


const RegistrationForm = (props) => {
  const { register, errors, handleSubmit, reset } = useForm();
  const history=useHistory();

  const onSubmit = data => {
    axiosWithAuth()
    .post(`/auth/register`, data)
    .then(res=>{
      console.log(res, 'res')
      window.localStorage.setItem('token', res.data.payload)
      history.push('/login')
    })
    .catch(err=> err)
    reset() 
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <H1>Sign Up</H1>
      <StyledInput ref={register({required: true, maxLength: 40})} type="text" name="name" placeholder="Name" />
      {errors.name && <p>Required.</p>}
      {errors.name && errors.name.type === "maxLength" && <p>Must be less than 40 characters.</p>}

      <StyledInput type="text" name="email" ref={register({required: true})} placeholder="Email" />
      {errors.email && <p>Required.</p>}
      
      <StyledInput type="text" name="username" ref={register({required: true})} placeholder="Username" />
      {errors.email && <p>Required.</p>}

      <StyledInput type="password" name="password" ref={register({required: true, minLength: 5})} placeholder="Password" />
      {errors.password && <p>Required.</p>}
      {errors.password && errors.password.type === "minLength" && <p>Password must be at least 5 characters.</p>}

      <StyledInput type="text" name="picture_url" placeholder="Profile Image URL"/>

      <StyledSelect name="role_id" defaultValue="" ref={register({required: true})}>
        <option value="" disabled hidden>Select Profile Type</option>
        <option value="1">User</option>
        <option value="2">Instructor</option>
        <option value="3">Admin</option>
      </StyledSelect>
      {errors.role_id && <p>Required.</p>}

      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  )
}


export default RegistrationForm;
