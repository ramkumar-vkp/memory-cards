import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardType {
  sightWords: string[];
  numbers: number[];
  alphabets: string[];
}
const initialState: CardType = {
  sightWords: [],
  numbers: [],
  alphabets: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addSightWords: (state, action: PayloadAction<string[]>) => {
      state.sightWords = action.payload;
    },
    addNumbers: (state, action: PayloadAction<number[]>) => {
      state.numbers = action.payload;
    },
    addAlphabets: (state, action: PayloadAction<string[]>) => {
      state.alphabets = action.payload;
    },
  },
});

export const { addSightWords, addNumbers, addAlphabets } = cardsSlice.actions;
export default cardsSlice.reducer;
