import React from 'react';

const Card = (props)=>{
    console.log(props, 'cards props')
    return(<div >
        <h2>Card Section</h2>
                <div style={{display: 'inline-flex'}}>{props.addCard.map(item=> (
                    <>
                    <div key={item.id} style={{border: '2px solid magenta', margin: '10px', height: '300px', width: '300px'}}>
                        <p>{item.name}</p>
                        <p>{item.classType}</p>
                        <p>{item.date}</p>
                        <p>{item.startTime}</p>
                        <p>{item.duration}</p>
                        <p>{item.intensity}</p>
                        <p>{item.maxParticipants}</p>





               
                        {props.userData.role === 'instructor' && <div>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>Complete</button>
                        </div>}
                        </div>

                    </>
                    ))}</div>

    </div>)
}

export default Card