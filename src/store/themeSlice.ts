import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("theme") || null;

const initialState = {
  themeMode: storedTheme || "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers.
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.themeMode);
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
