import "../styles/NavBar.css";
import React, { useState, useEffect, } from "react";
import { dataBase } from "./firebase";


function NavBar() {
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
     dataBase
       .collection("msgs")
       .orderBy("createdAt")
       .onSnapshot((snapshot) => {
         setMsgs(snapshot.docs.map((doc) => doc.data()));
       });
   }, []);

  return (
    <div className="Nav">
      <div className="Nav__title">
        Welcome to Michael and Ted's community chat
      </div>
      <div className="Nav__chat">Total Chat Messages: {msgs.length}</div>
    </div>
  );
}

export default NavBar;
