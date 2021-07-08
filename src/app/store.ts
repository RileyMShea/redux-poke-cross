import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";

import { pokemonApi } from "../services/pokemon";

const reducers = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export function makeStore() {
  return configureStore({
    reducer: reducers,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      // Chain concat to avoid type information loss
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
