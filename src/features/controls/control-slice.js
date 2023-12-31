import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  region: '',
};

const controlSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    controlReset: () => initialState,
  }
});

export const {setRegion, setSearch, controlReset} = controlSlice.actions;
export const controlReducer = controlSlice.reducer;

export const selectSearch = (state) => state.controls.search;
export const selectRegion = (state) => state.controls.region;
export const selectControls = (state) => state.controls;
