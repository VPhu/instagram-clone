import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALYTLFbTbwsLRpY0Cpl_uMkkjco_jpK-0",
  authDomain: "instagram-clone-7d850.firebaseapp.com",
  projectId: "instagram-clone-7d850",
  storageBucket: "instagram-clone-7d850.appspot.com",
  messagingSenderId: "670444449975",
  appId: "1:670444449975:web:f27324c54d6ca144b89d32",
  measurementId: "G-E8Y37NHELP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
