
import React, {useState, useContext, useEffect, createContext} from 'react';
import {DashboardContext} from '../components/Dashboard'
import AddClass from './AddClass'
import InstructorEvents from './InstructorEvents';

import { H1 } from '../styles/Styles';
import { Row, Container, Col } from 'reactstrap';
import ClassCards from './ClassCards';
import SearchForm from './SearchForm';


const initialData = {
  class_name: "",
  class_type: "",
  class_date: "",
  class_start_time: "",
  class_duration: "",
  class_intensity: "",
  class_location: "",
  registered_participants: 0,
  class_max_participants: 0
}
const Instructor = ()=>{
  const {data,userData, classData, setDependencyState, cardList, cardToUpdate, setCardToUpdate, editing, setEditing } = useContext(DashboardContext)
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchCategory, setSearchCategory ] = useState('class_name')

  const checkSearch = (term) => {
    return term.toLowerCase().includes(searchTerm.toLowerCase())
  }
    return(
      <Container style={{border: '1px solid black'}}>
        <div>
          <InstructorEvents userData={userData} events={data} />
          <AddClass cardToUpdate={cardToUpdate} setCardToUpdate={setCardToUpdate} setDependencyState={setDependencyState} userData={userData} cardList={cardList} editing={editing} setEditing={setEditing}/>
        </div>
   
        <H1>Available Classes</H1>
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSearchCategory={setSearchCategory} searchCategory={searchCategory}/>
        <Row>
            {classData.filter((item) => checkSearch(item[searchCategory])).map((item) => 
            <Col key={item.id} md="4">
              <ClassCards setCardToUpdate={setCardToUpdate} cardToUpdate={cardToUpdate} classInstance={item} setEditing={setEditing}/>
            </Col>
            )}
        </Row>
      </Container>
   )
}

export default Instructor
