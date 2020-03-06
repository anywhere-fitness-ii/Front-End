import React, {useState, useEffect, createContext} from 'react';
import User from './User'
import Instructor from './Instructor' 
import UserInfo from './UserInfo';
import { DashboardWrapper } from '../styles/Styles';

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
  const [userData, setUserData]=useState({})
  const [cardList, setCardList]=useState([])
  const [dependencyState, setDependencyState] = useState(false)

  const [cardToUpdate, setCardToUpdate] = useState(initialData)
  const [ editing, setEditing ] = useState(false);
  const [ updating, setUpdating ] = useState(false);

  const updateUserData = (data) => {
    console.log(userData, data)
    setUserData({...userData, ...data})
  }



  // --- MIGHT TAKE THIS OFF ---//
  const editUser = person => {
    setUpdating(true);
    setClassData(person);
}



  console.log('classdATA', classData)
  
  const toggleItem = clickedId =>{
    const changes = {
      complete: true
    }
    axiosWithAuth()
    .put(`/classes/${clickedId}`, changes)
      .then(res => {
        console.log('you clicked it')
        console.log("RES: ", res.data)
        const newTaskList = classData.map(item=>{
          if (item.id === clickedId) {
          return { ...item, complete: !item.complete}
          }
          return item;
        })
        setClassData(newTaskList) 
      })
      .catch(err => console.log(err))
  }

  // ---------------------------// 



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

    <DashboardWrapper>
      <DashboardContext.Provider value={{classData, setClassData, toggleItem, setDependencyState, cardToUpdate, setCardToUpdate, userData, cardList, editing, setEditing, updateUserData}}>
      <UserInfo />
        {userData.role_id === 2 ? 
        <Instructor />:<User/>
        }
      </DashboardContext.Provider>
    </DashboardWrapper>
    )
}

export default Dashboard;

