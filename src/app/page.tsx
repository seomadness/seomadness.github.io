"use client";

import React, { useEffect, useState, Suspense } from "react";
import Loading from "./components/Loading";
import { lazy } from "react";
import ThemeContextProvider from "../util/hooks/themeContext";
import { useThemeMode } from "../util/hooks/themeContext";
import { styled } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { PaletteMode } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import getTheme from "./theme";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import FloatingControls from "./components/FloatingControls";
import Footer from "./components/Footer";

const ContainedParticles = lazy(
  () => import("./components/containedParticles")
);

const Background = styled("div")(({ theme }) => ({
  position: "absolute",
  zIndex: -99,
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "inherit",
  overflow: "hidden",
}));

function MainContent() {
  const [themeMode] = useThemeMode();

  const CustomTheme = React.useMemo(() => {
    return getTheme(themeMode as PaletteMode);
  }, [themeMode]);

  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      <Background>
        <ContainedParticles quantity={250} id="large-particles" />
        <ContainedParticles quantity={150} id="small-particles" />
        <div id="header-section" />
        <Header />
        <div id="portfolio-list" />
        <Portfolio />
        <FloatingControls />
        <Footer />
      </Background>
    </ThemeProvider>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeContextProvider>
        <MainContent />
      </ThemeContextProvider>
    </Suspense>
  );
}
