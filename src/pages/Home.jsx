import { useState, useEffect } from 'react';

import { fetchTrendMovies } from 'helpers/api';
import { Loader } from 'components/Loader';
import { ListMovie } from 'components/ListMovie';
import { Main, TitelMain } from './Pages.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTrendMovies() {
      try {
        setError(null);
        setLoading(true);

        const trendMovies = await fetchTrendMovies();

        const { results } = trendMovies;
        if (!results.length) {
          setError('Ooops! Try again!');
        }
        setMovies(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Ooops! Try again!');
        }
      } finally {
        setLoading(false);
      }
    }
    getTrendMovies();
  }, []);

  return (
    <Main>
      <TitelMain>Tranding today</TitelMain>
      {movies.length > 0 && <ListMovie movies={movies} />}
      {loading && <Loader />}
      {error && <h2>{error}</h2>}
    </Main>
  );
};
