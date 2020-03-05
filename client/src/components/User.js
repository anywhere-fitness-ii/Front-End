
import React, {useContext, useState} from 'react';
import {DashboardContext} from '../components/Dashboard'
import { H1 } from '../styles/Styles';
import { Row, Container, Col } from 'reactstrap';
import ClassCards from './ClassCards';
import SearchForm from './SearchForm';
import UserInfo from './UserInfo';


const User = ()=> {
  const {userData, classData} = useContext(DashboardContext)
  const [ searchTerm, setSearchTerm ] = useState('');

  const checkSearch = (term) => {
    return term.toLowerCase().includes(searchTerm.toLowerCase())
  }

  return (
    <Container>
<<<<<<< HEAD
=======

>>>>>>> 6c5cbb4ce0c9747f46eebbc592b470a5fbae2e06
      <H1>Available Classes</H1>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Row>
          {classData.filter((item) => checkSearch(item.class_name)).map((item) => 
          <Col key={item.id} md="4">
            <ClassCards classInstance={item}/>
          </Col>
          )}
      </Row>
    </Container>
  )
}
    
export default User

