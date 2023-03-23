import './employees.scss'
import {useState, useEffect} from 'react'
import employees from './emplDB.json'
import ReactCardSlider from 'react-card-slider-component';


export default function Employees(){
    const [data, setData] = useState([]);

  

    // const getData = ()=>{
    //     fetch('emplDB.json')
    //     .then(function(response){
    //         console.log(response);
    //         return response.json();
    //     })
    //     .then(function myJson(){
    //         console.log(myJson);
    //         setData(myJson);
    //     })
    // }
    // useEffect(()=>{
    //     getData();
    // },[])
    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     }}
     //  employees && employees.length>0 && 
   
    return(
        
        
       
        // <Testimonial testimonialData={employees}/>
        <div className="employees">
        {employees.map((item)=>{
              return(
              
              
            <div className="employees__cart">
                <img className='photo-avatar' src={item.photo} alt="" />
            <h2>Ім'я співробітника: {item.name}</h2>
            <p>Вік: {item.age} років</p>
            <p>{item.bio}</p>
            <p>{item.rate}</p>
            </div>
           
           
            )
         
         })}
        
        </div>
    )
}