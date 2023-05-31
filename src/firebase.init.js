// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWpbAp8B0dRt01U9AI8XyMXi3MkT0ahqY",
  authDomain: "ema-john-simple-c4812.firebaseapp.com",
  projectId: "ema-john-simple-c4812",
  storageBucket: "ema-john-simple-c4812.appspot.com",
  messagingSenderId: "986117297509",
  appId: "1:986117297509:web:dd83930947dac6a0c3bd8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;