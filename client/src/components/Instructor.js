import React, {useState, useContext, useEffect, createContext} from 'react';
import {DashboardContext} from '../components/Dashboard'
import AddClass from './AddClass'
import InstructorEvents from './InstructorEvents';

import { H1 } from '../styles/Styles';
import { Row, Container, Col } from 'reactstrap';
import ClassCards from './ClassCards';
import SearchForm from './SearchForm';

const Instructor = ()=>{
  const {data,userData, classData, setDependencyState, cardList} = useContext(DashboardContext)

  const [ searchTerm, setSearchTerm ] = useState('');


  const checkSearch = (term) => {
    return term.toLowerCase().includes(searchTerm.toLowerCase())
  }
    return(
    <div>
      <InstructorEvents userData={userData} events={data} />
        <h2>This is the Instructor Section</h2>
        <AddClass setDependencyState={setDependencyState} userData={userData} cardList={cardList}/>
   


        <Container>
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
    </div>)
}

export default Instructor