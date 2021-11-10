import React from "react";
import "../styles/SideBar.css";
import LogOut from "./Logout";

function SideBar(props) {
  return (
    <div className="SideBar">
      <img
        className="SideBar__ProPic"
        src="../images/testimage.png"
        alt="computer cartoon guy"
      />
      <LogOut />
    </div>
  );
}

export default SideBar;
