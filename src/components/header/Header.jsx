import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const lvl = useSelector((state) => state.gameReducer.lvl);
  const { level, numberRandomCubes } = useSelector(
    (state) => state.gameReducer.gameLevel[lvl]
  );



  return (
    <header className={"header"}>
      <div className="header__wrap">
        <h1 className={"header__title"}>Game Attention </h1>
        <div className="header-box">
          <div className="header-box__item">
            <i className="fa fa-star-o header-box__icon" aria-hidden="true" />
            <p className="header-cubes__txt">{level}</p>
          </div>
          {/*<div className="header-box__item">*/}
          {/*  <i className="fa fa-clock-o header-box__icon" aria-hidden="true" />*/}
          {/*  <p className="header-time__txt">8</p>*/}
          {/*</div>*/}
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
