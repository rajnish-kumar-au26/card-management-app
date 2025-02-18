import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardsSlice";
import transactionsReducer from "./transactionsSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
