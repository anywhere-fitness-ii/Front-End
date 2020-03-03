import React from 'react';

const UserInfo = (props)=>{

    console.log(props, 'user props')
    console.log(props.userData)
    return(<div style={{width: '350px'}}>
        <h2>Personal Info</h2>
        {/* <h2>{props.userData.map(item=> (
            <div key={item.instrID}>
                <p>{item.name}</p>
                <p>{item.role}</p>
            </div>))}</h2> */}
            <h2>
                <p>{props.userData.name}</p>
                <p>{props.userData.role}</p>
                <p>{props.userData.age}</p>
            </h2>

    </div>)
}

export default UserInfo