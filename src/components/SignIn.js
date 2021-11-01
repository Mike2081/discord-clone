import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import Footer from "./Footer.js";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <section>
      <div className="sign-in">
        <h1>Sign in to join the chat</h1>
        <button className="sign-in__button" onClick={signInWithGoogle}>
          Sign in with google
        </button>
      </div>
      <Footer />
    </section>
  );
}

export default SignIn;
