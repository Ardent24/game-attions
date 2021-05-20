import React from "react";
import localStorage from "store";
import PropTypes from "prop-types";

const FirstContent = ({ isCloseModal }) => {
  const onChangeName = (ev) => localStorage.set("name", ev.target.value);

  return (
    <>
      <h1 className="modal-title"> Твоё имя касатик?</h1>
      <input type="text" className="modal-inp" onBlur={onChangeName} />
      <button className="modal-btn" onClick={isCloseModal}>
        OK
      </button>
    </>
  );
};

FirstContent.propTypes = {
  isCloseModal: PropTypes.func.isRequired,
};

export default FirstContent;
