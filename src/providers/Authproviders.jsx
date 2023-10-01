/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../components/firebase/Firebase.config";
export const Authcontext = createContext();
const auth = getAuth(app);
const Authproviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoader(false)
        })
        return ()=>{
            return unsubscribe()
          }
    }, [])

    const logout =()=>{
        setLoader(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loader,
        createUser,
        signin,
        logout,
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authproviders;