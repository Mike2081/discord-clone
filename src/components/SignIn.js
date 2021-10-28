import React from 'react'
import firebase from 'firebase'
import {auth} from '../firebase.js'

function SignIn() {

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <div>
            <button onClick={signInWithGoogle} >Sign in with google</button>
        </div>
    )
}

export default SignIn
