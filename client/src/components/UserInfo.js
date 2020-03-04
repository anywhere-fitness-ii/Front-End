import React, {useContext, useState} from 'react';
import {DashboardContext} from '../components/Dashboard';
import EditModal from './EditModal';


const UserInfo = () => {
    const {userData} = useContext(DashboardContext)

    return (
      <div>
        <div>
          <img src={userData.picture_url}/>
          <h1>{userData.name}</h1>
        </div>
        <div>
          <h2>Personal Info</h2>
          {<span>Age: {userData.age}</span>}<br/>
          {<span>Height: {userData.height}</span>}<br/>
          {<span>Weight: {userData.weight}</span>}<br/>
        </div>
        <EditModal buttonLabel={'Edit User Info'} className={'placeholder'}/>
      </div>
    )
}

export default UserInfo