import React from 'react';

const Sample = (props)=>{

    return(<div>
        <h2>Sample Section</h2>
        <h2>{props.data.map(item=> item.event)}</h2>
    </div>)
}

export default Sample