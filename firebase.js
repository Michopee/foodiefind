 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
 import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js"
 
 const firebaseConfig = {
  apiKey: "AIzaSyC__uzgFPlg7uoWagqtLeSHGjpjm9iJXQI",
  authDomain: "foodiefind-48783.firebaseapp.com",
  projectId: "foodiefind-48783",
  storageBucket: "foodiefind-48783.firebasestorage.app",
  messagingSenderId: "466745259547",
  appId: "1:466745259547:web:73f6d2dfbd08ccce646abe",
  measurementId: "G-HYTTXZRZJM"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

<<<<<<< HEAD
 function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }
 const signUp=document.getElementById('btn');
 if(signup){ 
    signUp.addEventListener('click', 
    (event)=>{ 
        event.preventDefault();
        const email=document.getElementById('email').value; 
        const password=document.getElementById('password').value; 
        const firstName=document.getElementById('fname').value; 
        const lastName=document.getElementById('lname').value; 

        const auth=getAuth(); 
        const db=getFirestore(); 

        createUserWithEmailAndPassword(auth, email, password) 
        .then((userCredential)=>{ 
            const user=userCredential.user; 
            const userData={ 
                email: email, 
                firstName: firstName, 
                lastName:lastName 
            }; 
            showMessage('Account Created Successfully, please Login to continue', 
            'signUpMessage'); 
                const docRef=doc(db, "users", user.uid); 
                setDoc(docRef,userData) 
                .then(()=>{ 
                    setTimeout(() => { 
                        window.location.href="login.html"; 
                    }, 3000); 
                }) 
                .catch((error)=>{ 
                    console.error("error writing document", error); 
                }); 
            })
             .catch((error)=>{ 
                const errorCode=error.code; 
                if(errorCode=='auth/email-already-in-use'){ 
                    showMessage('Email Address Already Exists !!!', 'signUpMessage'); 
                } 
                else{ 
                    showMessage('unable to create User', 'signUpMessage'); 
                } 
            }) 
        }); 
    }
 //signUp.addEventListener('click', (event)=>{
   // event.preventDefault();
    //const email=document.getElementById('email').value;
  //  const password=document.getElementById('password').value;
   // const firstName=document.getElementById('fname').value;
  //  const lastName=document.getElementById('lname').value;

    //const auth=getAuth();
    //const db=getFirestore();

    //createUserWithEmailAndPassword(auth, email, password)
    //.then((userCredential)=>{
      //  const user=userCredential.user;
        //const userData={
          //  email: email,
            //firstName: firstName,
            //lastName:lastName
        //};
        //showMessage('Account Created Successfully, please Login to continue', 'signUpMessage');
        //const docRef=doc(db, "users", user.uid);
        //setDoc(docRef,userData)
        //.then(()=>{
          //  setTimeout(() => {
            //window.location.href="login.html";
            //}, 3000);
        //})
        //.catch((error)=>{
          //  console.error("error writing document", error);
        //});
    //})
    //.catch((error)=>{
      //  const errorCode=error.code;
        //if(errorCode=='auth/email-already-in-use'){
          //  showMessage('Email Address Already Exists !!!', 'signUpMessage');
        //}
        //else{
          //  showMessage('unable to create User', 'signUpMessage');
        //}
    //})
 //});


const signIn=document.getElementById('loginn');
 signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const auth=getAuth();
=======
 function showMessage(message, divId) {
  const messageDiv = document.getElementById(divId);

  if (!messageDiv) {
      console.warn(`Element with id '${divId}' not found`);
      return;
  }

  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;

  setTimeout(() => {
      messageDiv.style.opacity = 0;
  }, 5000);
}
 const signUp=document.getElementById('btn');
 if (signUp) {
    signUp.addEventListener('click', (event)=>{
        event.preventDefault();
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value;
        const firstName=document.getElementById('fname').value;
        const lastName=document.getElementById('lname').value;
    
        const auth=getAuth();
        const db=getFirestore();
    
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user=userCredential.user;
            const userData={
                email: email,
                firstName: firstName,
                lastName:lastName
            };
            showMessage('Account Created Successfully, please Login to continue', 'signUpMessage');
            const docRef=doc(db, "users", user.uid);
            setDoc(docRef,userData)
            .then(()=>{
                setTimeout(() => {
                window.location.href="login.html";
                }, 3000);
            })
            .catch((error)=>{
                console.error("error writing document", error);
            });
        })
        .catch((error)=>{
            const errorCode=error.code;
            if(errorCode=='auth/email-already-in-use'){
                showMessage('Email Address Already Exists !!!', 'signUpMessage');
            }
            else{
                showMessage('unable to create User', 'signUpMessage');
            }
        })
     });
 }
>>>>>>> FoodBranch

 const signIn=document.querySelector('#loginn');
 if (signIn) {
    signIn.addEventListener("click", (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const auth = getAuth();
  
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          showMessage("login is successful", "signInMessage");
          const user = userCredential.user;
          localStorage.setItem("loggedInUserId", user.uid);
          window.location.href="community.html";
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/invalid-credential") {
            showMessage("Incorrect Email or Password", "signInMessage");
          } else {
            showMessage("Account does not Exist", "signInMessage");
          }
        });
    });
  }