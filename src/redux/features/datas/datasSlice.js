import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/launches';

export const getDatas = createAsyncThunk(
  'datas/getDatas',

  async () => {
    axios
      .get(URL)
      .then((res) => res.json())
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
    // eslint-disable-next-line comma-dangle
  }
);

const datasSlice = createSlice({
  name: 'datas',
  initialState: {
    datas: [],
    status: null,
  },
  extraReducers: {
    [getDatas.pending]: (state) => {
      state.status = 'loading';
    },

    [getDatas.fulfilled]: (state, action) => {
      state.status = 'success';
      state.users = action.payload;
    },

    [getDatas.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default datasSlice.reducer;
