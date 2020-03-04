import React, {useContext} from 'react';
import {DashboardContext} from '../components/Dashboard'
import AddClass from './AddClass'
import InstructorEvents from './InstructorEvents';


const Instructor = ()=>{
    const {data,userData, setDependencyState, cardList} = useContext(DashboardContext)
    return(
    <div>
      <InstructorEvents userData={userData} events={data} />
        <h2>This is the Instructor Section</h2>
        <AddClass setDependencyState={setDependencyState} userData={userData} cardList={cardList}/>
    </div>)
}

export default Instructor