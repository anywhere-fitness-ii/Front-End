import React from 'react';
import { StyledLabel, StyledInput, StyledForm, StyledSelect } from '../styles/Styles'

const SearchForm = ({setSearchTerm, setSearchCategory, searchCategory}) => {

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleCategory = (e) => {
    setSearchCategory(e.target.value)
  }

  return (
    <StyledForm className="formposition" style={{ display: "block", marginTop: "40px", width: "60%"}}>
      <StyledLabel style={{margin: "10px", padding: "10px"}}>Search By: </StyledLabel>

<div  style={{display: "inline-flex"}}>
      <div className="select">
      <StyledSelect className="select" value={searchCategory} onChange={handleCategory} style={{padding: "10px", display: "inline-flex",paddingRight: "20px", border: "1px solid #C4C4C4"}}>
      {/* <select onChange={handleCategory} value={searchCategory}> */}
        <option value={'class_name'}>Class Name</option>
        <option value={'class_location'}>Class Location</option>
      {/* </select> */}
      </StyledSelect>
</div>
      <StyledInput style={{margin: "0px"}} onChange={handleChange} type="text" name="name" placeholder={searchCategory === 'class_location' ? "Class Location" : "Class Name"}/>
</div>
    </StyledForm>
  )
}

export default SearchForm;