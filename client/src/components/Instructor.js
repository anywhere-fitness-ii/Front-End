import React, {useContext} from 'react';
import {DashboardContext} from '../components/Dashboard'
import AddClass2 from './AddClass2'
import InstructorEvents from './InstructorEvents';


const Instructor = ()=>{
    const {data, postClass, cardList} = useContext(DashboardContext)


    return(<div>
    <InstructorEvents events={data} />
        <h2>This is the Instructor Section</h2>
        <AddClass2 postClass={postClass} cardList={cardList}/>


    </div>)
}

export default Instructor