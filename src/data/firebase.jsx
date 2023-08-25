import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOGDzSiA9puS8Pkh4xRJvOzMWKciv1jag",
  authDomain: "fir-crud-ca3c9.firebaseapp.com",
  projectId: "fir-crud-ca3c9",
  storageBucket: "fir-crud-ca3c9.appspot.com",
  messagingSenderId: "788590614326",
  appId: "1:788590614326:web:ecd5fee80f4b7afad94597"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};

