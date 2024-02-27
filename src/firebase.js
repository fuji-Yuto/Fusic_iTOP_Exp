// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC3n_HFyX7Q2xAUxCtKRDB6GGhGtsHDGI",
  authDomain: "itopsci-expmgr.firebaseapp.com",
  projectId: "itopsci-expmgr",
  storageBucket: "itopsci-expmgr.appspot.com",
  messagingSenderId: "82138881044",
  appId: "1:82138881044:web:55426ba169850fa2149b01",
  measurementId: "G-F483L60HHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;