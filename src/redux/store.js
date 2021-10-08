import { configureStore } from '@reduxjs/toolkit';
import datasReducer from './features/datas/datasSlice';

const store = configureStore({
  reducer: {
    datas: datasReducer,
  },
});

export default store;
