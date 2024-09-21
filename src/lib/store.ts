import { authApi } from "@/api/auth/authService";
import { authReducer } from "../slice/authSlice";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { eventApi } from "@/api/event/eventService";
import { imageApi } from "@/api/upload/uploadService";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      [authApi.reducerPath]: authApi.reducer,
      [eventApi.reducerPath]: eventApi.reducer,
      [imageApi.reducerPath]: imageApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(eventApi.middleware)
        .concat(imageApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
