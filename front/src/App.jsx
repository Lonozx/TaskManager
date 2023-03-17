import './main.scss'
import {Auth}  from './components/Auth/Auth'
import {db} from './components/firebase/firebase-config'
import {useState, useEffect} from 'react'
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
 
function App() {
  const [task, setTask] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [office, setOffice] = useState(0)
  const [isdone, setIsDone] = useState(true)

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

  const deleteTask=async(id)=>{
    const taskDoc = doc(db, 'tasks', id)
    await deleteDoc(taskDoc)
  }
  return (
   <>
    <div className='container'>Firebase Start

    <div className="createTask">
      <input type="text" onChange={(e)=>{setTitle(e.target.value)}} placeholder='title please' />
      <input type="text" onChange={(e)=>{setDescription(e.target.value)}} placeholder='description' />
      <input type="number" onChange={(e)=>{setOffice(Number(e.target.value))}} placeholder='office number'/>
      <input type="checkbox" checked={isdone} onChange={(e)=>{setIsDone(e.target.checked)}}/><label>is it done?</label>
      <button onClick={publishTask}>Publish</button>
    </div>

      <Auth/>
      <div className="cart">
       {task.map((tasked)=>(
         <div>
         <h1>{tasked.title}</h1>
         <p>{tasked.description}</p>
         <p>{tasked.office}</p>
         <button onClick={()=>deleteTask(tasked.id)}>Delete</button>
         </div>
      ))}
      </div>
    </div>
   </>
  );
}

export default App;
