import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const LoginWrapper = styled.div`
  padding: 2%;
`
export const DashboardWrapper = styled.div`
  display: flex;
`
export const UserInfoWrapper = styled.div`
  padding: 5% 2%;
`

export const MainNavContainer = styled(DashboardWrapper)`
  justify-content: flex-end;
  padding: 2% 4%;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`

export const StyledInput = styled.input`
  background-color: #282626;
  color: #C4C4C4;
  margin: 1% 0;
  padding: 2%;
  font-size: 1.2rem;
`

export const StyledSelect = styled.select`
  display: block;
  appearance: none;
  background-color: #282626;
  color: #C4C4C4;
  margin: 1% 0;
  padding: 2%;
  border: 2px solid #C4C4C4;
`

export const StyledLabel = styled.label`
  font-size: 1.5rem;
`

export const StyledButton = styled.button`
  padding: 2%;
  width: 50%;
  border-radius: 14px;
  background-color: #282626;
  color: #C4C4C4;
  margin: 2% auto;
  border: 1px solid #C4C4C4;
  &:hover {
    font-weight: 800;
    border: 3px solid #C4C4C4;
  }
`

export const LoginNavLink = styled(NavLink)`
  text-decoration: none;
  width: 50%;
  font-size: 1.5rem;
  color: #C4C4C4;
  padding: 1% 8%;
  border: 1px solid #C4C4C4;
  &:hover {
    font-weight: 800;
    text-decoration: none;
    color: #C4C4C4;
  }
`

export const MainNavLink = styled(NavLink)`
  padding: 1% 10%;
  text-decoration: none;
  color: #C4C4C4;
  font-size: 1.5rem;
  &:hover {
    font-weight: 800;
    text-decoration: none;
    color: #C4C4C4;
  }
`

export const LoginNavContainer = styled.div`
  margin: 2% auto;
  width: 100%;
  text-align: center;
`

export const H1 = styled.h1`
  color: #C4C4C4;
`

export const ProfileImg = styled.img`
  border-radius: 50%;
  margin: 2% auto;
  width: 50%;
`

