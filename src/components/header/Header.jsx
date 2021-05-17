import React from "react";

const Header = () => {
  return (
    <header className={"header"}>
      <div className="header__wrap">
        {/*<p className="header__level" />*/}
        <h1 className={"header__title"}>Game Attention </h1>
        <div className="header-box">
          <div className="header-time header-box__item">
            <i className="fa fa-clock-o header-box__icon" aria-hidden="true" />
            <p className="header-time__txt">8</p>
          </div>
          <div className="header-cubes header-box__item">
            <i className="fa fa-cubes header-box__icon" aria-hidden="true" />
            <p className="header-cubes__txt">1/7</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
