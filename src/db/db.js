// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX7Sl1rkLGOeVewpjucRS376gR0MfCR5Q",
  authDomain: "digistore-stevellewellyn.firebaseapp.com",
  projectId: "digistore-stevellewellyn",
  storageBucket: "digistore-stevellewellyn.appspot.com",
  messagingSenderId: "593636827390",
  appId: "1:593636827390:web:890963ce7aca4c08c585af"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db