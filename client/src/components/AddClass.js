import React, { useState } from 'react';
import styled from 'styled-components';

//Styles to be moved to a separate file
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`
const Input = styled.input`
  margin: 1% 0;
  padding: 2%;
  font-size: 1.5rem;
`

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
    <FormContainer onSubmit={handleSubmit}>
      <Input onChange={handleChange} type="text" name="name" placeholder="Name" value={inputValues.name}/>

      <Input onChange={handleChange} type="text" name="classType" placeholder="Class Type" value={inputValues.classType}/>

      <Input onChange={handleChange} type="text" name="date" placeholder="Date" value={inputValues.date}/>

      <Input onChange={handleChange} type="text" name="startTime" placeholder="Start Time" value={inputValues.startTime}/>
      
      <Input onChange={handleChange} type="text" name="duration" placeholder="Duration" value={inputValues.duration}/>
      
      <Input onChange={handleChange} type="text" name="location" placeholder="Location" value={inputValues.duration}/>

      <Input onChange={handleChange} type="text" name="intensity" placeholder="Intensity" value={inputValues.intensity}/>

      <Input onChange={handleChange} type="text" name="maxParticipants" placeholder="Max Participants" value={inputValues.maxParticipants}/>

      <button type="submit">Register</button>
    </FormContainer>
  )
}

export default AddClassForm;
