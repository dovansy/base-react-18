import { RootState } from '@/shared/redux/store';

export const selectAccessToken = (state: RootState) => state.user.accessToken;

export const selectUser = (state: RootState) => state.user.user;

export const selectIsAuthenticated = (state: RootState) => Boolean(state.user.accessToken);
