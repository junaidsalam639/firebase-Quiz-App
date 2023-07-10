  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth , signInWithEmailAndPassword , GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  
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
  const provider = new GoogleAuthProvider();
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

// SING IN WITH GOOGLE
document.getElementById("google").addEventListener('click' , (e) => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    alert("SING IN SUCCESSFULLY");
        window.location.href = './quiz.html'
   
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  
})

