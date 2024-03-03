import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Loading() {
  return (
    <Box
      id="loading-container"
      sx={{
        display: "flex",
        margin: "auto",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearProgress sx={{ width: "50%" }} />
    </Box>
  );
}
