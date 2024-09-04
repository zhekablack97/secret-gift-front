import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLogin: boolean;
  jwt: undefined | string;
}

const initialState: AuthState = {
  isLogin: false,
  jwt: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.isLogin = action.payload.isLogin;
      state.jwt = action.payload.jwt;
    },
    exit: (state) => {
      state.isLogin = false;
      state.jwt = undefined;
    },
  },
});

export const { exit, login } = authSlice.actions;

export const authStatus = (state: RootState) => state.auth;

export const authReducer = authSlice.reducer;
