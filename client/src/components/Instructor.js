import React, {useContext} from 'react';
import {DashboardContext} from '../components/Dashboard'
import AddClass from './AddClass'
import InstructorEvents from './InstructorEvents';


const Instructor = ()=>{
    const {data, cardList} = useContext(DashboardContext)

    return(
    <div>
      <InstructorEvents events={data} />
        <h2>This is the Instructor Section</h2>
        <AddClass cardList={cardList}/>
    </div>)
}

export default Instructor