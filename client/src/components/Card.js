import React from 'react';

const Card = (props)=>{
    console.log(props, 'cards props')
    return(<div >
        <h2>Card Section</h2>
        {/* <p>{props.data.event}</p> */}
                <div style={{display: 'inline-flex'}}>{props.data.map(item=> (
                    <>
                    <div key={item.id} style={{border: '2px solid magenta', margin: '10px', height: '200px', width: '200px'}}>
                        {item.event}
               
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