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

const Select = styled.select`
  margin: 1% 0;
  padding: 2%;
`


const RegisterForm = (props) => {
  const [ inputValues, setInputValues ] = useState({
    name: '',
    email: '',
    password: '',
    imageUrl: '',
    userId: ''
  })

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
    <FormContainer onSubmit={handleSubmit}>
      <Input onChange={handleChange} type="text" name="name" placeholder="Name" value={inputValues.name}/>

      <Input onChange={handleChange} type="text" name="email" placeholder="Email" value={inputValues.email}/>

      <Input onChange={handleChange} type="text" name="password" placeholder="Password" value={inputValues.password}/>

      <Input onChange={handleChange} type="text" name="imageUrl" placeholder="Profile Image URL" value={inputValues.imageUrl}/>

      <Select name="userId" onChange={handleChange}>
        <option>Instructor</option>
        <option>User</option>
      </Select>

      <button type="submit">Register</button>
    </FormContainer>
  )
}

export default RegisterForm;
