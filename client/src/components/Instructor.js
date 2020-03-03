import React, {useState, useEffect} from 'react'
import Card from './Card'
import AddClass from './AddClass'


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
  
const Instructor = () =>{
    const [data, setData] = useState([])
    // const [data, setData] = useState([])


      useEffect(() => {
    //once get data inputs are created
    setData(infoData)
      }, [])

console.log(data, 'data')
return(
    <div>
            <h2>Hello this is the instuctor</h2>

<div style={{display: 'inline-flex'}}>
    <AddClass />
    <Card />
    
</div>
</div>
)
}

export default Instructor;