import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

interface modeState {
  mode: PaletteMode;
}

const initialState: modeState = {
  mode: "light",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
