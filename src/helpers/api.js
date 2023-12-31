import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = '1fee0d3316c35113a8e2fbfdaf3cc26c';

export const fetchTrendMovies = async abortCtrl => {
  const resps = await axios.get('/3/trending/movie/day', {
    signal: abortCtrl.signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return resps.data;
};

export const fetchKeywordSearchMovie = async (value, abortCtrl) => {
  const resps = await axios.get('/3/search/movie', {
    signal: abortCtrl.signal,
    params: { query: value, api_key: API_KEY },
  });
  return resps.data;
};

export const fetchGetMovieDetails = async (id, abortCtrl) => {
  const resps = await axios.get(`/3/movie/${id}`, {
    signal: abortCtrl.signal,
    params: { api_key: API_KEY },
  });
  return resps;
};

export const fetchGetMovieCredits = async (id, abortCtrl) => {
  const resps = await axios.get(`/3/movie/${id}/credits`, {
    signal: abortCtrl.signal,
    params: { api_key: API_KEY },
  });
  return resps;
};

export const fetchGetMovieReviews = async (id, abortCtrl) => {
  const resps = await axios.get(`/3/movie/${id}/reviews`, {
    signal: abortCtrl.signal,
    params: { api_key: API_KEY, page: 1 },
  });
  return resps;
};
