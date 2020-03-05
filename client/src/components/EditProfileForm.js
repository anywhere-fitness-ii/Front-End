import React from 'react';
import {StyledForm, StyledInput, StyledSelect, StyledButton, H1} from '../styles/Styles';
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import {axiosWithAuth} from '../utils/axiosWithAuth'


const EditProfileForm = (props) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    axiosWithAuth()
    .post(`/auth/register`, data)
    .catch(err=> err)
    reset() 
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput ref={register} type="text" name="age" placeholder="Age" />
      
      <StyledInput ref={register} type="text" name="height" placeholder="Height" />
      
      <StyledInput ref={register} type="text" name="weight" placeholder="Weight" />

      <StyledInput type="text" name="picture_url" placeholder="Profile Image URL"/>

      <StyledButton type="submit">Save</StyledButton>
    </StyledForm>
  )
}


export default EditProfileForm;
