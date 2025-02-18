import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Card {
  id: string;
  name: string;
  bankName: string;
  type: "Credit" | "Debit";
  number: string;
  validTill: string;
  cvv: string;
  isDefault: boolean;
  inGPay: boolean;
}

interface CardsState {
  cards: Card[];
}

const initialState: CardsState = {
  cards: [
    {
      id: "1",
      name: "John Doe",
      bankName: "Bank of America",
      type: "Credit",
      number: "1234 5678 9012 3456",
      validTill: "12/2025",
      cvv: "123",
      isDefault: true,
      inGPay: true,
    },
    {
      id: "2",
      name: "Jane Smith",
      bankName: "Chase",
      type: "Debit",
      number: "9876 5432 1098 7654",
      validTill: "05/2024",
      cvv: "456",
      isDefault: false,
      inGPay: false,
    },
    {
      id: "3",
      name: "John Doe",
      bankName: "Bank of America",
      type: "Credit",
      number: "1234 5678 9012 3456",
      validTill: "12/2025",
      cvv: "123",
      isDefault: true,
      inGPay: true,
    },
    {
      id: "4",
      name: "Jane Smith",
      bankName: "Chase",
      type: "Debit",
      number: "9876 5432 1098 7654",
      validTill: "05/2024",
      cvv: "456",
      isDefault: false,
      inGPay: false,
    },
    {
      id: "5",
      name: "John Doe",
      bankName: "Bank of America",
      type: "Credit",
      number: "1234 5678 9012 3456",
      validTill: "12/2025",
      cvv: "123",
      isDefault: true,
      inGPay: true,
    },
    {
      id: "6",
      name: "Jane Smith",
      bankName: "Chase",
      type: "Debit",
      number: "9876 5432 1098 7654",
      validTill: "05/2024",
      cvv: "456",
      isDefault: false,
      inGPay: false,
    },
  ],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    // Other actions...
  },
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
