import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: "AIzaSyC-j2FV-B-Z4fus8NF1LfqSNXn2441t-3Q",
  authDomain: "discord-clone-65273.firebaseapp.com",
  projectId: "discord-clone-65273",
  storageBucket: "discord-clone-65273.appspot.com",
  messagingSenderId: "615933350649",
  appId: "1:615933350649:web:7b243a72194f0ef7b0c828",
  measurementId: "G-21VQF4D0G4"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      discord
    </div>
  );
}

export default App;
