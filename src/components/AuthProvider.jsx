import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";




export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();

    const registerUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        
    }
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const fbLogin = () =>{
        return signInWithPopup(auth, fbProvider)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        registerUser,
        loginUser,
        user,
        setUser,
        googleLogin,
        fbLogin,
        logOut
    }

    //manage users
    useEffect (() =>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              
              setUser(currentUser)
              
            } else {
                setUser(null)
              
            }
          });
          return () =>{
            unSubscribe()
          }

    }, [])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;