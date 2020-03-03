import React from 'react';

const User = (props)=>{

    console.log(props, 'user props')
    return(<div>
        <h2>User Section</h2>
        <h2>{props.userData.map(item=> (
            <div key={item.instrID}>
                <p>{item.name}</p>
                <p>{item.role}</p>
            </div>))}</h2>

    </div>)
}

export default User