import React from "react";
import "../styles/SideBar.css";
import LogOut from "./LogOut";
import { auth } from "./firebase";

function SideBar(props) {
  const { displayName } = auth.currentUser;

  return (
    <div className="SideBar">
      <div className="SideBar__projectInfo">
        <h1 className="SideBar__project_name">MintCord</h1>
        <p className="SideBar__project__desc">Kinda like discord, but janky</p>
      </div>
      <h2 className="SideBar__devsTitle">Project Developers</h2>
      <div className="SideBar__devs">
        <div className="SideBar__logos">
          <img
            className="SideBar__devsBox__ProPic"
            src="../images/profile.jpg"
            alt="computer cartoon guy"
          />

          <div>Michael</div>
          <a
            href="https://www.instagram.com/doh0/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="SideBar__logos__icons"
              src="../images/Instagram.svg"
              alt="instagram logo"
            />
          </a>
          <a
            href="https://github.com/Mike2081"
            target="_blank"
            rel="noreferrer"
          >
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
        <div className="SideBar__logos">
          <img
            className="SideBar__devsBox__ProPic"
            src="../images/ted.jpg"
            alt="my ugly face"
          />
          <div>Ted</div>
          <a
            href="https://github.com/ted-dino"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="SideBar__logos__icons"
              src="../images/GitHub.svg"
              alt="instagram logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ted-dino-967305222/"
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
      </div>

      <div>Signed in as:</div>
      <div className="SideBar__user">{displayName}</div>
      <LogOut />
    </div>
  );
}

export default SideBar;
