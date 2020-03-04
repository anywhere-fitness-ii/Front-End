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



  // const updateUserData = (e) => {
  //   setUserData(...userData, newUserData)
  // }

  useEffect(() => {
    axiosWithAuth()
      .get(`/classes`)
      .then(res => {
        setClassData(res.data)
        setDependencyState(false);
        console.log(dependencyState, 'dependency initial state')

      })
  }, [dependencyState])

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${localStorage.getItem('user_Id')}`)
      .then(res => {
      setUserData(res.data)
      })
  }, [])

  return (
    <div>
      <DashboardContext.Provider value={{classData, setDependencyState, userData, cardList}}>
        {userData.role_id === 2 ? 
        <Instructor/>:<User/>
        }
      </DashboardContext.Provider>
    </div>
    )
}

export default Dashboard;