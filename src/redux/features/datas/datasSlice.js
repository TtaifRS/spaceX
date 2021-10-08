import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDatas = createAsyncThunk(
  'datas/getDatas',

  // eslint-disable-next-line arrow-body-style
  async () => {
    // eslint-disable-next-line no-undef
    return fetch('https://api.spacexdata.com/v3/launches')
      .then((res) => res.json())
      // eslint-disable-next-line no-console
      .catch(() => console.log('error'));
  },
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
      state.datas = action.payload;
    },

    [getDatas.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default datasSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import axios from 'axios';

// export const getDatas = createAsyncThunk(
//   'datas/getDatas',

//   async () => {
//     // eslint-disable-next-line no-undef
//     fetch('https://api.spacexdata.com/v3/launches')
//       .then((res) => res.json())
//       // eslint-disable-next-line no-console
//       .catch((err) => console.log(err));
//   },

//   // async () => {
//   //   axios
//   //     .get('https://api.spacexdata.com/v3/launches')
//   //     .then((res) => res.json())
//   //     // eslint-disable-next-line no-console
//   //     .catch((err) => console.log(err));
//   //   // eslint-disable-next-line comma-dangle
//   // }
// );

// const datasSlice = createSlice({
//   name: 'datas',
//   initialState: {
//     datas: [],
//     status: null,
//   },
//   extraReducers: {
//     [getDatas.pending]: (state) => {
//       state.status = 'loading';
//     },

//     [getDatas.fulfilled]: (state, action) => {
//       state.status = 'success';
//       state.datas = action.payload;
//     },

//     [getDatas.rejected]: (state) => {
//       state.status = 'failed';
//     },
//   },
// });

// export default datasSlice.reducer;
