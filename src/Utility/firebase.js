import { initializeApp } from "firebase/app";
//authentication
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlmBB6CzvxyMQAhCwvlMZ3Z5CO5_USCDw",
  authDomain: "clone-1dfe7.firebaseapp.com",
  projectId: "clone-1dfe7",
  storageBucket: "clone-1dfe7.firebasestorage.app",
  messagingSenderId: "1080758121444",
  appId: "1:1080758121444:web:d2a3f8d011a54133ee8df1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 