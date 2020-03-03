import React from 'react';

const Card = (props)=>{
    console.log(props)
    return(<div>
        <h2>Card Section</h2>
        <p>{props.data.event}</p>
    </div>)
}

export default Card