import React from 'react'
import Card from './Card'
import AddClass from './AddClass'

const Instructor = () =>{
return(
    <div>
            <h2>Hello this is the instuctor</h2>

<div style={{display: 'inline-flex'}}>
    <AddClass />
    <Card />
    
</div>
</div>
)
}

export default Instructor;