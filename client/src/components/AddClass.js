import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import {StyledForm, Input} from '../styles/Styles'


const AddClassForm = (props) => {
  const [ inputValues, setInputValues ] = useState({
    name: '',
    classType: '',
    date: '',
    startTime: '',
    duration: '',
    intensity: '',
    maxParticipants: ''
  })

  const handleChange = (e) => {
    setInputValues({...inputValues, [e.target.name]: e.target.value})
    console.log(inputValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputValues({
      name: '',
      classType: '',
      date: '',
      startTime: '',
      duration: '',
      location: '',
      intensity: '',
      maxParticipants: ''
    })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input onChange={handleChange} type="text" name="name" placeholder="Name" value={inputValues.name}/>

      <Input onChange={handleChange} type="text" name="classType" placeholder="Class Type" value={inputValues.classType}/>

      <Input onChange={handleChange} type="text" name="date" placeholder="Date" value={inputValues.date}/>

      <Input onChange={handleChange} type="text" name="startTime" placeholder="Start Time" value={inputValues.startTime}/>

      <Input onChange={handleChange} type="text" name="duration" placeholder="Duration" value={inputValues.duration}/>
      
      <Input onChange={handleChange} type="text" name="location" placeholder="Location" value={inputValues.duration}/>

      <Input onChange={handleChange} type="text" name="intensity" placeholder="Intensity" value={inputValues.intensity}/>

      <Input onChange={handleChange} type="text" name="maxParticipants" placeholder="Max Participants" value={inputValues.maxParticipants}/>

      <button type="submit">Register</button>
    </StyledForm>
  )
}

export default AddClassForm;
