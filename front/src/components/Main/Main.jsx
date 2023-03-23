import { db } from "../firebase/firebase-config";
import { useState, useEffect } from "react";
import "./mainSection.scss";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import Cart from "../Cart/Cart";

export default function Main() {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [office, setOffice] = useState(0);
  const [isdone, setIsDone] = useState(true);
  const [updatedDescription, setUpdatedDescription] = useState("");

  const taskCollectionReference = collection(db, "tasks");

  const getTaskList = async () => {
    //Show the list below
    try {
      const data = await getDocs(taskCollectionReference);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTask(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  // useEffect(()=>{

  //   getTaskList()
  // }, [])

  const handleChange = (event) => {
    setTitle(event.target.value);

    if (event.target.value.trim().length > 0) {
      console.log("Input AR");
    } else {
      console.log("Field is emply");
    }
  };

  const publishTask = async () => {
    try {
      await addDoc(taskCollectionReference, {
        title: title,
        description: description,
        office: office,
        isDone: isdone,
      });
      setTitle("");
      setDescription("");
      setOffice("");
      getTaskList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-input">
      <div className="input-data">
        <label className="ticketName" htmlFor="">
          Передайте задачку адмінчику
        </label>
        <input
          type="text"
          className="ticket title-ticket"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Як ви ідентифікуєте проблему?"
        />
        <textarea
          className="ticket description-ticket"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Опишіть проблему"
        />
        <input
          type="number"
          className="ticket office-ticket"
          onChange={(e) => {
            setOffice(Number(e.target.value));
          }}
          placeholder="Номер офісу (Можна не писати)"
        />
        <div className="rights">
          <input
            type="checkbox"
            checked={isdone}
            onChange={(e) => {
              setIsDone(e.target.checked);
            }}
          />
          <label>Я погоджуюсь з умовами 🤪</label>
        </div>
        <h6 className="cheers">(Це поки ні на що не впливає)</h6>
        <button className="cart-create" onClick={publishTask}>
          Заслати задачку, козаче!
        </button>
      </div>
    </div>
  );
}
