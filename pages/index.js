import React, { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import getTimeToChristmas from '../src/getTimeToChristmas';

const Snowfall = dynamic({ loader: () => import('react-snowfall') },{ loading: () => <div></div>, ssr: false })

export default function Index() {
  const [timeToChristmas, setTimeToChristmas] = useState(getTimeToChristmas);
  const [displaySnow, setDisplaySnow] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setTimeToChristmas(getTimeToChristmas());
    }, 500);
    setDisplaySnow(true);
  }, []);

  const { days, hours, minutes, seconds } = timeToChristmas;

  return (
    <>
      <Snowfall />
      <Stack
        className="main-container"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box className="label">
          Time Left Before Christmas
        </Box>
        <Box className="christmas-trees">
          🎄🎄🎄
        </Box>    
        <Box className="time-before-christmas">
          <span className="number">{String(days).padStart(2, '0')}</span>
          &nbsp;days&nbsp;
          <span className="number">{String(hours).padStart(2, '0')}</span>
          &nbsp;hours&nbsp;
          <span className="number">{String(minutes).padStart(2, '0')}</span>
          &nbsp;minutes&nbsp;
          <span className="number">{String(seconds).padStart(2, '0')}</span>
          &nbsp;seconds&nbsp;
        </Box>
        <Box className="christmas-trees">
          🎄🎄🎄
        </Box>
      </Stack>
    </>
  );
}
