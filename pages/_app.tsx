import React from "react";
import type { AppProps } from "next/app";

import { GlobalStyle, ThemeProvider } from "styles";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
