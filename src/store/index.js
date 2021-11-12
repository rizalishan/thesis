import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import allReducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer);
let persistor = persistStore(store);

export default {
  store,
  persistor,
};
