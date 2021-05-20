import React from "react";
import PropTypes from "prop-types";

const BasicContent = ({ modalTitle, level, isCloseModal }) => {
  return (
    <>
      <h3 className="modal-title"> {modalTitle}</h3>
      <h5 className="modal-txt">Уровень: {level}</h5>
      <button onClick={isCloseModal} className="modal-btn">
        OK
      </button>
    </>
  );
};

BasicContent.propTypes = {
  isCloseModal: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  modalTitle: PropTypes.string.isRequired,
};

export default BasicContent;
