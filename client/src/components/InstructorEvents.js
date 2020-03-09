import React from 'react';

const InstructorEvents = (props)=>{

    let moment = require('moment');
    moment().format();

    return(
    <div style={{border: '1px solid #C4C4C4', padding: "40px", borderRadius: "10px", margin: "10px", marginBottom: '40px'}}>
        <h2>Upcoming events</h2>       
        <div style={{display: 'inline-flex'}}>
        {props.events.filter(item => {
                    return item.class_max_participants == 1;
                }).map(item=> (
                    <div key={item.id} style={{border: '1px solid #C4C4C4', padding: "40px", borderRadius: "10px", margin: "20px"}}>
                        <div style={{display: 'inline-flex', margin:'20px 0px' }}>
                            <span style={{marginRight: '10px'}}>📅</span>
                            <sub><h1>{moment(item.class_date).format('DD')}</h1></sub>
                            <sup><h4 style={{fontWeight: '100'}}>{moment(item.class_date).format('MMM').toUpperCase()}</h4></sup>
                        </div>
                        <p>{item.class_type}</p>                      
                        </div>))}
                        
                        </div>
    </div>)
}

export default InstructorEvents