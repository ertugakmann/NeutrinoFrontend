import { configureStore } from "@reduxjs/toolkit";
import rentalSlice from "./features/rentals/rentalSlice";

export const store = configureStore({
  reducer: { rentals: rentalSlice },
});

export default store;
