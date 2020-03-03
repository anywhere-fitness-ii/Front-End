import React from 'react';
import { useForm } from "react-hook-form";
import {StyledForm, StyledInput, StyledSelect} from '../styles/Styles';


const AddClassForm = (props) => {
  const { register, handleSubmit, errors, reset } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data)
  //   // props.postClass()
  //   reset()
  // }
  const onSit = (addNewCard) => {
    console.log('Hello World', addNewCard)
    props.postClass(addNewCard)
    reset()
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSit)}>
      <StyledInput ref={register({required: true, maxLength: 20})} type="text" name="name" placeholder="Name"/>
      {errors.name && <p>Required</p>}
      {errors.name && errors.name.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: true, maxLength: 20})} type="text" name="classType" placeholder="Class Type"/>
      {errors.classType && <p>Required</p>}
      {errors.classType && errors.classType.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: true, maxLength: 20})} type="text" name="date" placeholder="Date"/>
      {errors.date && <p>Required</p>}
      {errors.date && errors.date.type === "maxLength" && <p>Must be less than 20 characters.</p>}
{/* 
      <StyledInput ref={register({required: true, maxLength: 10})} type="text" name="startTime" placeholder="Start Time"/>
      {errors.startTime && <p>Required</p>}
      {errors.startTime && errors.startTime.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: true, maxLength: 10})} type="text" name="duration" placeholder="Duration"/>
      {errors.duration && <p>Required</p>}
      {errors.duration && errors.duration.type === "maxLength" && <p>Must be less than 20 characters.</p>}
      
      <StyledInput ref={register({required: true, maxLength: 10})} type="text" name="location" placeholder="Location" />
      {errors.location && <p>Required</p>}
      {errors.location && errors.location.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledSelect ref={register({required: true})} name="intensity">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </StyledSelect>
      {errors.intensity && <p>Required</p>}

      <StyledInput ref={register({required: true})} type="text" name="maxParticipants" placeholder="Max Participants"/>
{errors.maxParticipants && <p>Required</p>}*/}

      <button type="submit">Register</button>
    </StyledForm>
  )
}

export default AddClassForm;
