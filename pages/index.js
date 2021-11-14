import React, { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

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
