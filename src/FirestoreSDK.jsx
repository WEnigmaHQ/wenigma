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

  const APIKEY = 'AIzaSyDmS9hqBw690RAzUfxaaTmmFeMY1sD8xxs'
  const AUTHDOMAIN='wemerchandise-61a94.firebaseapp.com'
  const PROJECTID='wemerchandise-61a94'
  const STORAGEBUCKET='wemerchandise-61a94.firebasestorage.app'
  const MESSENGERSENDERID='554767208381'
  const APPID='1:554767208381:web:db169f6be959870e8a8cd4'
  const MEASUREID='G-5QFYS10X6B'

    if (!db){

        const firebaseConfig = {
                apiKey: APIKEY,
                authDomain: AUTHDOMAIN,
                projectId: PROJECTID,
                storageBucket: STORAGEBUCKET,
                messagingSenderId: MESSENGERSENDERID,
                appId: APPID,
                measurementId: MEASUREID
        };
  
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
            console.log('Analytics :', analytics);
            db = getFirestore(app);
    }
  return db;
}