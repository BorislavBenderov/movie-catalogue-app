import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYZQR6X0NbVdJX5gTgYqEXLoNi63f46jk",
  authDomain: "movie-catalogue-app-c78a5.firebaseapp.com",
  projectId: "movie-catalogue-app-c78a5",
  storageBucket: "movie-catalogue-app-c78a5.appspot.com",
  messagingSenderId: "558946804375",
  appId: "1:558946804375:web:e762cd5fb0b3e3a8033fd2"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore();
export const auth = getAuth();