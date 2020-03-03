import React, {useState, useEffect} from 'react'
import Card from './Card'
import AddClass from './AddClass'
import Sample from './Sample'
import User from './User'
import UserInfo from './UserInfo'
import Instructor from './Instructor'


const infoData =[{
    id:0,
  event: 'Yoga Retreat',
  rating: 0,
  complete: false,
  event_code: '7890',
  },
  {
    id:1,
  event: 'p90x',
  rating: 0,
  complete: false,
  event_code: '7890',
  }]


  const instrData = [{
    instrID: 0,
    name:'Jenny',
    role:'instructor',
    age: '30',
    height:'',
    weight: '',
    bio:'',
    imageUrl:'',
    event_post: []
  },
  {
    instrID: 1,
    name:'Ross',
    role:'client',
    age: '40',
    height:'',
    weight: '',
    bio:'',
    imageUrl:'',
    event_post: []
  }];
  
const Dashboard = () =>{
    const [data, setData] = useState([])
    const [userData, setUserData] = useState([])

      useEffect(() => {
    //once get data inputs are created
    setData(infoData)
      }, [])

      useEffect(() => {
        //once get data inputs are created
        setUserData(instrData[0])
          }, [])

console.log(data, 'data')
console.log(userData, 'userdata')
return(
    <div>

<div style={{display: 'inline-flex'}}>

    <UserInfo userData={userData} />

    <div style={{ width: '750px'}}>
      {userData.role === 'instructor' ? <Instructor /> : <User />}
      
    </div>
    
    
</div>
</div>
)
}

export default Dashboard;