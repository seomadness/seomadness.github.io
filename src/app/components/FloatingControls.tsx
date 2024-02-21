"use client";

import Box from "@mui/material/Box";
import { PaletteMode } from "@mui/material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import SettingsBrightness from "@mui/icons-material/SettingsBrightness";
import VerticalAlignTop from "@mui/icons-material/VerticalAlignTop";

interface FloatingControlsProps {
  mode: PaletteMode;
  toggleMode: () => void;
  //   scrollToTop: () => void;
}

function FloatingControls({ mode, toggleMode }: FloatingControlsProps) {
  function scrollToTop() {
    const topElement = document.getElementById("header");
    if (topElement) {
      const topTarget = topElement.offsetTop;
      topElement?.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: topTarget,
        behavior: "smooth",
      });
    }
  }

  return (
    <Box
      sx={{
        right: 24,
        bottom: 24,
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "right",
        // width: "100dvw",
      }}
    >
      <ToggleButtonGroup
        aria-label="FloatingControls"
        orientation="vertical"
        color="primary"
        sx={{ backgroundColor: "background.default" }}
      >
        <ToggleButton value onClick={toggleMode}>
          <SettingsBrightness sx={{ fontSize: "24px" }} />
        </ToggleButton>
        <ToggleButton value onClick={scrollToTop}>
          <VerticalAlignTop sx={{ fontSize: "24px" }} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default FloatingControls;
