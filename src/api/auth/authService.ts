// Need to use the React-specific entry point to allow generating React hooks
import { AuthType, AuthTypeResponse } from "@/types/AuthType";
import { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

type RootState = any; // normally inferred from state

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api/" }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    auth: builder.mutation<AuthTypeResponse, AuthType>({
      query: (body) => ({
        url: `auth/local`,
        method: "POST",
        body,
      }),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useAuthMutation } = authApi;
