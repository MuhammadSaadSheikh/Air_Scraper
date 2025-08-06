import { baseApi } from './baseApi';

export const authApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    authLogin: builder.mutation({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
    authForgot: builder.mutation({
      query: body => ({
        url: 'auth/forgot-password',
        method: 'POST',
        body,
      }),
    }),
    authUpdate: builder.mutation({
      query: body => ({
        url: 'auth/update-password',
        method: 'POST',
        body,
      }),
    }),
    authLogout: builder.mutation({
      query: body => ({
        url: 'auth/logout',
        method: 'POST',
        // body,
      }),
      //   invalidatesTags: [expenseTags.EXPENSES],
    }),
  }),
});

export const {
  useAuthLoginMutation,
  useAuthForgotMutation,
  useAuthLogoutMutation,
  useAuthUpdateMutation,
} = authApis;
