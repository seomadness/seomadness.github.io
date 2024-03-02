"use client";

import React, { useEffect, useState } from "react";
import { lazy } from "react";
import { styled } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { PaletteMode } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { useAppDispatch, useAppSelector } from "util/hooks";
import { toggleTheme } from "store/themeSlice";
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

export default function HomePage() {
  const theme = useAppSelector((state) => state.theme.themeMode);
  const dispatch = useAppDispatch();

  const [loaded, setLoaded] = useState<boolean>(false);

  const CustomTheme = getTheme(theme as PaletteMode);

  useEffect(function () {
    const loaded = document.readyState == "complete";
    setLoaded(loaded);
  }, []);

  function toggleMode() {
    dispatch(toggleTheme());
  }

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
        <FloatingControls toggleMode={toggleMode} />
        <Footer />
      </Background>
    </ThemeProvider>
  );
}
