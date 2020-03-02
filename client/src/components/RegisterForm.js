import React from 'react';
import styled from 'styled-components';

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
  

  return (
    <FormContainer>
      <Input type="text" name="name" placeholder="Name"/>
      <Input type="text" name="email" placeholder="Email"/>
      <Input type="text" name="password" placeholder="Password"/>
      <Input type="text" name="imageUrl" placeholder="Profile Image URL"/>
      <Select>
        <option>Instructor</option>
        <option>User</option>
      </Select>
      <button>Register</button>
    </FormContainer>
  )
}

export default RegisterForm;
