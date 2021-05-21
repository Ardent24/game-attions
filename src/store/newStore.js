import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import gameReducer, {createRandomId, createStateCubes, isFirstGame, isOpenModal} from "./toolkitRedux/gameReducer";
import localStorage from "store";

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => "#139BFE",
    prevState: () => "#1C5FAF",
    action: () => "#149945",
    nextState: () => "#A47104",
    error: () => "#ff0005",
  },
});
const rootReducer = combineReducers({
  gameReducer: gameReducer,
});

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }).concat(logger),
  devTools: true,
  reducer: rootReducer,
});


store.dispatch(isOpenModal(true));

const loadedName = localStorage.get("name");

const state = store.getState();
const { numberRandomCubes, numberCubes } = state.gameReducer.gameLevel[0];

store.dispatch(createStateCubes(numberCubes));
store.dispatch(createRandomId({ numberRandomCubes, numberCubes }));
if (!loadedName) store.dispatch(isFirstGame(true));
