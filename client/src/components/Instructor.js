import React, {useState, useEffect} from 'react'
import Card from './Card'
import AddClass from './AddClass'
import Sample from './Sample'
import UserInfo from './UserInfo'


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
  
const Instructor = () =>{
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
    <div style={{background: 'pink'}}>
            <h2>Hello this is the instuctor</h2>

<div style={{display: 'inline-flex'}}>


    <div style={{ width: '750px'}}>
      <AddClass />
      
    <Card />
    <Sample data={data}/>
    </div>
    
    
</div>
</div>
)
}

export default Instructor;