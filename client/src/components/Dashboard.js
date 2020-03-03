import React, {useState, useEffect} from 'react'
import Card from './Card'
import AddClass from './AddClass'
import Sample from './Sample'
import User from './User'
import UserInfo from './UserInfo'
import Instructor from './Instructor'
import {instrData, eventData} from '../mockData'




  
const Dashboard = () =>{
    const [data, setData] = useState([])
    const [userData, setUserData] = useState([])

      useEffect(() => {
    //once get data inputs are created
    setData(eventData)
      }, [])

      useEffect(() => {
        //once get data inputs are created
        setUserData(instrData[0])
          }, [])

console.log(data, 'data')
console.log(userData, 'userdata')
console.log(eventData, 'event')
return(


<div style={{display: 'inline-flex'}}>

    <UserInfo userData={userData} />

    <div style={{ width: '750px'}}>

      {userData.role === 'instructor' ? <Instructor userData={userData} data={data}/> : <User />}
      <Card data={data}/>
      
    </div>
    
</div>
)
}

export default Dashboard;