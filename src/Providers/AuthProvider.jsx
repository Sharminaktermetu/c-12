import  { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext =createContext();
const auth =getAuth(app)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true)
const provider = new GoogleAuthProvider();
    const createUser =(email,password)=>{
      setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const login =(email,password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
    }
    const googleLog =()=>{
      setLoading(true)
      return  signInWithPopup(auth,provider)
    }
    const logOut =()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser =>{
             console.log('auth state change', currentUser);
             setUser(currentUser)

             if (currentUser) {
               axios.post('https://summer-camp-server-alpha-jet.vercel.app/jwt',{email:currentUser.email})
               .then(data=>{
                console.log(data.data.token);
                localStorage.setItem('access-token',data.data.token)
                setLoading(false);
               })
             }
             else{
              localStorage.removeItem('access-token')
             }
             
          })
          return ()=>{
            return  unSubscribe();
          }
  },[])

const authInfo={
    user,
    loading,
    createUser,
    googleLog,
    login,
    logOut
}

    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;