import React from 'react';
import { useForm } from "react-hook-form";
import {StyledForm, StyledInput} from '../styles/Styles';


const AddClassForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data) 

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput ref={register({required: true, maxLength: 20})} type="text" name="name" placeholder="Name"/>

      <StyledInput ref={register({required: true, maxLength: 20})} type="text" name="classType" placeholder="Class Type"/>

      <StyledInput ref={register({required: true, maxLength: 20})} type="text" name="date" placeholder="Date"/>

      <StyledInput ref={register({required: true, maxLength: 10})} type="text" name="startTime" placeholder="Start Time"/>

      <StyledInput ref={register({required: true, maxLength: 10})} type="text" name="duration" placeholder="Duration"/>
      
      <StyledInput ref={register({required: true, maxLength: 10})} type="text" name="location" placeholder="Location" />

      <StyledInput type="text" name="intensity" placeholder="Intensity"/>

      <StyledInput type="text" name="maxParticipants" placeholder="Max Participants"/>

      <button type="submit">Register</button>
    </StyledForm>
  )
}

export default AddClassForm;
