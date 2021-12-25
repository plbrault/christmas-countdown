import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import getTimeToChristmas from './getTimeToChristmas';

export default function ChristmasCountdown() {
  const [timeToChristmas, setTimeToChristmas] = useState(getTimeToChristmas());

  useEffect(() => {
    setInterval(() => {
      const newTimeToChristmas = getTimeToChristmas();
      setTimeToChristmas(newTimeToChristmas);
    }, 100); // interval of 100 instead of 1000 to minimize drift
  }, []);

  const {
    days, hours, minutes, seconds, totalSeconds,
  } = timeToChristmas;

  const isChristmas = (totalSeconds === 0);
  const isHolidays = (totalSeconds === -1);

  return (
    <Stack
      className="christmas-countdown-container"
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {
        isChristmas ? <> </> : (
          <Box className="label">
            Time Left Until Christmas
          </Box>
        )
      }
      <Box className="christmas-trees">
        🎄🎄🎄
      </Box>
      {
        (isChristmas || isHolidays) ? (
          <span className="text-during-holidays">{isChristmas ? 'Merry Christmas!' : 'Happy Holidays!'}</span>
        ) : (
          <Box className="time-before-christmas">
            <span className="number">{String(days).padStart(2, '0')}</span>
            &nbsp;days&nbsp;
            <span className="number">{String(hours).padStart(2, '0')}</span>
            &nbsp;hours&nbsp;
            <span className="number">{String(minutes).padStart(2, '0')}</span>
            &nbsp;minutes&nbsp;
            <span className="number">{String(seconds).padStart(2, '0')}</span>
            &nbsp;seconds
          </Box>
        )
      }
      <Box className="christmas-trees">
        🎄🎄🎄
      </Box>
    </Stack>
  );
}
