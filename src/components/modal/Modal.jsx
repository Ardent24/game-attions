import React from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  createRandomId,
  createStateCubes,
  isFirstGame,
  isOpenModal,
  startFrame,
} from "../../store/toolkitRedux/gameReducer";
import BasicContent from "./content/BasicContent";
import GameOverContent from "./content/GameOverContent";
import FirstContent from "./content/FirstContent";

const stylesModal = {
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
  const { lvl, openModal, isGameOver, firstGame } = useSelector(
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
      dispatch(createRandomId({ numberRandomCubes, numberCubes }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

  const isCloseModal = () => {
    dispatch(isOpenModal(false));
    if (firstGame) {
      dispatch(isFirstGame(false));
      dispatch(isOpenModal(true));
    }
  };

  const templateContentModal = () => {
    if (firstGame) {
      return <FirstContent isCloseModal={isCloseModal} />;
    }
    if (isGameOver && !firstGame) {
      return <GameOverContent />;
    }
    if (!isGameOver && !firstGame) {
      return (
        <BasicContent
          level={level}
          modalTitle={modalTitle}
          isCloseModal={isCloseModal}
        />
      );
    }
  };

  return (
    <ReactModal
      isOpen={openModal}
      style={stylesModal}
      overlayClassName="modal-background"
      ariaHideApp={false}
    >
      {templateContentModal()}
    </ReactModal>
  );
};

export default Modal;
