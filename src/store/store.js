import { createStore } from "redux";
import { enhancerStore } from "./debugger";
import { rootReducer } from "./rootReducer";
import {
  isOpenModal,
  isFirstGame,
  createStateCubes,
  createRandomId,
} from "./actions/gameActions";
import localStorage from "store";

export const store = createStore(rootReducer, enhancerStore);

store.dispatch(isOpenModal(true));

const loadedName = localStorage.get("name");

const state = store.getState();
const { numberRandomCubes, numberCubes } = state.gameReducer.gameLevel[0];

store.dispatch(createStateCubes(numberCubes));
store.dispatch(createRandomId(numberRandomCubes, numberCubes));
if (!loadedName) store.dispatch(isFirstGame(true));
