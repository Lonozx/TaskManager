import './employees.scss'
import {useState, useEffect} from 'react'
import employees from './emplDB.json'

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
    return(
        // <>
        // <p> data.length</p>
        // </>,
        <div className="employees">
         {
        //  employees && employees.length>0 && 
         employees.map((item)=>{
            return(
            <div className="employees__cart">
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