"use client";

import type {} from "@mui/material/themeCssVarsAugmentation";
import { ThemeOptions, alpha, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}
}

export const primary = {
  50: "#ffffff",
  100: "#c5cbe8",
  200: "#9faad8",
  300: "#7988c8",
  400: "#5c6ebd",
  500: "#3e55b1",
  600: "#384da8",
  700: "#2f439c",
  800: "#27398f",
  900: "#19277a",
};

export const secondary = {
  50: "#dff4f5",
  100: "#c4dfdd",
  200: "#a5c8c6",
  300: "#86b0af",
  400: "#6d9d9c",
  500: "#548b8a",
  600: "#497b7a",
  700: "#3b6665",
  800: "#2d5252",
  900: "#1c3d3d",
};

export const red = {
  50: "#f9e3e6",
  100: "#f1b9c0",
  200: "#e78d97",
  300: "#da6371",
  400: "#d04956",
  500: "#c6383f",
  600: "#b7333e",
  700: "#a32d3b",
  800: "#8f2738",
  900: "#6c1e32",
};

export const gray = {
  50: "#FBFCFE",
  100: "#EAF0F5",
  200: "#D6E2EB",
  300: "#BFCCD9",
  400: "#94A6B8",
  500: "#5B6B7C",
  600: "#4C5967",
  700: "#364049",
  800: "#131B20",
  900: "#090E10",
};

const customTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      light: primary[200],
      main: primary[500],
      dark: primary[800],
      contrastText: primary[50],
      ...(mode === "dark" && {
        contrastText: primary[50],
        light: primary[50],
        main: primary[200],
        dark: primary[800],
      }),
    },

    secondary: {
      light: secondary[200],
      main: secondary[500],
      dark: secondary[800],
      ...(mode === "dark" && {
        light: secondary[200],
        main: secondary[500],
        dark: secondary[900],
      }),
    },
    background: {
      default: "#fff",
      paper: gray[50],
      ...(mode === "dark" && { default: gray[900], paper: gray[800] }),
    },
    text: {
      primary: gray[800],
      secondary: gray[600],
      ...(mode === "dark" && { primary: "#fff", secondary: gray[400] }),
    },
    action: {
      selected: `${alpha(primary[200], 0.2)}`,
      ...(mode === "dark" && {
        selected: alpha(primary[800], 0.2),
      }),
    },
  },
  typography: {
    fontFamily: "IBM Plex Sans",
    fontsize: 14,
    h1: {
      fontSize: 120,
      fontWeight: 600,
      lineHeight: 78 / 70,
      letterSpacing: -0.2,
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 42,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: 15,
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: 14,
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },
  },
});

export default function getTheme(mode: PaletteMode): ThemeOptions {
  const palette = customTheme(mode);

  const theme = createTheme({
    ...palette,
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            subtitle1: "p",
            subtitle2: "p",
          },
        },
      },
    },
  });

  return theme;
}
