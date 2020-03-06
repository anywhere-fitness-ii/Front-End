import React from 'react';

// const tryingSomethingNEW=()=>{
//     let unique = [...new Set()]
// }


const Activities = (props) => {

    // const mySet = new Set([props.events]);

    var items = [{num: 4, }, {num:4}, {num:2}]
    // var uniqueness = Array.from( new Set(items))
const uniq = [...new Set(items.map(item=>item.num))]
    console.log('uniqueness', uniq)

// const shamp =[...new Set (props.events.filter(item => {
//     return (item.class_type === 'yoga') || (item.class_type === 'Martial Arts') || (item.class_type === 'boxing') ;                
// }))]

const shammy = [...new Set (props.events.filter(item=> {
    return (item.class_type === 'pass')|| (item.class_type === 'yoga')
}))]
const shamp = [...new Set (props.events.map(item=> item.class_type))]
console.log(shammy, 'shammy', shamp, 'shamp')
return(
  <div>
<h3>Popular Fitness Classes</h3>
              <div style={{display: 'inline-flex'}}>

      {[...new Set (props.events.filter(item => {
                    return (item.class_type === 'yoga') || (item.class_type === 'Martial Arts') || (item.class_type === 'boxing') ;                
                }))]
                .map(item=> ( 
                    
                    <div key={item.id} style={{padding: "40px", borderRadius: "10px", margin: "20px", backgroundImage: `url(${item.class_img_url})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}>
                        <div style={{display: 'inline-flex'}}>
                            <span style={{marginRight: '10px'}}>📅</span>
                        <h2>{item.class_date}</h2>
                        </div>
                        <p>{item.class_type}</p>
                        {console.log(item.class_type, "cretor type")}
                        </div>
                        )
                        )
                        
                        }
                        </div>
   </div>
   )}
    
export default Activities;
