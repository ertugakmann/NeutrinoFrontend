import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rentals: [],
};

export const rentalSlice = createSlice({
  name: "rentalSaver",
  initialState,
  reducers: {
    addRental: (state, action) => {
      return {
        ...state,
        rentals: [...state.rentals, action.payload],
      };
    },
  },
});

export const { addRental } = rentalSlice.actions;

export default rentalSlice.reducer;
