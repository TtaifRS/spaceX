import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

import CardComponet from '../components/CardComponent';
import { getDatas } from '../redux/features/datas/datasSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  const { datas } = useSelector((state) => state.datas);

  useEffect(() => {
    dispatch(getDatas());
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ mx: '30px' }}>
      <Grid container spacing={8}>
        {datas && datas.map((data) => {
          const { mission_name } = data;
          return (
            <Grid item s={12} xs={12} md={3}>
              <h1>
                {mission_name}
              </h1>
              <CardComponet />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HomePage;
