// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZgvY-KnyGEl44ydpCn_m53KBMAeyd7NE",
  authDomain: "react-contest-project.firebaseapp.com",
  projectId: "react-contest-project",
  storageBucket: "react-contest-project.appspot.com",
  messagingSenderId: "975992737274",
  appId: "1:975992737274:web:cee201338486dcddc2a843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;