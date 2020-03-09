
import React, {useState, useContext, useEffect, createContext} from 'react';
import {DashboardContext} from '../components/Dashboard'
import AddClass from './AddClass'
import InstructorEvents from './InstructorEvents';
import Activities from './Activities';

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
  const {toggleItem, data,userData, classData, setDependencyState, cardList, cardToUpdate, setCardToUpdate, editing, setEditing } = useContext(DashboardContext)
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchCategory, setSearchCategory ] = useState('class_name')

  const checkSearch = (term) => {
    return term.toLowerCase().includes(searchTerm.toLowerCase())
  }
    return(
      <Container >
       <InstructorEvents events={classData} />
       <Activities events={classData}/>

        <div style={{border: '1px solid #C4C4C4', padding: "40px", borderRadius: "10px", margin: "10px"}}>
        <div>
          <AddClass cardToUpdate={cardToUpdate} setCardToUpdate={setCardToUpdate} setDependencyState={setDependencyState} userData={userData} cardList={cardList} editing={editing} setEditing={setEditing}/>
        </div>
   
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSearchCategory={setSearchCategory} searchCategory={searchCategory}/>
        <Row>
            {classData.filter((item) => checkSearch(item[searchCategory])).map((item) => 
            <Col key={item.id} md="4">
              <ClassCards toggleItem={toggleItem} setCardToUpdate={setCardToUpdate} cardToUpdate={cardToUpdate} classInstance={item} setEditing={setEditing}/>
           {console.log(item.complete, 'classinstance')}
            </Col>
            )}
        </Row>
        </div>
      </Container>
   )
}

export default Instructor
