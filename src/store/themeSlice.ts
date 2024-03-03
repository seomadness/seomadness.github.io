import { createSlice } from "@reduxjs/toolkit";

// export function getFromLocalStorage() {
//   if (typeof window !== "undefined")
//     if (window.localStorage.getItem("theme"))
//       return window.localStorage.getItem("theme")!;
//   return "light";
// }

const initialState = {
  mode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    hydrate: (state, action) => {
      // state = action.payload will not update the store
      return action.payload;
    },
    toggleTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers.
      state.mode = state.mode === "light" ? "dark" : "light";
      // window.localStorage.setItem("theme", state.mode);
    },
  },
});

// Action creators are generated for each case reducer function
export const { hydrate, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
