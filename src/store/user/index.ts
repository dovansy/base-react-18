import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from './type';

export type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  currentAccount: string | null;
  user: User | null;
};

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  currentAccount: null,
  user: null,
};

type LoginPayload = {
  accessToken: string;
  refreshToken?: string;
  user: User;
  currentAccount?: string;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginPayload>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken ?? null;
      state.currentAccount = action.payload.currentAccount ?? null;
      state.user = action.payload.user;
    },

    logout: () => initialState,

    updateUserInfo: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { loginSuccess, logout, updateUserInfo, setAccessToken } = userSlice.actions;

export const userReducer = userSlice.reducer;
