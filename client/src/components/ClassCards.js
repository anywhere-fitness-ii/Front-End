import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { H1 } from '../styles/Styles';

const ClassCards = (props)=> {
    console.log(props, 'cards props')
    return(
        <div>
            <H1>Card Section</H1>
            {/* This "addCard" is mock data, will be replaced with actual user data from backend */}
            {props.addCard.map(item=> 
            <Card key={item.id}>
                <CardBody>
                    <CardTitle >{item.name}</CardTitle>
                    <CardSubtitle>{item.classType}</CardSubtitle>
                    <CardSubtitle>{item.date}</CardSubtitle>
                    <CardSubtitle>{item.startTime}</CardSubtitle>
                    <CardSubtitle>{item.duration}</CardSubtitle>
                    <CardSubtitle>{item.intensity}</CardSubtitle>
                    <CardSubtitle>{item.maxParticipants}</CardSubtitle>
                    {props.userData.role === 'instructor' && 
                    <div>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                        <Button>Complete</Button>
                    </div>
                    }
                </CardBody>
            </Card>
            )}
    </div>
    )
}

export default ClassCards