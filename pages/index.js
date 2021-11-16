import React from 'react';

import dynamic from 'next/dynamic';

import ChristmasCountdown from '../src/ChristmasCountdown';

const Snowfall = dynamic({ loader: () => import('react-snowfall') },{ loading: () => <div></div>, ssr: false }) // eslint-disable-line

export default function Index() {
  return (
    <>
      <Snowfall />
      <ChristmasCountdown />
    </>
  );
}
