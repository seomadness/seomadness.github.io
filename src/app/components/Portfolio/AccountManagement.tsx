import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import discovery from "../../../images/portfolio/account-discovery-framing.png";
import researchSynthesis from "../../../images/portfolio/account-research-synthesis.png";
import accountWeb from "../../../images/portfolio/account-web-access-prototype.png";

export default function AccountManagement() {
  return (
    <Grid container id="account-management" sx={{ mt: { xs: 1, sm: 2 } }}>
      <Stack spacing={4} direction={"column"}>
        <Typography variant="h4">Account Management Services</Typography>
        <Typography variant="body2">
          Client: Department of Defense, Air Force - Kobayashi Maru <br />
          Kobayashi Maru was awarded the Department of Defense, 2020 Software
          Innovation Team.
        </Typography>

        <Stack spacing={2} direction={"column"}>
          <Typography variant="h6" color="text.secondary">
            Background
          </Typography>
          <Typography variant="body1" color="text.primary">
            As Kobayashi Maru, Section 31 is growing at a rapid pace, product
            teams are losing consistency to provide our expanding user groups
            access to their products. I am leading design in a team responsible
            for streamlining Section 31 suite of products and how we can better
            support the account creation process for warfighters worldwide.
          </Typography>
        </Stack>

        <Stack spacing={2} direction={"column"}>
          <Typography variant="h6" color="text.secondary">
            Responsibilities
          </Typography>
          <Typography variant="body1" color="text.primary">
            Collaborated with internal developers and product managers to define
            an agile software development roadmap and gathered technical
            requirements to mitigate risks on feasibility.
          </Typography>
          <Typography variant="body1" color="text.primary">
            Communicated product visions with stakeholders and enterprise
            administrators to ensure designed solutions are sustainable for
            continuous deployment on the cloud.
          </Typography>
          <Typography variant="body1" color="text.primary">
            Conducted generative research studies on multiple user groups in
            support of all products and led user interviews with Air Force
            warfighters.
          </Typography>
          <Typography variant="body1" color="text.primary">
            Created research synthesis to prioritize features for our MVP and
            high-fidelity user interface prototypes to communicate with the
            team.
          </Typography>
          <Typography variant="body1" color="text.primary">
            Evaluated designs with user flow diagrams to address edge cases,
            loopholes, and security vulnerabilities as account management
            services evolved in complexity.
          </Typography>
        </Stack>

        <Stack spacing={2} direction={"column"}>
          <Typography variant="h6" color="text.secondary">
            Research
          </Typography>
          <Typography variant="body1" color="text.primary">
            We approached Discovery & Framing to determine feature development
            and to gain a deep understanding of our Section 31 suite user groups
            by products. We brought our interdisciplinary team members into this
            process to prioritize the key problems that best represent user
            value and technical limitations to ideate viable solutions.
          </Typography>
          <Typography variant="body1" color="text.primary">
            I engaged contextual inquiries with dozens of stakeholders and
            warfighters. My focus in interviews was to validate key assumptions
            and uncover pain points.
          </Typography>
          <Typography variant="body1" color="text.primary">
            After synthesizing research and theming transcripts into key
            insights, we discovered new findings and validated our riskiest
            assumptions.
          </Typography>
        </Stack>
      </Stack>

      <Stack my={4} spacing={0} direction={"column"}>
        <Image
          src={discovery}
          width={0}
          height={0}
          sizes="(max-width: 700px) 100vw"
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
          alt="account management discovery"
          loading="lazy"
        />
        <Image
          src={researchSynthesis}
          width={0}
          height={0}
          sizes="(max-width: 700px) 100vw"
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
          alt="account management research synthesis"
          loading="lazy"
        />

        <Stack spacing={2} direction={"column"} sx={{ mt: 3 }}>
          <Typography variant="h6" color="text.secondary">
            Conclusion
          </Typography>
          <Typography variant="body1" color="text.primary">
            Section 31 is expanding with suites of new products, adding new user
            groups around the globe. As applications grew, we were taking
            account of new users, verifying credentials to reinforce security,
            delegating product access permissions, and addressing
            vulnerabilities to deter users from obtaining an account with
            malicious intent.
          </Typography>
          <Typography variant="body1" color="text.primary">
            We took proactive measures to prevent malicious code injection in
            user input fields and automated verification with a valid CAC. Our
            account management team served as a gateway to ensure that all
            Section 31 products had access to legitimate user data from our
            active directory stored in the cloud database.
          </Typography>
        </Stack>
      </Stack>
      <Grid
        id="conclusion"
        container
        item
        sx={{
          m: "0 !important",
          pl: "0 !important",
          alignItems: "center",
        }}
      >
        <Grid
          item
          sx={{ m: "0 !important", pl: "0 !important", pr: 2 }}
          xs={12}
          md={4}
        >
          <Stack spacing={3} direction={"column"}>
            <Typography variant="h6" color="text.secondary">
              Outcome
            </Typography>
            <div>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="text.secondary"
              >
                Automated CAC Reduced Manual Input and Security Vulnerabilities
              </Typography>
              <Typography variant="body1" color="text.primary">
                The request product access application will automatically
                populate in accordance with the user information verified on a
                CAC.
              </Typography>
            </div>
            <div>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="text.secondary"
              >
                Reduce Input Mistake and Incorrect Product Access
              </Typography>
              <Typography variant="body1" color="text.primary">
                Input field selections are controlled. Field selections filter
                access privileges to deter users from accessing incorrect
                products.
              </Typography>
            </div>
            <div>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="text.secondary"
              >
                Decrease the Number of Email/Helpdesk Correspondence
              </Typography>
              <Typography variant="body1" color="text.primary">
                Email/Help Desk Ticket correspondence will be replaced by our
                account management services.
              </Typography>
            </div>
            <div>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="text.secondary"
              >
                Efficient Account Creation and User Access to All Section 31
                Product
              </Typography>
              <Typography variant="body1" color="text.primary">
                The request product access application consolidates user
                information required by all Section 31 products to have their
                account/access granted efficiently. It guarantees product
                delegates to retrieve essential user information from the
                database.
              </Typography>
            </div>
          </Stack>
        </Grid>
        <Grid item sx={{ my: { xs: 0 } }} xs={12} md={8}>
          <Image
            src={accountWeb}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="account management discovery"
            loading="lazy"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
