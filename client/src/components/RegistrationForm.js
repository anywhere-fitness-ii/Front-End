import React, { useState } from 'react';
import {StyledForm, Input, Select} from '../styles/Styles'
import { useForm } from "react-hook-form"


const RegistrationForm = (props) => {
  const [ inputValues, setInputValues ] = useState({
    name: '',
    email: '',
    password: '',
    imageUrl: '',
    userId: ''
  })
  c

  const handleChange = (e) => {
    setInputValues({...inputValues, [e.target.name]: e.target.value})
    console.log(inputValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValues({
      name: '',
      email: '',
      password: '',
      imageUrl: '',
      userId: ''
    })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input onChange={handleChange} type="text" name="name" placeholder="Name" value={inputValues.name}/>

      <Input onChange={handleChange} type="text" name="email" placeholder="Email" value={inputValues.email}/>

      <Input onChange={handleChange} type="text" name="password" placeholder="Password" value={inputValues.password}/>

      <Input onChange={handleChange} type="text" name="imageUrl" placeholder="Profile Image URL" value={inputValues.imageUrl}/>

      <Select name="userId" onChange={handleChange}>
        <option>Instructor</option>
        <option>User</option>
      </Select>

      <button type="submit">Register</button>
    </StyledForm>
  )
}


export default RegistrationForm;
