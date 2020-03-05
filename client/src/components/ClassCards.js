import React, {useContext} from 'react';
import {DashboardContext} from '../components/Dashboard'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

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

const ClassCards = ({classInstance, setCardToUpdate, setEditing })=> {
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

              <Button onClick={()=>{setCardToUpdate(classInstance); setEditing(true);}}>Edit</Button>
              <Button onClick={()=>deleteHandle(classInstance.id)}>Delete</Button>
              <Button>Complete</Button>
          </div>
           :
            <Button>Register</Button>
           }
      </CardBody>
    </Card>
    )

}

export default ClassCards
