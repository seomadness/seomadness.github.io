import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ReadableStack } from "./Portfolio";
import Stack from "@mui/material/Stack";
import reservation from "images/portfolio/reservation.png";
import reservationFiltered from "images/portfolio/reservation-filtered.png";

export default function Reservation() {
  return (
    <Grid container id="device-reservation" sx={{ mt: { xs: 1, sm: 2 } }}>
      <ReadableStack>
        <Typography variant="h4">Remote Device Interaction</Typography>
        <Typography variant="body2">
          Client: Service Product Developers
        </Typography>

        <Stack spacing={2} direction={"column"}>
          <Typography variant="h6" color="text.secondary">
            Background
          </Typography>
          <Typography variant="body1" color="text.primary">
            Our service product developers require a holistic platform to test
            their products on different operating systems prior to deployment.
          </Typography>
        </Stack>

        <Stack spacing={2} direction={"column"}>
          <Typography variant="h6" color="text.secondary">
            Responsibilities
          </Typography>
          <Typography variant="body1" color="text.primary">
            Collaborated with internal product developers and product managers
            to gather feature requests and technical requirements.
          </Typography>
          <Typography variant="body1" color="text.primary">
            Communicated product visions with all stakeholders to ensure the
            platform support of all product teams.
          </Typography>
          <Typography variant="body1" color="text.primary">
            Created research synthesis to prioritize features for our MVP and
            high-fidelity user interface prototypes to communicate with the
            team.
          </Typography>
          <Typography variant="body1" color="text.primary">
            Designed, developed and maintained the front-end using Next.js,
            React TS, and gRPC.
          </Typography>
        </Stack>
      </ReadableStack>

      <Stack mt={4} mb={5} spacing={0} direction={"column"}>
        <Image
          src={reservation}
          width={0}
          height={0}
          sizes="(max-width: 700px) 100vw"
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
          alt="create device reservation"
          loading="lazy"
        />
      </Stack>
      <Stack mt={4} mb={5} spacing={0} direction={"column"}>
        <Image
          src={reservationFiltered}
          width={0}
          height={0}
          sizes="(max-width: 700px) 100vw"
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
          alt="filter devices for reservation"
          loading="lazy"
        />
      </Stack>
    </Grid>
  );
}
