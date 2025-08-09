import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getNearbyAirports: builder.query({
      query: params => ({
        url: 'flights/getNearByAirports',
        method: 'GET',
        params,
      }),
    }),
    getAirportsByLocation: builder.query({
      query: ({ lat, lng }) => ({
        url: 'flights/searchAirport',
        method: 'GET',
        params: { lat, lng },
      }),
    }),
    // getAirportsByLocation: builder.query({
    //   query: parmas => ({
    //     url: 'flights/searchAirport',
    //     method: 'GET',
    //     params,
    //   }),
    // }),
  }),
});

export const {
  useLazyGetNearbyAirportsQuery,
  useLazyGetAirportsByLocationQuery,
} = userApi;
