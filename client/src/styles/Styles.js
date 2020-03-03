import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Container = styled.div`
  padding: 2%;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`
export const StyledInput = styled.input`
  margin: 1% 0;
  padding: 2%;
  font-size: 1.5rem;
`

export const StyledSelect = styled.select`
  margin: 1% 0;
  padding: 2%;
`

export const LoginNavLink = styled(NavLink)`
  text-decoration: none;
  width: 50%;
  font-size: 1.5rem;
  color: black;
  padding: 1% 8%;
  border: 1px solid black;
  &:hover {
    font-weight: 800;
  }
`

export const LoginNavContainer = styled.div`
  margin: 2% auto;
  text-align: center;
`