import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { screenSlice } from "./screen/screenReducer";
import { recordLogs } from "./middlewares/recordLogs";

const rootReducer = combineReducers({
  screen: screenSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recordLogs),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export default { store };