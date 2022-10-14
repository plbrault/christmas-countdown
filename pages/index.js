import React from 'react';

import dynamic from 'next/dynamic';

import Countdown from '../src/Countdown';

const Snowfall = dynamic({ loader: () => import('react-snowfall') },{ loading: () => <div></div>, ssr: false }) // eslint-disable-line

export default function Index() {
  return (
    <>
      <Snowfall />
      <Countdown />
      <footer>
        <a href="https://plbrault.com">&copy; 2022 P-L.Brault</a>
      </footer>
    </>
  );
}
