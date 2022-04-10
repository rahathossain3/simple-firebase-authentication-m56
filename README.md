# Getting Started with Create React App with firebase



 ## steps to use firebase
 * 1. create a project on console.firebase.google.com
 * 2. install firebase
 * 3. Register web app in firebase
 * 4. copy firebase init with config from firebase project settings
 * 5. 
    
 ###  4. code example: 

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBYLSrS5LAlAbENP_vZf5Rh7n7IkN2Djqs",
        authDomain: "simple-firebase-authenti-37651.firebaseapp.com",
        projectId: "simple-firebase-authenti-37651",
        storageBucket: "simple-firebase-authenti-37651.appspot.com",
        messagingSenderId: "501374866030",
        appId: "1:501374866030:web:8b41af17ff5987c540cc7f"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


    export default app;


 * 
 