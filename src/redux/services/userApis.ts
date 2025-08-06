import { UserType } from '../types';
import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<UserType[], void>({
      query: () => 'users',
      providesTags: [],
    }),

    getUserById: builder.query<UserType, number>({
      query: id => `users/${id}`,
      providesTags: [],
    }),

    addUser: builder.mutation<UserType, Partial<UserType>>({
      query: newUser => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: [],
    }),

    updateUser: builder.mutation<UserType, { id: number; userData: UserType }>({
      query: ({ id, userData }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: userData,
      }),
      invalidatesTags: [],
    }),

    deleteUser: builder.mutation<void, number>({
      query: id => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
