import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./slices/user";
import GameReducer from "./slices/game";

export const makeStore = () => {
  return configureStore({
    reducer: { user: UserReducer, game: GameReducer },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
