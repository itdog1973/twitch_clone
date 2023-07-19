import { PaletteMode } from "@mui/material";

const colorTokens = {
  grey: {
    1: "#0e0e10",
    2: "#18181b",
    3: "#1f1f23",
    4: "#26262c",
    5: "#323239",
    6: "#3b3b44",
    7: "#53535f",
    8: "#848494",
    9: "#adadb8",
    10: "#c8c8d0",
    11: "#d3d3d9",
    12: "#dedee3",
    13: "#e6e6ea",
    14: "#efeff1",
    15: "#f7f7f8",
  },
  primary: {
    1: "#040109",
    2: "#0d031c",
    3: "#15052e",
    4: "#24094e",
    5: "#330c6e",
    6: "#451093",
    7: "#5c16c5",
    8: "#772ce8",
    9: "#9147ff",
    10: "#a970ff",
    11: "#bf94ff",
    12: "#d1b3ff",
    13: "#e3d1ff",
    14: "#ede0ff",
    15: "#f3ebff",
  },
};

export const themeSetting = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            dark: colorTokens.primary[8],
            main: colorTokens.primary[9],
            light: colorTokens.primary[10],
          },
          secondary: {
            dark: colorTokens.grey[1],
            main: colorTokens.grey[2],
            mediumMain: colorTokens.grey[3],
            medium: colorTokens.grey[4],
            light: colorTokens.grey[5],
          },
          background: {
            default: colorTokens.grey[2],
            paper: colorTokens.grey[3],
          },
        }
      : {
          primary: {
            dark: colorTokens.primary[8],
            main: colorTokens.primary[9],
            light: colorTokens.primary[10],
          },
          secondary: {
            dark: colorTokens.grey[10],
            main: colorTokens.grey[11],
            mediumMain: colorTokens.grey[12],
            medium: colorTokens.grey[13],
            light: colorTokens.grey[14],
          },
          background: {
            default: colorTokens.grey[15],
            paper: colorTokens.grey[14],
          },
        }),
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
