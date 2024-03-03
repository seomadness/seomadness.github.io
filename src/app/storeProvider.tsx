"use client";

import React from "react";
import { CssBaseline } from "@mui/material";
import { store } from "store/store";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Provider store={store}>{children}</Provider>;
}
