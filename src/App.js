import React from "react";

import "./styles/app.css";

import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";



function App() {
  return (
    <div className="game-layout">
      <Header />
      <Main />
      <Modal />
    </div>
  );
}

export default App;
