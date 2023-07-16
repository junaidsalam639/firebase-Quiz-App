// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth, createUserWithEmailAndPassword, sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAYdVEk6oaTKqbcxZsC8yMzjm0UeHGK0tw",
  authDomain: "user-9d4be.firebaseapp.com",
  projectId: "user-9d4be",
  storageBucket: "user-9d4be.appspot.com",
  messagingSenderId: "999250386518",
  appId: "1:999250386518:web:af204579fe0c34131ee5f7",
  measurementId: "G-VCP3ZRZR58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
document.getElementById("btn").addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("SING UP SUCCESFULLY")
      sendEmailVerification(auth.currentUser)
        .then(() => {
          alert("Email Sent Check Your Gmail!");
        });

      const user = userCredential.user;
      setTimeout(() => {
        window.location.href = './singin.html'
      }, 8000);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
