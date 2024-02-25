"use client";

import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import { PaletteMode } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Particles from "./components/particles";
import getTheme from "./theme";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import FloatingControls from "./components/FloatingControls";
import Footer from "./components/Footer";

export default function HomePage() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const CustomTheme = getTheme(mode);

  function toggleMode() {
    setMode((previous) => (previous === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      <div
        style={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "inherit",
          overflow: "hidden",
        }}
      >
        <Particles mode={mode} quantity={100} />
        <div id="header-section" />
        <Header mode={mode} />
        <Portfolio />
        <FloatingControls mode={mode} toggleMode={toggleMode} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
