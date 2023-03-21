import  './cart.scss'
import {db} from '../firebase/firebase-config'
import {useState, useEffect} from 'react'
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'
 

export default function Cart() {

    const [task, setTask] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [office, setOffice] = useState(0)
    const [isdone, setIsDone] = useState(true)
    const [updatedDescription, setUpdatedDescription] = useState("");
    let [heart, setHeart] = useState(0);
    function setHeartInto(){
     heart++;
     setHeart(heart);
    }
  
    const taskCollectionReference = collection(db, "tasks") 
  
    const getTaskList = async() =>{
      //Show the list below
      try{
      const data = await getDocs(taskCollectionReference);
      const filteredData = data.docs.map((doc)=>({...doc.data(),id: doc.id}))
      setTask(filteredData)
    } catch(err){console.error(err);}
    }
    useEffect(()=>{
      
      getTaskList()
    }, [])
    
    const publishTask = async() =>{
      try{
      await addDoc(taskCollectionReference, {title: title, description: description, office: office, 
        isDone: isdone} )
        getTaskList()
      }catch(err){console.error(err)}
    }
    let yellow = '#FFF';
    const [bgColor, setBgColor] = useState(yellow);
    const acceptTask=()=>{
      let purple = 'grey';
      setBgColor(purple);
    }
    const deleteTask=async(id)=>{
      const taskDoc = doc(db, 'tasks', id)
      await deleteDoc(taskDoc)
    }
    const updateTask=async(id)=>{
      const taskDoc = doc(db, 'tasks', id)
      await updateDoc(taskDoc, {description: updatedDescription})
    }
    return(
        <div className="container__list" >
       {task.map((tasked)=>(
        // style={{background: bgColor}}
         <div className='container__list-cart'>
         <h1>{tasked.title}</h1>
         <p className='scrolled'>{tasked.description}</p>
         <p>Офіс № {tasked.office}</p>
         <div className='button-section'>
         <button onClick={()=>deleteTask(tasked.id)} className='cart-deny'>Відміна</button>
          <label className="heart" onClick={()=>{<h6>setHeartInto()</h6>}}>
          ❤️
</label>
         <button onClick={()=>updateTask(tasked.id)} className='cart-apply'>Прийняти</button>
         {/* <input type="text" placeholder='Ви можете змінити опис задачі.'
         onChange={(e)=>{setUpdatedDescription(e.target.value)}}/> */}
         </div>
         </div>
      ))}
      </div>
    )
}