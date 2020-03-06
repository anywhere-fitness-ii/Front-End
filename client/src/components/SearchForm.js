import React from 'react';
import { StyledLabel, StyledInput, StyledForm } from '../styles/Styles'

const SearchForm = ({setSearchTerm, setSearchCategory, searchCategory}) => {

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleCategory = (e) => {
    setSearchCategory(e.target.value)
  }

  return (
    <StyledForm>
      <StyledLabel>Search By: </StyledLabel>
      <select onChange={handleCategory} value={searchCategory}>
        <option value={'class_name'}>Class Name</option>
        <option value={'class_location'}>Class Location</option>
      </select>

      <StyledInput onChange={handleChange} type="text" name="name" placeholder={searchCategory === 'class_location' ? "Class Location" : "Class Name"}/>

    </StyledForm>
  )
}

export default SearchForm;