import React, {useContext} from 'react';
import {DashboardContext} from '../components/Dashboard'


const UserInfo = () => {
    const {userData} = useContext(DashboardContext)
    console.log(userData.age)
    return(
      <div>
        <div>
          <img src={userData.picture_url}/>
          <h1>{userData.name}</h1>
        </div>
        <div>
          <h2>Personal Info</h2>
          {<span><strong>Age</strong></span>&&<span>{userData.age}</span>}<br/>
          {<span><strong>Height</strong></span>&&<span>{userData.height}</span>}<br/>
          {<span><strong>Weight</strong></span>&&<span>{userData.weight}</span>}<br/>
        </div>
      </div>
    )
}

export default UserInfo