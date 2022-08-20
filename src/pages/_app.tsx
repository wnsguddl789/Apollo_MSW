import React from 'react';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { useApollo } from '../lib/apolloClient';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);
  return (
    <ApolloProvider client={client}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
