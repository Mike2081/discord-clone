import React from 'react'
import { auth } from './firebase.js'

function LogOut() {
    return (
        <div>
            <button onClick = {() => auth.signOut()} >Log out</button>
        </div>
    )
}

export default LogOut
