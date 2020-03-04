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

  // I think we can move the postClass to the instructor component?
  const postClass = item =>{
      const newClass ={
          id: Date.now(),
          name: item.name,
          classType: item.classType,
          date: item.date,
          startTime: item.startTime,
          duration: item.duration,
          location: item.location,
          intensity: item.intensity,
          maxParticipants: item.maxParticipants
      }
    setCardList([...cardList, newClass])
    console.log(cardList,'cardList')
  }

  return (
    <div>
      {/* <Sample2 addCard={addCard} postClass={postClass}/> */}  
      <DashboardContext.Provider value={{classData, userData, postClass, cardList}}>
        {userData.role === 'instructor' ? 
        <Instructor/> : <User/>}
      </DashboardContext.Provider>
    </div>
    )
}

export default Dashboard;