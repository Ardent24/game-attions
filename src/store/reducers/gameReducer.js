import {
  CREATE_STATE_CUBES,
  CREATE_RANDOM_ID,
  START_FRAME,
  ADD_CUBE_CLICK,
  EDIT_RANDOM_ATTR,
  END_FRAME,
  GAME_OVER,
  NEXT_LEVEL,
  IS_OPEN_MODAL,
  DROPPING_NEW_LVL,
} from "../actions/types";

import { generateCubes } from "../../modules/generateCubes";
import { generateRandom } from "../../modules/generateRandom";

const initialState = {
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
      modalTitle: "Привет касатик! Сейчас мы с тобой поиграем!",
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
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STATE_CUBES:
      return {
        ...state,
        cubes: generateCubes(action.payload),
      };
    case CREATE_RANDOM_ID:
      const random = action.payloadRandom;
      const max = action.payloadMax;

      return {
        ...state,
        randomCubes: generateRandom(random, max),
      };
    case ADD_CUBE_CLICK:
      const arrayClicked = [...state.cubesClicked];
      arrayClicked.push(action.payload);
      return {
        ...state,
        cubesClicked: arrayClicked,
      };
    case EDIT_RANDOM_ATTR:
      const lastStateCubes = [...state.cubes];
      const id = action.payload;

      lastStateCubes[id]["randomActive"] = true;

      return {
        ...state,
        cubes: lastStateCubes,
      };
    case START_FRAME:
      return {
        ...state,
        blockedCubes: true,
      };
    case END_FRAME:
      return {
        ...state,
        blockedCubes: false,
      };
    case GAME_OVER:
      return {
        ...state,
        lvl: 0,
        isGameOver: true,
      };
    case NEXT_LEVEL:
      return {
        ...state,
        lvl: state.lvl + 1,
      };
    case IS_OPEN_MODAL:
      return {
        ...state,
        openModal: action.payload,
      };
    case DROPPING_NEW_LVL:
      return {
        ...state,
        cubes: [],
        randomCubes: [],
        cubesClicked: [],
      };
    default:
      return state;
  }
};
