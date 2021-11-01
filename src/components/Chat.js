import React, { useState, useEffect } from "react";
import { dataBase } from "../firebase";
import LogOut from "./Logout";
import SendText from "./SendText";

function Chat() {
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
      <SendText />
    </div>
  );
}

export default Chat;
