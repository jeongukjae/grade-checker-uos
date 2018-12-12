import { createStore } from "redux";

import rootReducer from "./modules";

export default () => {
  const store = createStore(rootReducer);

  return store;
};
