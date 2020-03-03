import React, {useContext} from 'react';
import {DashboardContext} from '../components/Dashboard'


const UserInfo = ()=>{
    const value = useContext(DashboardContext)

    return(<div style={{width: '350px'}}>
        <h2>Personal Info</h2>
        {/* <h2>{props.userData.map(item=> (
            <div key={item.instrID}>
                <p>{item.name}</p>
                <p>{item.role}</p>
            </div>))}</h2> */}
            <h2>
                <p>{value.userData.name}</p>
                <p>{value.userData.role}</p>
                <p>{value.userData.age}</p>
            </h2>

    </div>)
}

export default UserInfo