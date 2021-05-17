import { combineReducers } from "redux";

import {cubesReducer} from "./reducers/cubesReducer";

export const rootReducer = combineReducers({
    cubes: cubesReducer
});