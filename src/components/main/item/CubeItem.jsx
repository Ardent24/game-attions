import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCubeClick } from "../../../store/toolkitRedux/gameReducer";

const CubeItem = ({ randomActive, cubeInfo: { id } }) => {
  const dispatch = useDispatch();
  const disabledCubes = useSelector((state) => state.gameReducer.blockedCubes);

  const [initialClass, setInitialClass] = React.useState("main__item");

  React.useEffect(() => {
    if (randomActive) {
      setInitialClass(`${initialClass} active`);
      setTimeout(() => {
        setInitialClass(`${initialClass}`);
      }, 750);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomActive]);

  function isClkCube(ev) {
    if (randomActive) {
      ev.target.classList.add("click");
    } else {
      ev.target.classList.add("miss");
    }

    dispatch(addCubeClick(id));
  }

  return (
    <button
      className={initialClass}
      data-random={randomActive}
      disabled={disabledCubes}
      onClick={isClkCube}
    />
  );
};

export default CubeItem;
