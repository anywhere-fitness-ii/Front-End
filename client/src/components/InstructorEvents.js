import React from 'react';

const InstructorEvents = (props)=>{
console.log(props, 'instructor event')
    return(
    <div style={{border: '1px solid #C4C4C4', padding: "40px", borderRadius: "10px", margin: "10px", marginBottom: '40px'}}>
        <h2>Upcoming events</h2>       
        <div style={{display: 'inline-flex'}}>
        {props.events.filter(item => {
                    return item.class_max_participants == 1;
                }).map(item=> (
                    <div key={item.id} style={{border: '1px solid #C4C4C4', padding: "40px", borderRadius: "10px", margin: "20px"}}>
                        <div style={{display: 'inline-flex' }}>
                            <span style={{marginRight: '10px'}}>📅</span>
                        <h2>{item.class_date}</h2>
                        </div>
                        <p>{item.class_type}</p>
                        {console.log(item.class_img_url)}
                        
                        </div>))}
                        
                        </div>
    </div>)
}

export default InstructorEvents