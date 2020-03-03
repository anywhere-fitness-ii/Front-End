import React from 'react';
import AddClass2 from './AddClass2'
import InstructorEvents from './InstructorEvents';

const Instructor = (props)=>{
console.log(props.data, 'instructor props')
console.log(props, 'props data instructor')
    return(<div>
    <InstructorEvents events={props.data} />
        <h2>This is the Instructor Section</h2>
        <AddClass2 postClass={props.postClass}/>


    </div>)
}

export default Instructor