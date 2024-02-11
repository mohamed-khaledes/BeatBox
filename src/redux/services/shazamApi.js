import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-api7.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '608884064cmsh22b687122f0f073p1f3dc4jsnb1d1d8dffcc4');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongsByGenre: builder.query({ query: (genre) => `charts/get-top-songs-in_world_by_genre?genre=${genre}&limit=15` }),
    getTopSongs: builder.query({ query: () => 'songs/list-recommendations?id=628712770&limit=15' }),
    getSongDetails: builder.query({ query: (songid) => `songs/get_details?id=${songid}` }),
    getRelatedSongs: builder.query({ query: (songid) => `songs/list-recommendations?id=${songid}&limit=15` }),
    getArtistDetails: builder.query({ query: (artistid) => `artist/get-details?id=${artistid}` }),
    getArtistSongs: builder.query({ query: (artistid) => `artist/get-top-songs?id=${artistid}&offset=0` }),
    getSongsAroundYou: builder.query({ query: (countryCode) => `charts/get-top-songs-in-country?country_code=${countryCode}&limit=15` }),
    getTopCharts: builder.query({ query: () => 'charts/get-top-songs-in-world?limit=15' }),
    getSearch: builder.query({ query: (term) => `search?term=${term}%20down&limit=10` }),
  }),
});
export const {
  useGetTopSongsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetArtistSongsQuery,
  useGetSongsAroundYouQuery,
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSearchQuery,
} = shazamApi;
