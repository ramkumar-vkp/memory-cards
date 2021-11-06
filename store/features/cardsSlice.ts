import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardType {
  sightWords: string[];
  numbers: number[];
  alphabets: string[];
}
const initialState: CardType = {
  sightWords: [
    "by",
    "my",
    "for",
    "and",
    "can",
    "see",
    "big",
    "red",
    "how",
    "why",
  ],
  numbers: [16, 40, 23, 14, 8, 18, 25, 38],
  alphabets: [
    "Nn",
    "Oo",
    "Pp",
    "Qq",
    "Rr",
    "Ss",
    "Tt",
    "Uu",
    "Vv",
    "Ww",
    "Xx",
    "Yy",
    "Zz",
  ],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<string>) => {
      state.sightWords.push(action.payload);
    },
  },
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
