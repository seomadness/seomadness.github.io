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
        <Typography variant="h4" className="title">
          Reservation System
        </Typography>
        <Typography variant="body1">
          Client: Internal Product Developers
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
            device properties and reservation status. Reservation allows our
            internal product developers and quality assurance testers to
            exclusively build, debug and continuously test their products by
            remotely accessing real devices.
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
            using Next.js, React TS, and gRPC-Web. Dockerized our platform to
            run on a cloud provider.
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
              test products without interference during their exclusive
              sessions.
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="text.secondary"
            >
              Efficiency in User Experience
            </Typography>
            <Typography variant="body1" color="text.primary">
              Reduce the steps to test products for deployment by connecting
              device variants according to OS-focused developer profile.
            </Typography>
          </div>
        </Stack>
      </ReadableStack>

      <Grid container item>
        <Grid item xs={6} sm={12} mt={4}>
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
            Create Reservation Process for Android Product Developers
          </Typography>
        </Grid>

        <ReadableStack mt={5} mb={2}>
          <Typography variant="body1" color="text.primary">
            Service product developers and QA testers can reserve devices for
            immediate or future use. Creating a reservation is an intuitive
            process of filtering desired devices by device properties and
            reservation status, and selecting a reservation time and duration.
          </Typography>
        </ReadableStack>

        <Grid item xs={6} sm={12} mt={4} mb={0}>
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
    </Grid>
  );
}
