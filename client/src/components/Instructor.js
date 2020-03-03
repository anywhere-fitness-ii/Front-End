import React from 'react';
import AddClass from './AddClass'
import InstructorEvents from './InstructorEvents';

const Instructor = (props)=>{
console.log(props.data, 'instructor props')
    return(<div>
    <InstructorEvents events={props.data} />
        <h2>This is the Instructor Section</h2>
        <AddClass />


    </div>)
}

export default Instructor