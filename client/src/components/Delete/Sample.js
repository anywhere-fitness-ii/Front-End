import React, {useContext} from 'react';
import {DashboardContext} from '../Dashboard'

const Sample = () =>{
    const value = useContext(DashboardContext)

    console.log(value)
    return(<div>
        Hello sample
        {value.userData.name}
    </div>)
}

export default Sample