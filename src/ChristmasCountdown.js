import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import getTimeToChristmas from './getTimeToChristmas';
import isChristmas from './isChristmas';

export default function ChristmasCountdown() {
  const [timeToChristmas, setTimeToChristmas] = useState(getTimeToChristmas);
  const [merryChristmas, setMerryChristmas] = useState(isChristmas());
  const [displaySnow, setDisplaySnow] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if (isChristmas()) {
        if (!merryChristmas) {
          setMerryChristmas(true);
        }
      } else {
        if (merryChristmas) {
          setMerryChristmas(false);
        }
        setTimeToChristmas(getTimeToChristmas());
      }
    }, 500);
    setDisplaySnow(true);
  }, []);

  const { days, hours, minutes, seconds } = timeToChristmas;

  return (
    <>
      <Stack
        className="christmas-countdown-container"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        { 
          !merryChristmas &&
          <Box className="label">
            Time Left Before Christmas
          </Box>
        }
        <Box className="christmas-trees">
          🎄🎄🎄
        </Box>    
        <Box className="time-before-christmas">
          {merryChristmas && <span className="merry-christmas">Merry Christmas!</span>}
          {
            !merryChristmas && (
              <>
                <span className="number">{String(days).padStart(2, '0')}</span>
                &nbsp;days&nbsp;
                <span className="number">{String(hours).padStart(2, '0')}</span>
                &nbsp;hours&nbsp;
                <span className="number">{String(minutes).padStart(2, '0')}</span>
                &nbsp;minutes&nbsp;
                <span className="number">{String(seconds).padStart(2, '0')}</span>
                &nbsp;seconds&nbsp;
              </>
            )
          }
        </Box>
        <Box className="christmas-trees">
          🎄🎄🎄
        </Box>
      </Stack>
    </>
  );
}