import React, { useState, useEffect, useRef } from "react";
import { dataBase } from "../firebase";
import LogOut from "./LogOut";
import SendText from "./SendText";

function Chat() {
  const scroll = useRef()
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    dataBase
      .collection("msgs")
      .orderBy("createdAt")
      .limit(15)
      .onSnapshot((snapshot) => {
        setMsgs(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <LogOut />
      {msgs.map(({ id, text, photoURL }) => (
        <div key={id}>
          <img src={photoURL} alt="profile pic" />
          <p>{text}</p>
        </div>
      ))}
      <SendText scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
