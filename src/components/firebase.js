import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARhl2Ma31E04GrdEdSAPkIVwa_hSp0d7k",
  authDomain: "disney-clone-app-e89a4.firebaseapp.com",
  projectId: "disney-clone-app-e89a4",
  storageBucket: "disney-clone-app-e89a4.firebasestorage.appspot.com",
  messagingSenderId: "730595557831",
  appId: "1:730595557831:web:4b45f485f8e26c8b4ed9e2",
  measurementId: "G-ZMQN4C8EGY",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, storage };
export { db, collection };
export default db;
