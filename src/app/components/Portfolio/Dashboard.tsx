import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ReadableStack } from "./Portfolio";
import Stack from "@mui/material/Stack";
import dashboardFinal from "images/portfolio/dashboard-final-data.png";
import dashboardFinalEditable from "images/portfolio/dashboard-editable-final.png";
import dashboardMasonary from "images/portfolio/dashboard-original-masonary.png";
import dashboardMasonary1728 from "images/portfolio/dashboard-original-masonary-1728.png";
import dashboardFirstPrototype from "images/portfolio/dashboard-first-proposed.png";
import dashboardFirstPrototype1728 from "images/portfolio/dashboard-first-proposed-responsive-1728.png";
import dashboardFirstPrototypeReorder from "images/portfolio/dashboard-layout-reorder.png";
import wireframeDashboard from "images/portfolio/wireframe-dashboard-numbered.png";
import wireframeDashboard1728 from "images/portfolio/wireframe-dashboard-numbered-1728.png";
import wireframeComponent from "images/portfolio/wireframe-dashboard-components.png";
import wireframeComponent1728 from "images/portfolio/wireframe-dashboard-components-1728.png";

export default function Dashboard() {
  return (
    <Grid container id="dashboard" sx={{ mt: { xs: 1, sm: 2 } }}>
      <Grid item xs={12}>
        <ReadableStack mb={5}>
          <Typography variant="h4" className="title">
            Core Dashboard
          </Typography>
          <Typography variant="body1" sx={{ textDecoration: "underline" }}>
            Illustrations are recreated from the original design as visual aids
            and sensitive materials have been redacted for Non-Disclosure
            Agreement purposes.
          </Typography>
          <Stack spacing={2} direction={"column"}>
            <Typography variant="h6" color="text.secondary">
              Background
            </Typography>
            <Typography variant="body1" color="text.primary">
              As the core-product expands its suite of service-products, the
              complexity of provisioning individual product&apos;s capabilities
              becomes increasingly unsustainable.
            </Typography>
            <Typography variant="body1" color="text.primary">
              The core-product laid the front-end foundation and continues to
              supply development tools shared throughout all service-products.
              With shared code, the service-product teams are responsible for
              developing supplemental components that provide direct access to
              their capabilities. Without standardization, this implementation
              process inevitability creates disjointed components that primarily
              affect the long-term user experience in an operational
              environment.
            </Typography>
          </Stack>
        </ReadableStack>
      </Grid>

      <Grid
        container
        item
        id="original-dashboard"
        direction={"row"}
        spacing={1}
        my={5}
      >
        <Grid item xs={12} sm={12} md={4}>
          <Stack spacing={2}>
            <Typography variant="h6" color="text.secondary">
              Problem
            </Typography>
            <Typography variant="body1" color="text.primary">
              The original core-product dashboard was designed in a masonry
              layout (commonly referred to as the Pinterest Style Layout) to
              accommodate the full content that the core-product and
              service-product&apos;s capabilities asynchronously render. The
              problem was easily identifiable as active items would shift to the
              shortest column and aggregated content would reposition according
              to streaming data.
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} md={4} id="original-dashboard-image">
          <Image
            src={dashboardMasonary}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="original dashboard layout"
            loading="lazy"
          />
          <Typography
            variant="caption"
            fontStyle={"italic"}
            color="text.secondary"
          >
            Dashboard in Masonry Layout
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} id="original-dashboard-images">
          <Image
            src={dashboardMasonary1728}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="original dashboard layout resize"
            loading="lazy"
          />
          <Typography
            variant="caption"
            fontStyle={"italic"}
            color="text.secondary"
          >
            Reposition on Resized Viewpoint with Side Panel
          </Typography>
        </Grid>
      </Grid>

      <ReadableStack mt={5}>
        <Stack spacing={2} direction={"column"}>
          <Typography variant="h6" color="text.secondary">
            First Iteration
          </Typography>
          <Typography variant="body1" color="text.primary">
            The first proof of concept was to facilitate preliminary discussions
            on validating the solution of a fixed height and custom reorder. A
            modular grid layout arranges items with consistent columns and rows
            to maintain a uniform aesthetic across all dashboards reflecting
            different services. The new design will allow users to easily scan
            items, and remember the order and location of high-interest content.
            The custom reorder feature will provide the option to priortize the
            array of items according to individual specifications.
          </Typography>
          <Typography variant="body1" color="text.primary">
            The main disadvantage is the dynamic content length. In a fixed
            height, less content will leave a white area and the wasted space
            could be repurposed for more content on a dashboard viewpoint. If
            the content extends, the truncated information will obscure vital
            data that may impede operational performance. This first iteration
            opened many concerns that were remedied with the original masonry
            layout.
          </Typography>
        </Stack>
      </ReadableStack>

      <Grid
        container
        item
        id="initial-prototype"
        direction={"row"}
        spacing={1}
        mt={2}
        mb={5}
      >
        <Grid item xs={12} sm={12} md={4} id="first-dashboard-prototype">
          <Image
            src={dashboardFirstPrototype}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="first dashboard prototype"
            loading="lazy"
          />
          <Typography
            variant="caption"
            fontStyle={"italic"}
            color="text.secondary"
          >
            Default Dashboard in Modular Grid Layout
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} id="first-dashboard-prototype">
          <Image
            src={dashboardFirstPrototype1728}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="first dashboard prototype resized"
            loading="lazy"
          />
          <Typography
            variant="caption"
            fontStyle={"italic"}
            color="text.secondary"
          >
            Grid Wrapping on Resized Viewpoint with Side Panel
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} id="first-dashboard-prototype">
          <Image
            src={dashboardFirstPrototypeReorder}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="first dashboard prototype reordered"
            loading="lazy"
          />
          <Typography
            variant="caption"
            fontStyle={"italic"}
            color="text.secondary"
          >
            Custom Content Reorder
          </Typography>
        </Grid>
      </Grid>

      <ReadableStack mt={2}>
        <Stack spacing={2} direction={"column"}>
          <Typography variant="h6" color="text.secondary">
            Conclusion
          </Typography>
          <Typography variant="body1" color="text.primary">
            To address the concerns of dynamic content length in addition to the
            masonry layout problem, the design needed certain flexibility with
            controlled dimensions.
          </Typography>
          <Typography variant="body1" color="text.primary">
            The final dashboard design uses a modular grid layout that consists
            of 2 by 2 arrays. Each array holds up to four small components, two
            medium components, or one large component. The size variations
            accommodate all data content and provide dashboard customization to
            agjust high-interest content in accordance with operational needs.
          </Typography>
        </Stack>
      </ReadableStack>
      <Grid
        container
        item
        id="wireframe"
        direction={"row"}
        spacing={1}
        mt={2}
        mb={0}
        sx={{ display: "flex", flexFlow: "row" }}
      >
        <Grid item id="final-wireframe">
          <Image
            src={wireframeDashboard}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            alt="final wireframe"
            loading="lazy"
          />
        </Grid>
        <Grid item id="final-wireframe">
          <Image
            src={wireframeDashboard1728}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            alt="final wireframe resized"
            loading="lazy"
          />
        </Grid>
      </Grid>
      <Typography variant="caption" fontStyle={"italic"} color="text.secondary">
        2 by 2 Array Grid Layout
      </Typography>

      <ReadableStack mt={5} mb={2}>
        <Typography variant="body1" color="text.primary">
          The 2 by 2 arrays are flexible containers in width and consistent in
          height. The grid layout and the items within the 2 by 2 array should
          flow from left to right and top to bottom. Designed around the common
          screen resolution of 1920 x 1080, the dashboard viewpoint should
          maintain full visibility of two rows and a glimpse of the row
          underneath to indicate further content.
        </Typography>
      </ReadableStack>

      <Grid
        container
        item
        id="wireframe"
        direction={"row"}
        spacing={1}
        mt={2}
        mb={0}
        sx={{ display: "flex", flexFlow: "row" }}
      >
        <Grid item id="final-wireframe">
          <Image
            src={wireframeComponent1728}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            alt="final wireframe components resized"
            loading="lazy"
          />
        </Grid>
        <Grid item id="final-wireframe">
          <Image
            src={wireframeComponent}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            alt="final wireframe components"
            loading="lazy"
          />
        </Grid>
      </Grid>

      <Typography
        mb={5}
        variant="caption"
        fontStyle={"italic"}
        color="text.secondary"
      >
        Content Placement in 2 by 2 Array Grid Layout
      </Typography>

      <ReadableStack mt={2}>
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
              Establish a Visual Hierarchy with a Custom Dashboard
            </Typography>
            <Typography variant="body1" color="text.primary">
              The size variations establish a visual hierarchy and recallable
              content placement. The end user can customize and prioritize
              content to adapt to the user&apos;s operational needs. Custom
              dashboards can be saved as templates and reused on instances of a
              service-product.
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="text.secondary"
            >
              Consistency in User Experience
            </Typography>
            <Typography variant="body1" color="text.primary">
              The 2 by 2 array grid layout promotes uniformity across different
              service-product dashboards to help users recollect the location of
              content in a linear order and navigate aggregated content.
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="text.secondary"
            >
              Unified Components for Product Developers
            </Typography>
            <Typography variant="body1" color="text.primary">
              The structured layout will help not only the end users, but
              service-product developers create dashboard components by
              utilizing controlled-size variation templates provided by the
              core-product team.
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="text.secondary"
            >
              Improve Content Readability and Operational Efficiency
            </Typography>
            <Typography variant="body1" color="text.primary">
              The grid layout enhances readability, making it easier to scan the
              aligned content.
            </Typography>
          </div>
        </Stack>
      </ReadableStack>

      <Grid
        container
        item
        id="final-core-dashboard"
        direction={"row"}
        spacing={2}
        mt={5}
      >
        <Grid item xs={12} id="core-dashboard">
          <Image
            src={dashboardFinal}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="original dashboard layout"
            loading="lazy"
          />
          <Typography
            variant="caption"
            fontStyle={"italic"}
            color="text.secondary"
          >
            Core Dashboard in 2 by 2 Array Grid Layout
          </Typography>
        </Grid>
        <Grid item xs={12} id="core-dashboard">
          <Image
            src={dashboardFinalEditable}
            width={0}
            height={0}
            sizes="(max-width: 700px) 100vw"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="original dashboard layout resize"
            loading="lazy"
          />
          <Typography
            variant="caption"
            fontStyle={"italic"}
            color="text.secondary"
          >
            Customizing Dashboard
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
