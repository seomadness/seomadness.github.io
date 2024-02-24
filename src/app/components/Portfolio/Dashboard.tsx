import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ReadableStack } from "./Portfolio";
import Stack from "@mui/material/Stack";
import dashboardFinal from "../../../images/portfolio/dashboard-final-data.png";
import dashboardMasonary from "../../../images/portfolio/dashboard-original-masonary.png";
import dashboardMasonary1728 from "../../../images/portfolio/dashboard-original-masonary-1728.png";

export default function Dashboard() {
  return (
    <Grid container id="dashboard" sx={{ mt: { xs: 1, sm: 2 } }}>
      <ReadableStack spacing={4} direction={"column"}>
        <Typography variant="h4">Core Dashboard</Typography>
        <Typography variant="body1" sx={{ textDecoration: "underline" }}>
          Illustrations are recreated from the original design as visual aids
          and sensitive contents have been redacted for Non-Disclosure Agreement
          purposes.
        </Typography>
      </ReadableStack>

      <Grid
        container
        item
        id="original-dashboard"
        direction={"row"}
        spacing={1}
        my={5}
        // sx={}
      >
        <Grid item xs={12} sm={12} md={4}>
          <Stack spacing={2}>
            <Typography variant="h6" color="text.secondary">
              Problem
            </Typography>
            <Typography variant="body1" color="text.primary">
              The original core-product dashboard was designed in a masonry
              layout (commonly referred to as the Pinterest Style Layout) to
              accommodate content that the core-product and bridged-products'
              capabilities asynchronously render. The problem was easily
              identifiable as active items would shift to the shortest column
              and automatically reposition when individual content synchronized.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4} id="original-dashboard-image-1">
          <Image
            src={dashboardMasonary}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="account management discovery"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} id="original-dashboard-images">
          <Image
            src={dashboardMasonary1728}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="account management research synthesis"
            loading="lazy"
          />
        </Grid>
      </Grid>

      <Stack my={4} spacing={0} direction={"row"}>
        <Stack spacing={2} direction={"column"} sx={{ mt: 3 }}>
          <Typography variant="h6" color="text.secondary">
            Conclusion
          </Typography>
          <Typography variant="body1" color="text.primary"></Typography>
          <Typography variant="body1" color="text.primary"></Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}
