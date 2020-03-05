import React, {useContext} from 'react';
import {StyledForm, StyledInput, StyledSelect, StyledButton, H1} from '../styles/Styles';
import {useHistory} from 'react-router-dom'
import {DashboardContext} from '../components/Dashboard';
import { useForm } from "react-hook-form";
import {axiosWithAuth} from '../utils/axiosWithAuth'

const EditProfileForm = () => {
  const { register, handleSubmit} = useForm();
  const { updateUserData } = useContext(DashboardContext)

  return (
    <StyledForm onSubmit={handleSubmit(updateUserData)}>
      <StyledInput ref={register} type="text" name="age" placeholder="Age"  />
      <StyledInput ref={register} type="text" name="height" placeholder="Height"  />
      <StyledInput ref={register} type="text" name="weight" placeholder="Weight"  />
      <StyledInput ref={register} type="text" name="picture_url" placeholder="Profile Image URL" />
      <StyledButton type="submit">Save</StyledButton>
    </StyledForm>
  )
}


export default EditProfileForm;
