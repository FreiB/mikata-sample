import { createSlice } from '@reduxjs/toolkit';
import { apiClient } from './api-client';
import { AppThunk } from './store';

interface UserDetails {
  firstName: string;
  lastName: string;
  pictureUrl: string;
}

interface UserState {
  details?: UserDetails;
}

const initialState: UserState = {
  details: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { setUserDetails } = userSlice.actions;

export const verifyLoginThunk =
  (idToken: string): AppThunk<Promise<boolean>> =>
  async (dispatch) => {
    const res = await apiClient.verifyLogin(idToken);
    dispatch(setUserDetails(res.data));
    return Promise.resolve(true);
  };

// Action creators are generated for each case reducer function
//export const { verifyLogin } = userSlice.actions;

export default userSlice.reducer;
