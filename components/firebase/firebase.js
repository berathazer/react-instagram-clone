import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz5PpQEM4xVnIfpNQTfnzXlF3WjDlhWsQ",
  authDomain: "instagram-clone-eeeb3.firebaseapp.com",
  projectId: "instagram-clone-eeeb3",
  storageBucket: "instagram-clone-eeeb3.appspot.com",
  messagingSenderId: "986391767564",
  appId: "1:986391767564:web:6ae9d5bdd269890776dc29",
  measurementId: "G-EHMTGZJL9M",
};



const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db= getFirestore(app);

export default db;
export{app,auth};