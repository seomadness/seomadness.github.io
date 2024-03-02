import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers.
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
