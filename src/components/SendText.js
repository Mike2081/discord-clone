import React, {useState} from 'react'
import { database, auth } from '../firebase'
import { dataBase } from '../firebase'
import firebase from 'firebase/compat/app';

function SendText() {
    const [text, setText] = useState('')

    async function sendMsg(e) {
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser

        await dataBase.collection('msgs').add({
           text: text,
           photoURL,
           uid,
           createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setText('')
    }
    return (
        <div>
            <form onSubmit={sendMsg}>
                <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Type a message' />
                <button type ='submit' >Send</button>
            </form>
        </div>
    )
}

export default SendText
