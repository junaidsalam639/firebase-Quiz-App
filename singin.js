import { auth , app , db } from './firebase.mjs'
import { signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

import { onSnapshot , doc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

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

async function abc(){
  const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
    console.log("Current data: ", doc.data());
});
}

abc();
