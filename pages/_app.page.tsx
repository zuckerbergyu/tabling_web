import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DefaultSeo } from "next-seo";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "libs/createEmotionCache";
import theme from "constants/theme";
import { DEFAULT_SEO } from "constants/seo";

import { QueryClient, QueryClientProvider } from "react-query";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const queryClient = new QueryClient();
  return (
    <CacheProvider value={emotionCache}>
      <DefaultSeo {...DEFAULT_SEO} />
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}
