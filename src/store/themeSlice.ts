import { createSlice } from "@reduxjs/toolkit";

let storedTheme = "light";

if (typeof window !== "undefined")
  if (localStorage.getItem("theme"))
    storedTheme = localStorage.getItem("theme")!;

const initialState = {
  themeMode: storedTheme,
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
