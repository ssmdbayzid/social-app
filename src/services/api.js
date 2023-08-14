// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ["Media", "User"],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }), // Replace with your API base URL
  endpoints: (builder) => ({
    getAllMedia: builder.query({
        query : () => "/media",
        // providesTags: ["Media"]
    }),
    getMedia: builder.query({
        query : (id) => `/media/${id}`,
        // providesTags: ["Media"]
    }),
    postMedia: builder.mutation({
      query: (data) => ({
        url: '/media', // Replace with your API endpoint
        method: 'POST',
        body: data,
        invalidatesTags: ["Media"]
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: '/user', // Replace with your API endpoint
        method: 'PATCH',
        body: data,
        invalidatesTags: ["User"]

      }),
    }),
    updateUserEmail: builder.mutation({
      query: (data) => ({
        url: '/update-email', // Replace with your API endpoint
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const { useUpdateUserImageMutation, useUpdateUserEmailMutation, useGetAllMediaQuery, useGetMediaQuery, usePostMediaMutation } = api;
