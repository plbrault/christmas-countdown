import React from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';

import ChristmasCountdown from '../src/ChristmasCountdown';

const Snowfall = dynamic({ loader: () => import('react-snowfall') },{ loading: () => <div></div>, ssr: false })

export default function Index() {
  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-status-bar-style" content="#070026" />
      </Head>
      <Snowfall />
      <ChristmasCountdown />
    </>
  );
}
