import React from "react";
import type { AppProps } from "next/app";

import { GlobalStyle, ThemeProvider } from "styles";
import { Layout } from "app/components";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}
