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

  useEffect(() => {
    axiosWithAuth()
      .get(`/classes`)
      .then(res => {
        console.log(res)
        setClassData(res.data)
      })
  }, [])

  return (
    <div>
      {/* <Sample2 addCard={addCard} postClass={postClass}/> */}  
      <DashboardContext.Provider value={{classData, userData, cardList}}>
        {userData.role === 'instructor' ? 
        <Instructor/> : <User/>}
      </DashboardContext.Provider>
    </div>
    )
}

export default Dashboard;