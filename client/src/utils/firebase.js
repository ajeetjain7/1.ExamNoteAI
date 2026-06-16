
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-e2c1a.firebaseapp.com",
  projectId: "authexamnotes-e2c1a",
  storageBucket: "authexamnotes-e2c1a.firebasestorage.app",
  messagingSenderId: "905719391880",
  appId: "1:905719391880:web:b8d6d7233a5c901de1213d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}