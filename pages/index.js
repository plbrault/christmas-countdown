import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function Index() {
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
        35 days 23 hours 18 minutes 12 seconds
      </Box>
    </Stack>
  );
}
