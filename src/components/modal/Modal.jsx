import React from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  createRandomId,
  createStateCubes,
  editRandomAttr,
  endFrame,
  isOpenModal,
  startFrame,
} from "../../store/actions/gameActions";

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
    display: "flex",
    flexDirection: "column",
  },
};

const Modal = () => {
  const { cubes, randomCubes, lvl, openModal, isGameOver } = useSelector(
    (state) => state.gameReducer
  );
  const { level, modalTitle, numberCubes, numberRandomCubes } = useSelector(
    (state) => state.gameReducer.gameLevel[lvl]
  );
  const dispatch = useDispatch();

  //CREATE CUBES AND RANDOM CUBES
  React.useEffect(() => {
    if (!openModal) {
      dispatch(startFrame());
      dispatch(createStateCubes(numberCubes));
      dispatch(createRandomId(numberRandomCubes, numberCubes));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

  //PUSH ANIMATE ACTIVE CUBES
  React.useEffect(() => {
    if (!openModal) {
      animateActiveCubes(cubes, randomCubes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomCubes]);

  const animateActiveCubes = (cubes, randomCubes) => {
    let count = 0;
    const to = randomCubes.length;

    setTimeout(function time() {
      count++;

      const id = randomCubes[count - 1];
      dispatch(editRandomAttr(id));

      if (count < to) {
        setTimeout(time, 1500);
      } else {
        dispatch(endFrame());
      }
    }, 750);
  };

  const isCloseModal = () => {
    dispatch(isOpenModal(false));
  };

  return (
    <ReactModal
      isOpen={openModal}
      style={customStyles}
      overlayClassName="modal-background"
      ariaHideApp={false}
    >
      {!isGameOver && (
        <>
          <h3 className={"modal-title"}> {modalTitle}</h3>
          <h5 className={"modal-txt"}>Уровень: {level}</h5>
          <button onClick={isCloseModal} className={"modal-btn"}>
            OK
          </button>
        </>
      )}
      {isGameOver && (
        <>
          <h2 className={"modal-title"} style={{textAlign: "center"}}>Ты занубил Братан!</h2>
        </>
      )}
    </ReactModal>
  );
};

export default Modal;
