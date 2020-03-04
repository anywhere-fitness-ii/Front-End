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

<<<<<<< HEAD
=======
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${localStorage.getItem('user_Id')}`)
      .then(res => {
 console.log(res.data, 'res.data')
 setUserData(res.data)
      })
  }, [])

>>>>>>> 08dcce505ff0b881db2b8d25471f580744d9f235
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