import { configureStore } from "@reduxjs/toolkit";
import useeReducer from "./user/userSlice";

export const store = configureStore({
  reducer: { user: useeReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
