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
                apiKey: import.meta.env.GOOGLE_FIRESTORE_API,
                authDomain: import.meta.env.GOOGLE_AUTHDOMAIN,
                projectId: import.meta.env.GOOGLE_PROJECTID,
                storageBucket: import.meta.env.GOOGLE_STORAGEBUCKET,
                messagingSenderId: import.meta.env.MESSAGESENDERID,
                appId: import.meta.env.APPID,
                measurementId: import.meta.env.MEASUREMENTID
        };
  
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
            console.log('Analytics :', analytics);
            db = getFirestore(app);
    }
  return db;
}