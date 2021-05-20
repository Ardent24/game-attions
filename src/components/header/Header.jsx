import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import localStorage from "store";

const Header = () => {
  const { lvl, firstGame } = useSelector((state) => state.gameReducer);
  const { level, numberRandomCubes } = useSelector(
    (state) => state.gameReducer.gameLevel[lvl]
  );
  const loadedName = localStorage.get("name");
  const [name, setName] = React.useState(loadedName);

  useEffect(() => {
    if (!firstGame) setName(loadedName);
  }, [firstGame, loadedName]);

  return (
    <header className="header">
      <div className="header__wrap">
        <h1 className="header__title">Game Attention</h1>
        <div className="header-box">
          <div className="header-box__item">
            <i className="fa fa-gamepad header-box__icon" aria-hidden="true" />
            <p className="header-time__txt">{name}</p>
          </div>
          <div className="header-box__item">
            <i className="fa fa-trophy header-box__icon" aria-hidden="true" />
            <p className="header-cubes__txt">{level}</p>
          </div>
          <div className="header-box__item">
            <i className="fa fa-cubes header-box__icon" aria-hidden="true" />
            <p className="header-cubes__txt">{numberRandomCubes}/8</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
