

import React, {useState, useContext, useEffect, createContext} from 'react';
import User from './User'
import Instructor from './Instructor'

import { H1 } from '../styles/Styles';
import { Row, Container, Col } from 'reactstrap';
import ClassCards from './ClassCards';
import SearchForm from './SearchForm';
import UserInfo from './UserInfo';


import {axiosWithAuth} from '../utils/axiosWithAuth'


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

export const DashboardContext = createContext();  
const Dashboard = () =>{
  const [classData, setClassData] = useState([])
  const [userData, setUserData]=useState([])
  const [cardList, setCardList]=useState([])
  const [dependencyState, setDependencyState] = useState(false)
  const [cardToUpdate, setCardToUpdate]=useState(initialData)

 


  useEffect(() => {
    axiosWithAuth()
      .get(`/classes`)
      .then(res => {
        setClassData(res.data)
        setDependencyState(false);

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
      <DashboardContext.Provider value={{classData, setDependencyState, cardToUpdate, setCardToUpdate, userData, cardList}}>
      <UserInfo />
        {userData.role_id === 2 ? 
        <Instructor/>:<User/>
        }
      </DashboardContext.Provider>
    </div>
    )
}

export default Dashboard;
