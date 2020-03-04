import React, {useState, useEffect, createContext} from 'react';
import User from './User'
import UserInfo from './UserInfo'
import Instructor from './Instructor'
import {axiosWithAuth} from '../utils/axiosWithAuth'

export const DashboardContext = createContext();  
const Dashboard = () =>{
  const [classData, setClassData] = useState([])
  const [userData, setUserData]=useState([])
  const [cardList, setCardList]=useState([])


  const updateUserData = (e) => {
    setUserData(...userData, newUserData)
  }

  useEffect(() => {
    axiosWithAuth()
      .get(`/classes`)
      .then(res => {
        setClassData(res.data)
      })
  }, [])

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${localStorage.getItem('user_Id')}`)
      .then(res => {
      setUserData(res.data)
      })
  }, [])

  return (
    <div> 
      {userData && classData ? 
      <DashboardContext.Provider value={{classData, userData, cardList, updateUserData}}>
        {userData.role_id === 2 ? 
        <Instructor/>:<User/>
        }
      </DashboardContext.Provider> :
      null}
    </div>
    )
}

export default Dashboard;