import { createStore } from "redux";
import { enhancerStore } from "./debugger";
import { rootReducer } from "./rootReducer";

export const store = createStore(rootReducer, enhancerStore)


store.subscribe(() => {});
