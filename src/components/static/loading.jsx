import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function LoadingScreen() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        backgroundColor: 'rgb(255,255,255)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingScreen;