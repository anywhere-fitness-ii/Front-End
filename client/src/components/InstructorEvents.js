import React from 'react';

const InstructorEvents = (props)=>{
console.log(props, 'instructor event')
    return(<div>
        <h2>Events</h2>
        <div style={{display: 'inline-flex'}}>{props.events.map(item=> (
            <div style={{border: '1px solid green', padding: '10px', margin: '20px'}}>{item.event}</div>))}</div>
    </div>)
}

export default InstructorEvents