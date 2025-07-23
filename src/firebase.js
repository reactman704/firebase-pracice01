// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCspQBeiV2Hmef4RFCdIbtV031w6QK8tw8",
  authDomain: "fir-test-project-29df4.firebaseapp.com",
  projectId: "fir-test-project-29df4",
  storageBucket: "fir-test-project-29df4.firebasestorage.app",
  messagingSenderId: "98575488266",
  appId: "1:98575488266:web:b21c59179fe858d0fe96f3",
  measurementId: "G-NJ60DTFV0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;