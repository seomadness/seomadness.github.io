"use client";

import Box from "@mui/material/Box";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import SettingsBrightness from "@mui/icons-material/SettingsBrightness";
import GridViewIcon from "@mui/icons-material/GridView";
import VerticalAlignTop from "@mui/icons-material/VerticalAlignTop";

interface FloatingControlsProps {
  toggleMode: () => void;
}

function FloatingControls({ toggleMode }: FloatingControlsProps) {
  function scrollTo(idElement: string) {
    const topElement = document.getElementById(idElement);
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
        top: "50%",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "right",
        zIndex: 999,
      }}
    >
      <ToggleButtonGroup
        aria-label="FloatingControls"
        orientation="vertical"
        color="primary"
        sx={{ backgroundColor: "background.default" }}
      >
        <ToggleButton value onClick={toggleMode} aria-label="toggle theme mode">
          <SettingsBrightness sx={{ fontSize: "24px" }} />
        </ToggleButton>
        <ToggleButton
          value
          onClick={() => scrollTo("portfolio-list")}
          aria-label="view portfolio"
        >
          <GridViewIcon sx={{ fontSize: "24px" }} />
        </ToggleButton>
        <ToggleButton
          value
          onClick={() => scrollTo("header-section")}
          aria-label="scroll to top"
        >
          <VerticalAlignTop sx={{ fontSize: "24px" }} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default FloatingControls;
