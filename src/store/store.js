import { createStore } from "redux";
import { enhancerStore } from "./debugger";
import { rootReducer } from "./rootReducer";
import { isOpenModal } from "./actions/gameActions";

export const store = createStore(rootReducer, enhancerStore);

store.dispatch(isOpenModal(true));
