import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import {StyledForm, StyledInput, StyledSelect} from '../styles/Styles';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const AddClassForm = (props) => {
  const [dependencyState, setDependencyState] = useState(false)

  const { register, handleSubmit, errors, reset } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data)
  //   // props.postClass()
  //   reset()
  // }
  
useEffect(()=>{
  axiosWithAuth()
  .get(`/classes`)
  .then(res=>{
    console.log(res)
    setDependencyState(false);
  })
  .catch(err=>err)

},[])

  const onSit = (addNewCard) => {
    axiosWithAuth()
    .post(`/classes`, addNewCard)
    .then(res=> console.log(res))
    .catch(err=> err)
    console.log('I added this card', addNewCard)
    // props.postClass(addNewCard)

    reset()
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSit)}>
      <StyledInput ref={register({required: true, maxLength: 20})} type="text" name="class_name" placeholder="Name"/>
      {errors.class_name && <p>Required</p>}
      {errors.class_name && errors.class_name.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: true, maxLength: 20})} type="text" name="class_type" placeholder="Class Type"/>
      {errors.class_type && <p>Required</p>}
      {errors.class_type && errors.class_type.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: true, maxLength: 20})} type="text" name="class_date" placeholder="Date"/>
      {errors.class_date && <p>Required</p>}
      {errors.class_date && errors.class_date.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: true, maxLength: 10})} type="text" name="class_start_time" placeholder="Start Time"/>
      {errors.class_start_time && <p>Required</p>}
      {errors.class_start_time && errors.class_start_time.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: true, maxLength: 10})} type="text" name="class_duration" placeholder="Duration"/>
      {errors.class_duration && <p>Required</p>}
      {errors.class_duration && errors.class_duration.type === "maxLength" && <p>Must be less than 20 characters.</p>}
      
      <StyledInput ref={register({required: true, maxLength: 10})} type="text" name="class_location" placeholder="Location" />
      {errors.class_location && <p>Required</p>}
      {errors.class_location && errors.class_location.type === "maxLength" && <p>Must be less than 20 characters.</p>}


      <StyledSelect ref={register({required: true})} name="class_intensity">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </StyledSelect>
      {errors.class_intensity && <p>Required</p>}

      <StyledInput ref={register({required: true})} type="text" name="registered_participants" placeholder="Registered" />
      {errors.registered_participants && <p>Required</p>}


      <StyledInput ref={register({required: true})} type="text" name="class_max_participants" placeholder="Max Participants"/>
{errors.class_max_participants && <p>Required</p>}

      <button type="submit">Register</button>
    </StyledForm>
  )
}

export default AddClassForm;
