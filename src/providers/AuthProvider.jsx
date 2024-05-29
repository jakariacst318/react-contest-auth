import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOUt = () =>{
        return signOut(auth);
    }

 //  observe auth state change 
    useEffect(() =>{
     const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('hello observing cunnet user !!!!!!!!', currentUser)
        });

        return () =>{
            unSubscribe();
        }
    },[])

   
    const authInfo = { 
        user, 
        createUser, 
        signInUser,
        logOUt
    
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}