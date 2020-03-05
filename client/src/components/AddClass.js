

import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { useForm } from "react-hook-form";
import {StyledForm, StyledInput, StyledSelect} from '../styles/Styles';
import {axiosWithAuth} from '../utils/axiosWithAuth';
// import {useProps} from 'react-router-dom'


const AddClass = ({setDependencyState, cardToUpdate}) => {

  const { register, handleSubmit, errors, reset } = useForm();
  const {id} = useParams()
  // const itemToUpdate = cardToUpdate.find(item=> `${item.id}`=== id)

  const onSit = (addNewCard) => {
    axiosWithAuth()
    .post(`/classes`, addNewCard)
    .then(res=> console.log(res))
    .catch(err=> err)
    console.log('I added this card', addNewCard)
   setDependencyState(true);
    reset()
  }
  
const updateCard = e=>{
    e.preventDefault();

    axiosWithAuth()
    // .put(`/classes/${cardToUpdate.id}`, cardToUpdate)
    .then(res=>{
      console.log(res, 'res')
    })
    console.log('yay you clicked me')
  }


console.log(cardToUpdate, 'card to update')
  return (
    <>
    {/* {cardToUpdate?} */}
    <StyledForm onSubmit={handleSubmit(onSit)}>
      <StyledInput ref={register({required: true, maxLength: 20})} type="text" name="class_name" placeholder="Name"/>
      {errors.class_name && <p>Required</p>}
      {errors.class_name && errors.class_name.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: false, maxLength: 20})} type="text" name="class_type" placeholder="Class Type"/>
      {/* {errors.class_type && <p>Required</p>}
      {errors.class_type && errors.class_type.type === "maxLength" && <p>Must be less than 20 characters.</p>} */}

      <StyledInput ref={register({required: true, maxLength: 20})} type="text" name="class_date" placeholder="Date"/>
      {errors.class_date && <p>Required</p>}
      {errors.class_date && errors.class_date.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: true, maxLength: 10})} type="text" name="class_start_time" placeholder="Start Time"/>
      {errors.class_start_time && <p>Required</p>}
      {errors.class_start_time && errors.class_start_time.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: false, maxLength: 10})} type="text" name="class_duration" placeholder="Duration"/>
      {/* {errors.class_duration && <p>Required</p>}
      {errors.class_duration && errors.class_duration.type === "maxLength" && <p>Must be less than 20 characters.</p>} */}
      
      <StyledInput ref={register({required: true, maxLength: 10})} type="text" name="class_location" placeholder="Location" />
      {errors.class_location && <p>Required</p>}
      {errors.class_location && errors.class_location.type === "maxLength" && <p>Must be less than 20 characters.</p>}


      <StyledSelect ref={register({required: false})} name="class_intensity">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </StyledSelect>
      {/* {errors.class_intensity && <p>Required</p>} */}

      <StyledInput ref={register({required: false})} type="text" name="registered_participants" placeholder="Registered" />
      {/* {errors.registered_participants && <p>Required</p>} */}


      <StyledInput ref={register({required: false})} type="text" name="class_max_participants" placeholder="Max Participants"/>
{/* {errors.class_max_participants && <p>Required</p>} */}

      <button type="submit">Register</button>
    </StyledForm>
    {/* <button onClick={updateCard}>Edit</button> */}
    </>
  )
}

export default AddClass;

