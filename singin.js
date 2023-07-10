  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDnQAk5ONtVrlVukJNA1ah4dt0kZVCpzBk",
    authDomain: "save-be155.firebaseapp.com",
    projectId: "save-be155",
    storageBucket: "save-be155.appspot.com",
    messagingSenderId: "863459774933",
    appId: "1:863459774933:web:a3f93c5c1e9c547212ad5c",
    measurementId: "G-RJZGW4XBQG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
document.getElementById("btn").addEventListener('click', () => {
     let email = document.getElementById("email").value;
     let password = document.getElementById("password").value;
    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const user = userCredential.user;
      if(user.emailVerified == true){
        alert("SING IN SUCCESSFULLY");
        window.location.href = './quiz.html'
    }else{
        alert("Please verified Your Email!");
    }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("sing up is first")
        window.location.href = './singup.html'
    });
})

