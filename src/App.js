import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

// add auth from firebase
const auth = getAuth(app);


function App() {
  //set a state--------------------------
  const [user, setUser] = useState({});

  // google provider call 
  const provider = new GoogleAuthProvider();

  // for sign IN----------------
  const handleGoogleSignIn = () => {
    // when click a button
    // for a pop up menu 
    signInWithPopup(auth, provider)
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
        user.email ? <button onClick={handleSingOut} > Sign Out</button>
          :
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
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
