import type { Metadata } from "next";
// import { IBM_Plex_Sans } from "next/font/google/";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
// import { Analytics } from "./components/analytics";
import "./globals.css";

// const ibm_plex_sans = IBM_Plex_Sans({
//   display: "swap",
//   subsets: ["latin"],
//   weight: ["200", "300" "400", "500", "600"],
//   style: ["normal", "italic"],
// });

export const metadata: Metadata = {
  title: "SeoMadness Portfolio",
  description: "SeoMadness UI/UX Engineer Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* <Analytics /> */}</head>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
