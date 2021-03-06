import React, {useContext} from 'react';
import {DashboardContext} from '../components/Dashboard'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import { axiosWithAuth } from '../utils/axiosWithAuth';


const ClassCards = ({classInstance, setCardToUpdate, setEditing, toggleItem})=> {
  const {userData} = useContext(DashboardContext)

  const deleteHandle = (id) =>{
    axiosWithAuth()
      .delete(`/classes/${id}`)
      .then(res => {window.location.reload(false);})
      .catch(err => err);
  }

  let moment = require('moment');
  moment().format();

  return (
      <Card className="mt-3">
        <CardBody className="cardStyle">
          {console.log(classInstance.class_date, 'class date from instance')}
          <CardSubtitle style={{display: 'inline-flex', margin:'20px 0px'}}>
            <sub><h1>{moment(classInstance.class_date).format('DD')}</h1></sub>
            <sup><h5 style={{fontWeight: '100'}}>{moment(classInstance.class_date).format('MMM').toUpperCase()}</h5></sup>
          </CardSubtitle>
         <CardSubtitle><strong>Class Name: </strong>{classInstance.class_name}</CardSubtitle>
          {/* <CardSubtitle className="mt-1"><strong>Class Type: </strong>{classInstance.class_type}</CardSubtitle> */}
          {/* <CardSubtitle className="mt-1"><strong>Date: </strong>{moment(classInstance.class_date).format('MM/DD/YYYY')}</CardSubtitle> */}
          <CardSubtitle className="mt-1"><strong>Start Time: </strong>{classInstance.class_start_time}</CardSubtitle>
          <CardSubtitle className="mt-1"><strong>Duration: </strong>{classInstance.class_duration}</CardSubtitle>
          {/* <CardSubtitle className="mt-1"><strong>Intensity: </strong>{classInstance.class_intensity}</CardSubtitle> */}
          <CardSubtitle className="mt-1"><strong>Location: </strong>{classInstance.class_location}</CardSubtitle>
          {/* <CardSubtitle className="mt-1"><strong>Registered Participants: </strong>{classInstance.registered_participants}</CardSubtitle> */}
          <CardSubtitle className="mt-1"><strong>Max Participants: </strong>{classInstance.class_max_participants}</CardSubtitle>
          {userData.role_id === 2 ?
          <div className="instructorButtons">

              <Button style={{background: "#6BC6ED"}} onClick={()=>{
                  setCardToUpdate(classInstance); 
                  setEditing(true);}
                }>Edit</Button>
              <Button onClick={()=>deleteHandle(classInstance.id)} style={{background: "#E97878"}}>✕</Button>
              <Button onClick={()=> toggleItem(classInstance.id)} className={classInstance.class_max_participants ? 'red': 'yellow'} style={{background: "#79A778", fontSize: "24px"}}>✓</Button>
          </div>
           :
            <Button>Register</Button>
           }
      </CardBody>
    </Card>
    )

}

export default ClassCards
