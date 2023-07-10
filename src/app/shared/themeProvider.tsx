"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

import theme from "./theme";

const cache = createCache({
  key: "css",
  prepend: true,
});

export default function AppThemeProvider(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ThemeProvider>
  );
}
