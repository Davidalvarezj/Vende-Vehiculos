// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXPwtHn6W4d2DXRctWCOsKxB81qN1IcIc",
  authDomain: "vendevehiculos.firebaseapp.com",
  projectId: "vendevehiculos",
  storageBucket: "vendevehiculos.appspot.com",
  messagingSenderId: "168747017984",
  appId: "1:168747017984:web:89c5b6bfea47cf46f175e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
