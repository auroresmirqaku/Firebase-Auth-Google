import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDJ-ezqiS5r8qfIhGXZMqeJCdgGlGd4XXc",
  authDomain: "fir-auth-d888f.firebaseapp.com",
  projectId: "fir-auth-d888f",
  storageBucket: "fir-auth-d888f.firebasestorage.app",
  messagingSenderId: "821949062899",
  appId: "1:821949062899:web:23d25b81dcbac154eae186",
  measurementId: "G-002NTMZY74"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app;