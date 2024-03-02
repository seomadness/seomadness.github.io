import * as React from "react";
import Dashboard from "./Dashboard";
import RemoteDevice from "./RemoteDevice";
import Reservation from "./Reservation";
import AccountManagement from "./AccountManagement";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function PortfolioDetails({
  index,
}: {
  index: number | undefined;
}) {
  if (index)
    return (
      <Container
        id="portfolio-details"
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          my: { xs: 6, sm: 10 },
          zIndex: 999,
        }}
      >
        <Box
          component="div"
          id="portfolio-section"
          sx={{
            width: "100%",
            display: "flex",
            textAlign: "left",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            p: 1.5,
            gap: 1,
          }}
        >
          {index === 1 && <Dashboard />}
          {index === 2 && <RemoteDevice />}
          {index === 3 && <Reservation />}
          {index === 4 && <AccountManagement />}
        </Box>
      </Container>
    );
  else return;
}
