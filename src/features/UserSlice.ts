import { createSlice } from '@reduxjs/toolkit';

type InitialStateProps = {
  firstName: string;
  lastName: string;
};

const initialState: InitialStateProps = {
  firstName: '',
  lastName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { setProfile } = userSlice.actions;
export default userSlice.reducer;
