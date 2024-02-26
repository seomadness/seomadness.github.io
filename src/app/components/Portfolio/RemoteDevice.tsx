import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ReadableStack } from "./Portfolio";
import Stack from "@mui/material/Stack";
import remoteDeviceInteraction from "images/portfolio/remote-device-interaction.png";
import remoteDeviceInteractionShell from "images/portfolio/remote-device-interaction-shell.png";

export default function RemoteDevice() {
  return (
    <Grid
      container
      id="remote-device"
      sx={{ mt: { xs: 1, sm: 2 }, width: "100%" }}
    >
      <ReadableStack>
        <Typography variant="h4">Remote Device Platform</Typography>
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
            maintain a viable production targeted devices, monitor and optimize
            performance, and remediate code vulnerabilities.
          </Typography>
          <Typography variant="body1" color="text.primary">
            The remote device platform serves our internal product developers
            and quality assurance testers to build, debug and continuously test
            their products by remotely accessing real devices.
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
              Support Product Development Cycles
            </Typography>
            <Typography variant="body1" color="text.primary">
              A holistic platform to connect real devices to developers to
              perform automated tests, generate reports, and debug products.
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="text.secondary"
            >
              Improve Speed of Product Delivery
            </Typography>
            <Typography variant="body1" color="text.primary">
              Reduce the steps to configure products for deployment by
              simulating services across real device variants.
            </Typography>
          </div>
        </Stack>
        <Grid container item id="remote-device">
          <Grid item xs={12} p={0} mb={5}>
            <Image
              src={remoteDeviceInteraction}
              width={0}
              height={0}
              sizes="(max-width: 700px) 100vw"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              alt="remote device interaction page"
              loading="lazy"
            />
            <Typography
              variant="caption"
              fontStyle={"italic"}
              color="text.secondary"
            >
              Remote Device Platform
            </Typography>
          </Grid>

          <Grid item xs={12} p={0}>
            <Image
              src={remoteDeviceInteractionShell}
              width={0}
              height={0}
              sizes="(max-width: 700px) 100vw"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              alt="remote device interaction shell and logs"
              loading="lazy"
            />
            <Typography
              variant="caption"
              fontStyle={"italic"}
              color="text.secondary"
            >
              Remote Device Platform with Resizable Device Log Panel and Exec
              Shell
            </Typography>
          </Grid>
        </Grid>
      </ReadableStack>
    </Grid>
  );
}
