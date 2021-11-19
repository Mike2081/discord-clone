import React, { useState } from "react";
import { auth } from "./firebase";
import { dataBase } from "./firebase";
import firebase from "firebase/compat/app";
import "../styles/SendText.css";

function SendText({ scroll }) {
  const [text, setText] = useState("");

  async function sendMsg(e) {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;

    await dataBase.collection("msgs").add({
      text: text,
      photoURL,
      uid,
      displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setText("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="TextBar">
      <form className="TextBar__TextContainer" onSubmit={sendMsg}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message here!"
        />
        <button className="TextBar__TextContainer__SendBut" type="submit">
          Send
        </button>
        <p className="TextBar__TextContainer__warning">
          Be kind :] Swearing/inappropriate messages or spamming with get you
          permanently banned.{" "}
        </p>
      </form>
    </div>
  );
}

export default SendText;
