import { UserType } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userData: UserType | null;
  userToken: string | null;
}

const initialState: UserState = {
  userData: null,
  userToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserType>) => {
      state.userData = action.payload;
    },
    setUserToken: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload;
    },
  },
});

export const { setUserData, setUserToken } = userSlice.actions;

export default userSlice;
