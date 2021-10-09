import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

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
          // eslint-disable-next-line no-console
          console.log(datas.mission_name);
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
  );
};

export default HomePage;
