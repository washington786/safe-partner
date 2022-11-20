import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD_72SEQlWZ1XWa_fwDbMcVBYZhPn-UE1o",
  authDomain: "safe-partner.firebaseapp.com",
  projectId: "safe-partner",
  storageBucket: "safe-partner.appspot.com",
  messagingSenderId: "106659668975",
  appId: "1:106659668975:web:1a773063cea4e6a4d5cc1a",
  measurementId: "G-BEWE7TFWCM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {auth, firestore,storage};