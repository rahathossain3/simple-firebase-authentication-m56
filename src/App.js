import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

// add auth from firebase
const auth = getAuth(app);


function App() {
  //set a state--------------------------
  const [user, setUser] = useState({});

  // google provider call 
  const googleProvider = new GoogleAuthProvider();
  // github provider
  const githubProvider = new GithubAuthProvider();
  // facebook provider
  const facebookProvider = new FacebookAuthProvider();


  // for google sign IN----------------
  const handleGoogleSignIn = () => {
    // when click a button
    // for a pop up menu 
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        //set user-------------------------
        setUser(user);

        console.log(user);
      })

      // for catch error
      .catch(error => {
        console.error('error', error);
      })
  }


  // github sign in-----------------
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })

      .catch(error => {
        console.error(error);
      })
  }

  //facebook sign in
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch(error => {
        console.error(error);
      })
  }



  // google sign Out-------------

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        // condition ? true : false
        //conditional rendering -------------
        user.uid ? <button onClick={handleSingOut} > Sign Out</button>
          :
          <>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>

            <button onClick={handleFacebookSignIn}>Facebook sign In</button>

            <button onClick={handleGithubSignIn} >Github signUp</button>
          </>

      }

      {/* <button onClick={handleGoogleSignIn}>Google Sign In</button>

      <button onClick={handleSingOut} > Sign Out</button> */}

      <h2>Name: {user.displayName}</h2>
      <p>I know your email address: {user.email} </p>
      <img src={user.photoURL} alt="" />


    </div>
  );
}

export default App;
