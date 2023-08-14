// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC819WoYi7D7kGHw2IJdBdO3DPfwCXmdI4",
  authDomain: "social-media-d1985.firebaseapp.com",
  projectId: "social-media-d1985",
  storageBucket: "social-media-d1985.appspot.com",
  messagingSenderId: "762399762451",
  appId: "1:762399762451:web:5a245af8e0f44bdf6af7e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;