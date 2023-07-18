import {app , auth , db } from './firebase.mjs'
  import { createUserWithEmailAndPassword , sendEmailVerification} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  
  import { collection , addDoc} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
  
  
  document.getElementById("btn").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let lname = document.getElementById("lname").value;
  let number = document.getElementById("number").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(name,lname,number,email,password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("SING UP SUCCESFULLY")
      sendEmailVerification(auth.currentUser)
        .then(async() => {
          alert("Email Sent Check Your Gmail!");
          
          try {
            const docRef = await addDoc(collection(db, "users"), {
              name: name,
              lname: lname,
              number: number,
              age: age,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

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
