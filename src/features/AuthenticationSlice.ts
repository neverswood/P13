import { createSlice } from '@reduxjs/toolkit';

type initialStateProps = {
  token: string;
  check: boolean;
};

const initialState: initialStateProps = {
  token: '',
  check: false,
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    updateCheck: (state, action) => {
      state.check = action.payload;
    },
  },
});

export const { setToken, updateCheck } = authSlice.actions;
export default authSlice.reducer;
