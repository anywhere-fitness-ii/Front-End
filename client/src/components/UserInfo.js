import React, {useContext, useState} from 'react';
import { ProfileImg, UserInfoWrapper } from '../styles/Styles';
import {DashboardContext} from '../components/Dashboard';
import EditModal from './EditModal';



const UserInfo = () => {
    const { userData } = useContext(DashboardContext)

    return (
      <UserInfoWrapper>
        <div>
          <h1>{userData.name}</h1>
          <ProfileImg src={userData.picture_url}/>
      
          <h2>Personal Info</h2>
          {<p>Age: {userData.age}</p>}
          {<p>Height: {userData.height}</p>}
          {<p>Weight: {userData.weight}</p>}
        </div>
        <EditModal buttonLabel={'Edit User Info'} className={'placeholder'}/>
      </UserInfoWrapper>
    )
}

export default UserInfo