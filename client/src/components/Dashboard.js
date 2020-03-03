import React, {useState, useEffect} from 'react'
import Card from './Card'
import User from './User'
import UserInfo from './UserInfo'
import Instructor from './Instructor'
import {instrData, eventData, addCard} from '../mockData'

  
const Dashboard = () =>{
    const [data, setData] = useState([])
    const [userData, setUserData] = useState([])
    const [addNewCard, setAddNewCard] =useState([])

      useEffect(() => {
    //once get data inputs are created
    setData(eventData)
    setAddNewCard(addCard)
      }, [])

      useEffect(() => {
        //once get data inputs are created
        setUserData(instrData[1])
          }, [])

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
              setAddNewCard([...addNewCard, newClass])
          }


console.log(data, 'data')
console.log(userData, 'userdata')
console.log(eventData, 'event')
return(


<div style={{display: 'inline-flex'}}>

    <UserInfo userData={userData} />

    <div style={{ width: '750px'}}>

      {userData.role === 'instructor' ? 
      <Instructor userData={userData} data={data} postClass={postClass}/> : <User />}
      <Card userData={userData} data={data} addCard={addCard}/>
      
    </div>
    
</div>
)
}

export default Dashboard;