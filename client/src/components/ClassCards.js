

import React, {useContext, useState} from 'react';
import {DashboardContext} from '../components/Dashboard'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
  } from 'reactstrap';

import { H1 } from '../styles/Styles';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const ClassCards = ({classInstance, setCardToUpdate, setEditing, toggleItem})=> {
  const {userData} = useContext(DashboardContext)

  const deleteHandle = (id) =>{
    axiosWithAuth()
      .delete(`/classes/${id}`)
      .then(res => {window.location.reload(false);})
      .catch(err => err);
  }


  return (
      <Card className="mt-3">
        <CardBody>
          <CardTitle><strong>Class Name: </strong>{classInstance.class_name}</CardTitle>
          <CardSubtitle className="mt-1"><strong>Class Type: </strong>{classInstance.class_type}</CardSubtitle>
          <CardSubtitle className="mt-1"><strong>Date: </strong>{classInstance.class_date}</CardSubtitle>
          <CardSubtitle className="mt-1"><strong>Start Time: </strong>{classInstance.class_start_time}</CardSubtitle>
          <CardSubtitle className="mt-1"><strong>Duration: </strong>{classInstance.class_duration}</CardSubtitle>
          <CardSubtitle className="mt-1"><strong>Intensity: </strong>{classInstance.class_intensity}</CardSubtitle>
          <CardSubtitle className="mt-1"><strong>Location: </strong>{classInstance.class_location}</CardSubtitle>
          <CardSubtitle className="mt-1"><strong>Registered Participants: </strong>{classInstance.registered_participants}</CardSubtitle>
          <CardSubtitle className="mt-1"><strong>Max Participants: </strong>{classInstance.class_max_participants}</CardSubtitle>
          {userData.role_id === 2 ?
          <div>

              <Button onClick={()=>{
                  setCardToUpdate(classInstance); 
                  setEditing(true);}
                }>Edit</Button>
              <Button onClick={()=>deleteHandle(classInstance.id)}>Delete</Button>
              <button onClick={()=> toggleItem(classInstance.id)} className={classInstance.complete ? 'red': 'yellow'}>Complete</button>
          </div>
           :
            <Button>Register</Button>
           }
      </CardBody>
    </Card>
    )

}

export default ClassCards
