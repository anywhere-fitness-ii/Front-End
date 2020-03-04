import React, {useContext} from 'react';
import {DashboardContext} from '../components/Dashboard'


const UserInfo = ()=>{
    const {userData} = useContext(DashboardContext)
    return(
      <div style={{width: '350px'}}>
        <h2>Personal Info</h2>
        {/* {props.userData.map(item=> (
            <div key={item.instrID}>
                <p>{item.name}</p>
                <p>{item.role}</p>
            </div>))}
            <h2>
                <p>{userData.name}</p>
                <p>{userData.role}</p>
                <p>{userData.age}</p>
            </h2> */}
    </div>)
}

export default UserInfo