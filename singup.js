// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnQAk5ONtVrlVukJNA1ah4dt0kZVCpzBk",
  authDomain: "save-be155.firebaseapp.com",
  projectId: "save-be155",
  storageBucket: "save-be155.appspot.com",
  messagingSenderId: "863459774933",
  appId: "1:863459774933:web:a3f93c5c1e9c547212ad5c",
  measurementId: "G-RJZGW4XBQG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
document.getElementById("btn").addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = './singin.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
