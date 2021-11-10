import React, { useState, useEffect, useRef } from "react";
import { dataBase } from "./firebase";
import NavBar from "./NavBar";
import SendText from "./SendText";
import "../styles/Chat.css";
import SideBar from "./SideBar";

function Chat() {
  const scroll = useRef();
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    dataBase
      .collection("msgs")
      .orderBy("createdAt")
      .limit(100)
      .onSnapshot((snapshot) => {
        setMsgs(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="chat">
      <div className="chat__container">
        <SideBar />
        <div>
          <NavBar />
          <div className="chat__container__TopDummyDiv"></div>
          {msgs.map(({ id, text, photoURL, displayName }) => (
            <div className="chat__container__uProfile" key={id}>
              <img
                className="chat__container__uProfile__bubblePic"
                src={photoURL}
                alt="profile pic"
              />
              <div className="chat__container__uProfile__textBox">
                <div className="chat__container__uProfile__textBox__name">
                  {displayName}
                </div>
                <div className="chat__container__uProfile__textBox__text">
                  {text}
                </div>
              </div>
            </div>
          ))}
          <SendText scroll={scroll} />
          <div className="chat__container__BotDummyDiv" ref={scroll}></div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
