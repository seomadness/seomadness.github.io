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
    <Grid
      container
      id="device-reservation"
      sx={{ mt: { xs: 1, sm: 2 }, width: "100%" }}
    >
      <ReadableStack>
        <Typography variant="h4">Reservation System</Typography>
        <Typography variant="body1">
          Client: Service Product Developers
          <br />
          <u>
            Sensitive materials have been redacted for Non-Disclosure Agreement
            purposes.
          </u>
        </Typography>

        <Stack spacing={2} direction={"column"}>
          <Typography variant="h6" color="text.secondary">
            Background
          </Typography>
          <Typography variant="body1" color="text.primary">
            Our service product developers require a holistic platform to test
            their products on different operating systems and device variants
            prior to deployment. As service products increase in complexity and
            market devices continue to release OS updates, it is crucial to
            maintain a viable production for targeted devices, monitor and
            optimize performance, and remediate code vulnerabilities.
          </Typography>
          <Typography variant="body1" color="text.primary">
            The device reservation system is a simple user flow that enables
            developers to filter for high-interest devices using predetermined
            device properties and reservation status. Reservation allows all
            stakeholders to exclusively build, debug and continuously test their
            products by remotely accessing real devices.
          </Typography>
        </Stack>

        <Stack spacing={2} direction={"column"}>
          <Typography variant="h6" color="text.secondary">
            Responsibilities
          </Typography>
          <Typography variant="body1" color="text.primary">
            Collaborated with internal developers and managers to gather feature
            requests and technical requirements to ensure the platform supports
            all product teams and operating systems.
          </Typography>
          <Typography variant="body1" color="text.primary">
            Communicated product visions with all stakeholders to ensure the
            platform is sustainable for continuous deployment in an air-gapped
            environment.
          </Typography>
          <Typography variant="body1" color="text.primary">
            Created research synthesis to prioritize feature requests for our
            MVP and designed high-fidelity prototypes to communicate with the
            team.
          </Typography>
          <Typography variant="body1" color="text.primary">
            <b>Primarily</b> designed, developed, and maintained the front-end
            using Next.js, React TS, and gRPC-Web.
          </Typography>
        </Stack>

        <Stack spacing={3} direction={"column"} mb={{ sm: 5, md: 0 }}>
          <Typography variant="h6" color="text.secondary">
            Outcomes
          </Typography>
          <div>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="text.secondary"
            >
              Guaranteed Real Devices
            </Typography>
            <Typography variant="body1" color="text.primary">
              With reserved devices, developers and QA testers can build and
              test products without interference during device interaction
              sessions.
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="text.secondary"
            >
              Decrease Waiting Time with Reservation
            </Typography>
            <Typography variant="body1" color="text.primary">
              Reserving in advance allows developers to have immediate access to
              real devices.
            </Typography>
          </div>
        </Stack>

        <Grid container item id="reservation-images">
          <Grid item xs={6} sm={12}>
            <Image
              src={reservation}
              width={0}
              height={0}
              sizes="(max-width: 700px) 100vw"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              alt="create device reservation"
              loading="lazy"
            />
            <Typography
              variant="caption"
              fontStyle={"italic"}
              color="text.secondary"
            >
              Create Reservation Process
            </Typography>
          </Grid>

          <ReadableStack mt={5} mb={2}>
            <Typography variant="body1" color="text.primary">
              Developers and QA testers can reserve devices for immediate or
              future use. Creating a reservation is an intuitive process of
              filtering by device properties and reservation status, and
              selecting a reservation time and duration. Triggering the filter
              fields will instantly fetch results and refresh the table data.
            </Typography>
          </ReadableStack>

          <Grid item xs={6} sm={12} mt={4} mb={5}>
            <Image
              src={reservationFiltered}
              width={0}
              height={0}
              sizes="(max-width: 700px) 100vw"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              alt="filter devices for reservation"
              loading="lazy"
            />
            <Typography
              variant="caption"
              fontStyle={"italic"}
              color="text.secondary"
            >
              Filtered Devices and Prompt to Request Immediate Release of Device
            </Typography>
          </Grid>
        </Grid>
      </ReadableStack>
    </Grid>
  );
}
