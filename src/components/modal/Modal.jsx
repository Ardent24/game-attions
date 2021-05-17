import React from "react";
import ReactModal from "react-modal";
import './modal.css'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "20rem",
    width: "100%",
  },
};

const Modal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={closeModal}
      style={customStyles}
      // className="modal"
      overlayClassName="modal-background"
    >
      <p>Modal text!</p>
      <button onClick={closeModal}>OK</button>
    </ReactModal>
  );
};

export default Modal;
