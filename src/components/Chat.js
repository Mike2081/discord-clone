import React, { useState, useEffect, useRef } from "react";
import { dataBase } from "./firebase";
import NavBar from "./NavBar";
import SendText from "./SendText";
import '../styles/Chat.css';


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
    <div className ='chat'>
      <NavBar />
      <div className='chat__dummyDiv'></div>
      {msgs.map(({ id, text, photoURL, displayName }) => (
        <div className='chat__uProfile' key={id}>
          <img className='chat__uProfile__bubblePic' src={photoURL} alt="profile pic" />
          <div className='chat__uProfile__textBox'>
            <div className='chat__uProfile__textBox__name'>{displayName}</div>
            <div>{text}</div>
          </div>
        </div>
      ))}
      <SendText scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
