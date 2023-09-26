import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: () => {
            headers.set('X-RapidAPI-Key', '87062783ffmsh1984b1a9dc2d616p11256cjsn35f8ecc6a6e9');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/list' }),
    }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
