import React from 'react';

const Activities = (props) => {


// const shammy = [...new Set (props.events.filter(item=> {
//     return ((item.class_type).toUpperCase() === ('pass').toUpperCase())|| (item.class_type === 'yoga')
// }))]
// const shamp = [...new Set (props.events.map(item=> {
//     return `why me ${(item.class_type).toUpperCase()}`}))]
// console.log(shammy, 'shammy', shamp, 'shamp')

const raj = 'sheldon'.toUpperCase()
console.log(raj, 'raj')
const uniques = Object.values(props.events.reduce((a,c)=>{
    a[c.class_type.toUpperCase()]=c;
    return a
}, {}))

const filteredData = uniques.filter(item =>{
console.log(item.class_type.toUpperCase(), 'capClasstype')
    // return  (item.class_type.toUpperCase() === ('boxing').toUpperCase()) || (item.class_type.toUpperCase() === ('Martial Arts').toUpperCase()) || (item.class_type.toUpperCase() === ('yoga').toUpperCase())
    return  (item.class_type === ('boxing')) || (item.class_type === ('Martial Arts')) || (item.class_type == ('Yoga'))


})
console.log(uniques, 'uniques')

return(
  <div>
<h4>Popular Fitness Classes ({filteredData.length})</h4>
              <div style={{display: 'inline-flex'}}>

                {filteredData
                    .map(item=> ( 
                        <div style={{display: "block"}}>
                    <div key={item.id} style={{padding: "40px", borderRadius: "10px", margin: "20px 20px 0px", backgroundImage: `url(${item.class_img_url})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', width: "300px",
                    height:" 190px"}}>
                        <p style={{color: 'white', background:"#ffc10754", width: "fit-content", padding: "10px"}}>{item.class_type}</p>
                        </div>
                        <div style={{display: "inline-flex", width: "100%", padding: '0px 30px 30px'}}>
                            <div style={{width: '50%'}}><span>◷</span>{item.class_duration}</div>
                            <div style={{width: '50%', textAlign: "right"}}><span>🔥</span>{item.class_intensity}</div>
                        </div>
                        </div>
                        )
                        )
                        
                        }
                        </div>
   </div>
   )}
    
export default Activities;
