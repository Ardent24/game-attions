import { createSlice } from "@reduxjs/toolkit";

import { generateCubes } from "../../modules/generateCubes";
import { generateRandom } from "../../modules/generateRandom";

const gameReducer = createSlice({
  name: "gameReducer",
  initialState: {
    firstGame: false,
    openModal: true,
    isGameOver: false,
    cubes: [],
    randomCubes: [],
    cubesClicked: [],
    lvl: 0,
    blockedCubes: false,
    gameLevel: [
      {
        level: 1,
        numberCubes: 4,
        numberRandomCubes: 2,
        width: "500px",
        modalTitle:
          "Привет касатик! Сейчас мы с тобой поиграем! Тебе надо запомнить порядок мигающих кубиков, и на" +
          " них нажать мышкой, в этом же порядке",
      },
      {
        level: 2,
        numberCubes: 4,
        numberRandomCubes: 3,
        width: "500px",
        modalTitle: "Красавчик, погнали на новый уровень!",
      },
      {
        level: 3,
        numberCubes: 9,
        numberRandomCubes: 3,
        width: "600px",
        modalTitle: "Уже лучше!",
      },
      {
        level: 4,
        numberCubes: 9,
        numberRandomCubes: 4,
        width: "600px",
        modalTitle: "Ты очень внимательный!",
      },
      {
        level: 5,
        numberCubes: 12,
        numberRandomCubes: 4,
        width: "800px",
        modalTitle: "Продолжаем в том же духе!",
      },
      {
        level: 6,
        numberCubes: 12,
        numberRandomCubes: 6,
        width: "800px",
        modalTitle: "Харош-харош!",
      },
      {
        level: 7,
        numberCubes: 16,
        numberRandomCubes: 6,
        width: "800px",
        modalTitle: "Харош-харош!",
      },
      {
        level: 8,
        numberCubes: 16,
        numberRandomCubes: 8,
        width: "800px",
        modalTitle: "Харош-харош!",
      },
    ],
  },
  reducers: {
    createStateCubes(state, action) {
      state.cubes = generateCubes(action.payload);
    },
    createRandomId(state, action) {
      const { numberRandomCubes, numberCubes } = action.payload;
      state.randomCubes = generateRandom(numberRandomCubes, numberCubes);
    },
    addCubeClick(state, action) {
      state.cubesClicked.push(action.payload);
    },
    editRandomAttr(state, action) {
      const lastStateCubes = [...state.cubes];
      const id = action.payload;

      lastStateCubes[id]["randomActive"] = true;
      state.cubes = lastStateCubes;
    },
    startFrame(state) {
      state.blockedCubes = true;
    },
    endFrame(state) {
      state.blockedCubes = false;
    },
    gameOver(state) {
      state.lvl = 0;
      state.isGameOver = true;
    },
    nextLevel(state) {
      state.lvl++;
    },
    isOpenModal(state, action) {
      state.openModal = action.payload;
    },
    droppingNewLvl(state) {
      state.cubes = [];
      state.randomCubes = [];
      state.cubesClicked = [];
    },
    isFirstGame(state, action) {
      state.firstGame = action.payload;
    },
  },
});

export default gameReducer.reducer;

export const {
  createStateCubes,
  createRandomId,
  isFirstGame,
  droppingNewLvl,
  isOpenModal,
  nextLevel,
  gameOver,
  endFrame,
  startFrame,
  editRandomAttr,
  addCubeClick,
} = gameReducer.actions;
