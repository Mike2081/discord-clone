import React from "react";
import { auth } from "./firebase.js";
import Modal from "react-modal";
import "../styles/LogOut.css";

Modal.setAppElement("#root");

function LogOut() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="logout-button" onClick={openModal}>
        Log Out
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Log Out Modal"
        className="logoutModal"
      >
        <h2 className="logoutModal__title">
          Are you sure you want to log out?
        </h2>
        <button className="logoutModal__button" onClick={() => auth.signOut()}>
          Log out
        </button>
        <button className="logoutModal__button" onClick={closeModal}>
          Cancel
        </button>
      </Modal>
    </div>
  );
}
export default LogOut;
