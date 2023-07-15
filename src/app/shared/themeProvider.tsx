"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

import theme from "./theme";

const cache = createCache({
  key: "css",
  prepend: true,
});

export default function AppThemeProvider(props: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const { children } = props;
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CacheProvider value={cache}>{children}</CacheProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
