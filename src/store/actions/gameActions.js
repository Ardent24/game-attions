import {
  CREATE_STATE_CUBES,
  CREATE_RANDOM_ID,
  START_FRAME,
  ADD_CUBE_CLICK,
  EDIT_RANDOM_ATTR,
  END_FRAME,
  NEXT_LEVEL,
  GAME_OVER,
  IS_OPEN_MODAL,
  DROPPING_NEW_LVL,
  FIRST_GAME
} from "./types";

export const createStateCubes = (num) => ({
  type: CREATE_STATE_CUBES,
  payload: num,
});

export const createRandomId = (random, max) => ({
  type: CREATE_RANDOM_ID,
  payloadRandom: random,
  payloadMax: max,
});

export const startFrame = () => ({
  type: START_FRAME,
});

export const endFrame = () => ({
  type: END_FRAME,
});

export const addCubeClick = (id) => ({
  type: ADD_CUBE_CLICK,
  payload: id,
});

export const editRandomAttr = (id) => ({
  type: EDIT_RANDOM_ATTR,
  payload: id,
});

export const nextLevel = () => ({
  type: NEXT_LEVEL,
});

export const gameOver = () => ({
  type: GAME_OVER,
});

export const isOpenModal = (bool) => ({
  type: IS_OPEN_MODAL,
  payload: bool,
});

export const droppingNewLvl = () => ({
  type: DROPPING_NEW_LVL,
});

export const isFirstGame = (bool) => ({
  type: FIRST_GAME,
  payload: bool
})
