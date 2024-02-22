"use client";

import * as React from "react";
import { PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Header({ mode }: { mode: PaletteMode }) {
  return (
    <Box
      id="main"
      sx={(theme) => ({
        width: "100%",
        backgroundColor: "background.palette",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ width: { xs: "100%", sm: "70%" }, zIndex: 99 }}
        >
          <Typography
            component="span"
            variant="h1"
            textAlign="center"
            fontWeight="bold"
            sx={{
              mt: 16,
              color: (theme) =>
                theme.palette.mode === "light"
                  ? "primary.main"
                  : "primary.light",
            }}
          >
            Hello
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{
              textShadow:
                mode === "light" ? "#FFF 1px 1px 10px;" : "#000 1px 1px 10px;",
            }}
          >
            I work at the intersection of ui/ux design and development.
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{
              textShadow:
                mode === "light" ? "#FFF 1px 1px 10px;" : "#000 1px 1px 10px;",
            }}
          >
            Currently based in the Washington metropolitan area.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
