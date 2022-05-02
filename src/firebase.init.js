// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaI-iLAIuJNN0TiEx4GSIdM1OTRb8SraQ",
    authDomain: "warehouse-6cfa1.firebaseapp.com",
    projectId: "warehouse-6cfa1",
    storageBucket: "warehouse-6cfa1.appspot.com",
    messagingSenderId: "242101017872",
    appId: "1:242101017872:web:698ed04ef34784ea6a9995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;