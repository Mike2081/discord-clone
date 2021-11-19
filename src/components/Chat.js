import React, { useState, useEffect, useRef } from "react";
import { dataBase } from "./firebase";
import NavBar from "./NavBar";
import SendText from "./SendText";
import "../styles/Chat.css";
import SideBar from "./SideBar";

function Chat() {
  const scroll = useRef();
  const [msgs, setMsgs] = useState([]);
  const [limitMessages, setLimitMessages] = useState(10);

  const scrollToBottom = () => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadMore = () => {
    setLimitMessages(limitMessages + 10);
  };

  useEffect(() => {
    dataBase
      .collection("msgs")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        setMsgs(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="chat">
      <div className="chat__container">
        <SideBar />
        <div className="chat__container__box">
          <NavBar />
          {/* <button className="chat__container__box__button" onClick={scrollToBottom}>
            <div>scroll to new message</div>
            <div className="chat__container__box__button__holder">
              <div className="chat__container__box__button__holder__mark" >Mark As Read</div>
              <img className="chat__container__box__button__holder__bubble" src="../images/text-bubble.png" alt=""/>
            </div>
          </button> */}
          <div className="chat__container__box__TopDummyDiv"></div>
          <button className="chat__container__box__LoadMsgs" onClick={loadMore}>
            Load More Messages...
          </button>
          {msgs
            .slice(msgs.length - limitMessages, msgs.length)
            .map(({ id, text, photoURL, displayName, createdAt }) => (
              <div className="chat__container__box__uProfile" key={id}>
                <img
                  className="chat__container__box__uProfile__bubblePic"
                  src={photoURL}
                  alt="profile pic"
                />
                <div className="chat__container__box__uProfile__textBox">
                  <div className="chat__container__box__uProfile__textBox__wrap">
                    <div className="chat__container__box__uProfile__textBox__wrap__name">
                      {displayName}
                    </div>
                    <div className="chat__container__box__uProfile__textBox__wrap__time">
                      {new Date(createdAt?.toDate())
                        .toLocaleString()
                        .replace(/(.*)\D\d+/, "$1")}
                    </div>
                  </div>
                  <div className="chat__container__box__uProfile__textBox__text">
                    {text}
                  </div>
                </div>
              </div>
            ))}
          <SendText scroll={scroll} />
          <div className="chat__container__box__BotDummyDiv" ref={scroll}></div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
