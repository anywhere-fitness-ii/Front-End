import React, { useState } from 'react';
import { StyledLabel, StyledInput, StyledForm, StyledButton } from '../styles/Styles'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const SearchForm = ({setSearchTerm, searchTerm}) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    console.log(searchTerm)
  }

  return (
    <StyledForm>
      <label htmlFor="name">Class Name:</label>
      <StyledInput onChange={handleChange} type="text" name="name"/>

{/*    Not sure if we will include additional search fields. Maybe if extra time.   
      <label for="date"></label> 
      <StyledInput onChange={handleChange} type="text" name="date"/>
      
      <label for="location"></label>
      <StyledInput onChange={handleChange} type="text" name="location"/>
      
      <label for="intensity"></label>
      <StyledInput onChange={handleChange} type="text" name="intensity"/> */}
    </StyledForm>
  )
}

export default SearchForm;