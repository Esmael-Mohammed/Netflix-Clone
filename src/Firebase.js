import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrkuyXvxdX3Om_LkFc3_pkzC8X8nht3IU",
  authDomain: "netflix-clone-84d9a.firebaseapp.com",
  projectId: "netflix-clone-84d9a",
  storageBucket: "netflix-clone-84d9a.firebasestorage.app",
  messagingSenderId: "507597729159",
  appId: "1:507597729159:web:d0d6832ac32a60e446b722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)
const signup=async(name,email,password)=>{
    try {
        const res= await createUserWithEmailAndPassword(auth,email,password)
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join())
    }

}
const login=async(email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join())
    }
}
const logout=()=>{
    signOut(auth)
}
export {auth,db,login,signup,logout};