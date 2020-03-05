import React, {useContext, useState} from 'react';
import {DashboardContext} from '../components/Dashboard'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
  } from 'reactstrap';

import { H1 } from '../styles/Styles';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialData = {
    class_name: "",
    class_type: "",
    class_date: "",
    class_start_time: "",
    class_duration: "",
    class_intensity: "",
    class_location: "",
    registered_participants: 0,
    class_max_participants: 0
}

const ClassCards = ({classInstance})=> {
  const {userData, classData} = useContext(DashboardContext)
  const [cardToUpdate, setCardToUpdate]=useState(initialData)

  console.log(classData, 'classdata-classcards')

  const editCard = e =>{
    setCardToUpdate(initialData)
  }
  const updateCard = e=>{
    e.preventDefault();

    axiosWithAuth()
    .put(`/classes/${cardToUpdate.id}`, cardToUpdate)
    .then(res=>{
      console.log(res, 'res')
    })
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
          


         
          {userData.role_id === 2 && 
          <div>
              <Button onClick={updateCard}>Edit</Button>
              <Button>Delete</Button>
              <Button>Complete</Button>
          </div>
           }
      </CardBody>
    </Card>
    )

}

export default ClassCards