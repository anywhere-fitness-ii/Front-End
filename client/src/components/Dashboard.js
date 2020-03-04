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
      {/* <Sample2 addCard={addCard} postClass={postClass}/> */}  
      <DashboardContext.Provider value={{classData, userData, cardList}}>
        {}
        {userData.role_id === 2 ? 
        <Instructor/>:<User/>
        
        }
      </DashboardContext.Provider>
    </div>
    )
}

export default Dashboard;