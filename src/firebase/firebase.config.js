import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBw6Uwnuc0Ns8flKiR2GrcbanRN3bcaMjU",
  authDomain: "coffee-store-ff463.firebaseapp.com",
  projectId: "coffee-store-ff463",
  storageBucket: "coffee-store-ff463.appspot.com",
  messagingSenderId: "302665302836",
  appId: "1:302665302836:web:e07ad433138bdd7e609b61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
