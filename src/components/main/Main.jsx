import React from "react";
import CubeItem from "./item/CubeItem";
import { useDispatch, useSelector } from "react-redux";
import {droppingNewLvl, gameOver, isOpenModal, nextLevel} from "../../store/actions/gameActions";

const Main = () => {
  const dispatch = useDispatch();
  const { cubes, randomCubes, cubesClicked, lvl } = useSelector(
    (state) => state.gameReducer
  );
  const width = useSelector((state) => state.gameReducer.gameLevel[lvl].width);

  React.useEffect(() => {
    if (randomCubes.length === cubesClicked.length && cubesClicked.length > 0) {
      const strRandomCubes = randomCubes.join("");
      const strCubesClicked = cubesClicked.join("");

      dispatch(isOpenModal(true));
      dispatch(droppingNewLvl());

      if ( strRandomCubes === strCubesClicked){
        dispatch(nextLevel());
      } else{
        dispatch(gameOver());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cubesClicked]);

  return (
    <main className={"main"}>
      <div className="main__wrap" style={{maxWidth: width}}>
        {cubes.map((elem) => (
          <CubeItem
            key={elem.id}
            randomActive={elem.randomActive}
            cubeInfo={elem}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
