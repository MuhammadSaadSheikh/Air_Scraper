import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { tagTypes } from './tags';
import { Mutex } from 'async-mutex';
import { RootState } from '../types';
// import refreshToken from './fetchAuthTokenTemp';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://sky-scrapper.p.rapidapi.com/api/v1/',
  prepareHeaders: (
    headers: Headers,
    { getState }: Pick<BaseQueryApi, 'getState'>,
  ) => {
    const state = getState() as RootState;
    const token = state.user?.userToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Accept', 'application/json');
    headers.set('X-RapidAPI-Host', 'sky-scrapper.p.rapidapi.com');
    headers.set(
      'X-RapidAPI-Key',
      '666f8331d3msh0a4e5c2924758ccp122978jsn57d3cac28684',
    );
    return headers;
  },
});
// Create a base query with reauth and mutex
const baseQueryWithReauth = async (
  args: any,
  api: any,
  extraOptions: any,
): Promise<any> => {
  let result;
  const release = await mutex.acquire();
  try {
    result = await baseQuery(args, api, extraOptions);
  } catch (error: any) {
    if (error.status === 401) {
      throw error;
    } else {
      throw error;
    }
  } finally {
    release();
  }
  return result;
};

const baseApi = createApi({
  tagTypes: tagTypes(),
  reducerPath: 'baseApi',
  endpoints: builder => ({}),
  baseQuery: baseQueryWithReauth,
});

export { baseApi };
