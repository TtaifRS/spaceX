import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { v4 as uuidv4 } from 'uuid';

const SkeletonComponent = () => (
  <Box display="flex" justifyContent="center" alignItems="center" sx={{ mx: '30px', mt: '60px' }}>
    <Grid container spacing={8}>
      {[...Array(120)].map(() => (
        <Grid item s={12} xs={12} md={3} key={uuidv4()}>
          <Skeleton variant="text" width={70} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="text" width={70} />
          <Skeleton variant="text" width={210} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default SkeletonComponent;
