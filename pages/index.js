import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import getTimeToChristmas from '../src/getTimeToChristmas';

export default function Index() {
  const [timeToChristmas, setTimeToChristmas] = useState(getTimeToChristmas);

  useEffect(() => {
    setInterval(() => {
      setTimeToChristmas(getTimeToChristmas());
    }, 500);
  }, []);

  const { days, hours, minutes, seconds } = timeToChristmas;

  return (
    <Stack
      className="main-container"
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Box>
        Time before Christmas
      </Box>
      <Box>
        {`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`}
      </Box>
    </Stack>
  );
}
