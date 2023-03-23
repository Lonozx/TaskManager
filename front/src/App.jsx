import "./main.scss";
import { Auth } from "./components/Auth/Auth";
import { db } from "./components/firebase/firebase-config";
import { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Main from "./components/Main/Main";
import Homepage from "./pages/Homepage";
import { Routes, Route, Router } from "react-router-dom";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import Employees from "./pages/Employees";

function App() {
  // const [task, setTask] = useState([])
  // const taskCollectionReference = collection(db, "tasks")
  // const getTaskList = async() =>{
  //   //Show the list below
  //   try{
  //   const data = await getDocs(taskCollectionReference);
  //   const filteredData = data.docs.map((doc)=>({...doc.data(),id: doc.id}))
  //   setTask(filteredData)
  // } catch(err){console.error(err);}
  // }
  // useEffect(()=>{

  //   getTaskList()
  // }, [])

  return (
    <>
      <div className="container">
        {/* <Auth/> */}
        <Header url="https://i.etsystatic.com/12353349/r/il/d037a2/2500362922/il_570xN.2500362922_c21m.jpg" />
        <Routes>
          <Route path="/createTickets" element={<Main />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/tickets" element={<Cart />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
        <Footer />

        {/* <Main/>
      <Cart/> */}
      </div>
    </>
  );
}

export default App;
