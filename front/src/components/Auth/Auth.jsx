import './auth.scss'
import {auth, googleProvider} from '../firebase/firebase-config'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import {useState} from 'react'

export const Auth = () =>{
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const signIn = async ()=>{
        try {
        await createUserWithEmailAndPassword(auth, email, password)
    } catch(err){
        console.error(err)
    }
    }

    const signWithGoogle = async() => {
        try{
        await signInWithPopup(auth, googleProvider)
    } catch(err){
        console.log(err);
    }
    }
    const signOut = async() => {
        try{
        await signOut(auth)
    } catch(err){
        console.log(err);
    }
    }

    return <div className="container__sign">

        <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signWithGoogle}>Sign In With Google</button>
        <button onClick={signOut}>Log Out</button>
    </div>
}