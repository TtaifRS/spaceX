import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

import CardComponet from '../components/CardComponent';

import { getDatas } from '../redux/features/datas/datasSlice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '50%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const HomePage = () => {
  const dispatch = useDispatch();

  const { datas } = useSelector((state) => state.datas);

  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState(datas);

  useEffect(() => {
    dispatch(getDatas());
    // eslint-disable-next-line no-unused-expressions
    setItems(datas);
  }, []);

  // eslint-disable-next-line no-unused-vars

  const successLaunch = () => {
    const successFiltered = datas.filter((data) => {
      if (data.launch_success) {
        return data;
      }
      return null;
    });
    setSearchTerm('');
    setItems(successFiltered);
  };

  const failureLaunch = () => {
    const failedFiltered = datas.filter((data) => {
      if (!data.launch_success) {
        return data;
      }
      return null;
    });
    setItems(failedFiltered);
    setSearchTerm('');
  };

  return (
    <>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: '3', sm: 'block' } }}
          >
            SpaceX
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Rocket name"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setItems(datas); }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Grid sx={{ mt: '30px' }}>
        <Button variant="outlined" onClick={() => { setItems(datas); }}>All</Button>
        <Button variant="outlined" onClick={successLaunch}>Launch Success</Button>
        <Button variant="outlined" onClick={failureLaunch}>Launch failure</Button>
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ mx: '30px', mt: '60px' }}>
        <Grid container spacing={8}>
          {items && items.filter((data) => {
            if (searchTerm === '') {
              return data;
            // eslint-disable-next-line no-else-return
            } else if (data.rocket.rocket_name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return data;
            }
            return null;
          }).map((data) => {
            const {
              mission_name,
              launch_date_utc,
              rocket,
              launch_site,
              launch_success,
              links,
              details,
            } = data;

            const {
              mission_patch_small, article_link, wikipedia, video_link,
            } = links;

            const {
              rocket_name, rocket_type, second_stage,
            } = rocket;
            return (
              <Grid item s={12} xs={12} md={3} key={uuidv4()}>
                <CardComponet
                  missonName={mission_name}
                  date={launch_date_utc}
                  site={launch_site.site_name}
                  image={mission_patch_small}
                  article={article_link}
                  wikipedia={wikipedia}
                  video={video_link}
                  launchSuccess={launch_success}
                  info={details}
                  rocketName={rocket_name}
                  rocketType={rocket_type}
                  nationality={second_stage.payloads[0].nationality}
                  manufacturer={second_stage.payloads[0].manufacturer}
                  payloadType={second_stage.payloads[0].payload_type}

                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
