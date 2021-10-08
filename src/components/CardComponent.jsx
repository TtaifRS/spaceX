import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDatas } from '../redux/features/datas/datasSlice';

const CardComponent = () => {
  const dispatch = useDispatch();

  const { datas } = useSelector((state) => state.datas);

  useEffect(() => {
    dispatch(getDatas());
  }, []);

  return (
    <div>
      {datas && datas.map((data) => (
        <div key={data.flight_number}>
          <h1>{data.mission_name}</h1>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
