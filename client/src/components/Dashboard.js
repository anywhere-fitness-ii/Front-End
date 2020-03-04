import React, {useState, useContext, useEffect, createContext} from 'react';
import User from './User'
import Instructor from './Instructor'

import { H1 } from '../styles/Styles';
import { Row, Container, Col } from 'reactstrap';
import ClassCards from './ClassCards';
import SearchForm from './SearchForm';

import {axiosWithAuth} from '../utils/axiosWithAuth'

export const DashboardContext = createContext();  
const Dashboard = () =>{
  const [classData, setClassData] = useState([])
  const [userData, setUserData]=useState([])
  const [cardList, setCardList]=useState([])

  const [dependencyState, setDependencyState] = useState(false)
  const [ searchTerm, setSearchTerm ] = useState('');

  const checkSearch = (term) => {
    return term.toLowerCase().includes(searchTerm.toLowerCase())
  }

  useEffect(() => {
    axiosWithAuth()
      .get(`/classes`)
      .then(res => {
        console.log(res)
        setClassData(res.data)
        setDependencyState(false);
        console.log(dependencyState, 'dependency initial state')

      })
  }, [dependencyState])

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${localStorage.getItem('user_Id')}`)
      .then(res => {
 console.log(res.data, 'res.data')
 setUserData(res.data)
      })
  }, [])

  return (
    <div>
      <DashboardContext.Provider value={{classData, setDependencyState, userData, cardList}}>
        {userData.role_id === 2 ? 
        <Instructor/>:<User/>
        }

<Container>
      <H1>Available Classes</H1>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Row>
          {classData.filter((item) => checkSearch(item.class_name)).map((item) => 
          <Col key={item.id} md="4">
            <h1>{userData.role_id === 2 ? 'yes': 'no'}</h1>

            <ClassCards classInstance={item}/>
          </Col>
          )}
      </Row>
    </Container>

      </DashboardContext.Provider>
    </div>
    )
}

export default Dashboard;