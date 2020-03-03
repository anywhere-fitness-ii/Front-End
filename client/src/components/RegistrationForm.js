import React from 'react';
import {StyledForm, StyledInput, StyledSelect} from '../styles/Styles';
import { useForm } from "react-hook-form";


const RegistrationForm = (props) => {
  const { register, errors, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data); {/* needs to be updated to post to server*/}
    reset() 
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <StyledInput ref={register({required: true, maxLength: 30})} type="text" name="name" placeholder="Name" />
      {errors.name && <p>Required.</p>}
      {errors.name && errors.name.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput type="text" name="email" ref={register({required: true})} placeholder="Email" />
      {errors.email && <p>Required.</p>}
      
      <StyledInput type="text" name="username" ref={register({required: true})} placeholder="Username" />
      {errors.email && <p>Required.</p>}

      <StyledInput type="password" name="password" ref={register({required: true, minLength: 5})} placeholder="Password" />
      {errors.password && <p>Required.</p>}
      {errors.password && errors.password.type === "minLength" && <p>Password must be at least 5 characters.</p>}

      <StyledInput type="text" name="imageUrl" placeholder="Profile Image URL"/>

      <StyledSelect name="roleId" defaultValue="" ref={register({required: true})}>
        <option value="" disabled hidden>Select Profile Type</option>
        <option value="1">User</option>
        <option value="2">Instructor</option>
        <option value="3">Admin</option>
      </StyledSelect>
      {errors.roleId && <p>Required.</p>}

      <button type="submit">Register</button>
    </StyledForm>
  )
}


export default RegistrationForm;
