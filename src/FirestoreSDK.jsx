// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

let db = false;

export default function getDb(){

    if (!db){

        const firebaseConfig = {
                apiKey: "AIzaSyDmS9hqBw690RAzUfxaaTmmFeMY1sD8xxs",
                authDomain: "wemerchandise-61a94.firebaseapp.com",
                projectId: "wemerchandise-61a94",
                storageBucket: "wemerchandise-61a94.firebasestorage.app",
                messagingSenderId: "554767208381",
                appId: "1:554767208381:web:db169f6be959870e8a8cd4",
                measurementId: "G-5QFYS10X6B"
        };
  
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
            console.log('Analytics :', analytics);
            db = getFirestore(app);
    }
  return db;
}