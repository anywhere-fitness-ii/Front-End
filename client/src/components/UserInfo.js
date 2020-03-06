import React, {useContext} from 'react';
import { ProfileImg, UserInfoWrapper } from '../styles/Styles';
import {DashboardContext} from '../components/Dashboard';
import EditModal from './EditModal';



const UserInfo = () => {
    const { userData } = useContext(DashboardContext)

    return (
      <UserInfoWrapper style={{width: "350px"}}>

        <div>
          <div style={{display: "inline-flex", flexDirection: "row-reverse"}}>

          <EditModal buttonLabel={'Edit'} className={'placeholder'}/>
          <h1>{userData.name}</h1>
          
</div>

<p>{userData.role_id === 2 ? 'Instructor': ''} </p>
          <ProfileImg src={userData.picture_url}/>
      
          <h2>Personal Info</h2>
          {<p>Age: {userData.age}</p>}
          {<p>Height: {userData.height}</p>}
          {<p>Weight: {userData.weight}</p>}
        </div>
      </UserInfoWrapper>
    )
}

export default UserInfo