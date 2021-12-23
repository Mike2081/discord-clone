import React from "react";
import "../styles/SideBar.css";
import LogOut from "./LogOut";
import { auth } from "./firebase";
import styled from 'styled-components'

const PicContainer = styled.img`
  border-radius: 50%;
  height: auto;
  width: 4rem;
`;

function SideBar() {
  const { displayName, photoURL } = auth.currentUser;

  return (
    <div className="SideBar">
      <div className="SideBar__Heading">MichaelCord</div>
      <div className="SideBar__subHead">Kinda like discord, but with my twist</div>
      <div className="SideBar__devsTitle">Project Developer</div>

      <div className="SideBar__logos">
        <img
          className="SideBar__devsBox__ProPic"
          src="../images/profile.jpg"
          alt="computer cartoon guy"
        />

        <div>Michael</div>
        <a href="https://github.com/Mike2081" target="_blank" rel="noreferrer">
          <img
            className="SideBar__logos__icons"
            src="../images/GitHub.svg"
            alt="instagram logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/michaeldoho/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="SideBar__logos__icons"
            src="../images/LinkedIn.svg"
            alt="instagram logo"
          />
        </a>
      </div>
      <div>Signed in as:</div>
      <div className="SideBar__user">{displayName}</div>
      <PicContainer
        src={photoURL}
      />
      <LogOut />
    </div>
  );
}

export default SideBar;
