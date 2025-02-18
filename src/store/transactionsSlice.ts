import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Transaction {
  id: string;
  description: string;
  date: string;
  amount: number;
  type: "debit" | "credit";
}

interface TransactionsState {
  transactions: Transaction[];
}

const initialState: TransactionsState = {
  transactions: [
    {
      id: "1",
      description: "Buy Groceries",
      date: "2025-02-10",
      amount: -50,
      type: "debit",
    },
    {
      id: "2",
      description: "Paycheck",
      date: "2025-02-09",
      amount: 1500,
      type: "credit",
    },
    {
      id: "3",
      description: "Buy Electronics",
      date: "2025-02-08",
      amount: -300,
      type: "debit",
    },
  ],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    // Other actions...
  },
});

// Ensure you export the reducer as default
export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
