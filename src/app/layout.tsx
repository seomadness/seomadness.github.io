import type { Metadata } from "next";
import StoreProvider from "./storeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Analytics from "./components/analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seo UI/UX Engineer Portfolio",
  description:
    "Seo UI/UX Engineer Design Portfolio | I work at the intersection of ui/ux design and development.  I enjoy problem-solving and building ideas into digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <Analytics />
        </head>
        <body>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
