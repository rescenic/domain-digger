'use client';

import PlausibleProvider from 'next-plausible';
import { ThemeProvider } from 'next-themes';
import { type FC, type ReactNode } from 'react';
import { SWRConfig } from 'swr';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => (
  <ThemeProvider attribute="class">
    <SWRConfig
      value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}
    >
      <PlausibleProvider
        customDomain="https://insights.wsky.dev"
        domain="digger.tools"
      >
        {children}
      </PlausibleProvider>
    </SWRConfig>
  </ThemeProvider>
);

export default Providers;
