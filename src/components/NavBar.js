import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="Nav">
      <div className="Nav__title">
        Welcome to Michael and Ted's community chat
      </div>
      <button className="Nav__button">
        <div>scroll to bottom</div>
        <div className="Nav__button__holder">
          <div className="Nav__button__holder__mark" >Mark As Read</div>
          <img className="Nav__button__holder__bubble" src="../images/text-bubble.png" alt=""/>
        </div>
      </button>
    </div>
  );
}

export default NavBar;
