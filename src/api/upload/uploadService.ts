// Need to use the React-specific entry point to allow generating React hooks
import { AuthType, AuthTypeResponse } from "@/types/AuthType";
import { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import Cookies from "js-cookie";
import { EventsType } from "@/types/EventsType";
import { ImageUploadResponse } from "@/types/UploadImageService";

type RootState = any; // normally inferred from statebaseQueryWithReauthprepareHeaders

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

// Define a service using a base URL and expected endpoints
export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    uploadImage: builder.mutation<ImageUploadResponse[], FormData>({
      query: (formData) => ({
        url: "upload", // эндпоинт Strapi для загрузки файлов
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = imageApi;
