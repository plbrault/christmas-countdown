import React from 'react';

import Box from '@mui/material/Box';
import Snowfall from 'react-snowfall';
import Stack from '@mui/material/Stack';

import dynamic from 'next/dynamic';

import ChristmasCountdown from '../src/ChristmasCountdown';

const Snowfall = dynamic({ loader: () => import('react-snowfall') },{ loading: () => <div></div>, ssr: false })

export default function Index() {
  return (
    <>
      <Snowfall />
      <ChristmasCountdown />
    </>
  );
}
