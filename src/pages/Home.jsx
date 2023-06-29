import { useState, useEffect, useRef } from 'react';

import { fetchTrendMovies } from 'helpers/api';
import Loader from 'components/Loader';
import ListMovie from 'components/ListMovie';
import { Main, TitelMain } from './Pages.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const abortCtrl = useRef();

  useEffect(() => {
    async function getTrendMovies() {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }
      abortCtrl.current = new AbortController();

      try {
        setError(null);
        setLoading(true);

        const trendMovies = await fetchTrendMovies(abortCtrl);

        const { results } = trendMovies;
        if (!results.length) {
          setError('Ooops! Try again!');
        }
        setMovies(results);
      } catch (err) {
        if (err.code !== 'ERR_CANCELED') {
          setError('Ooops! Try again!');
        }
      } finally {
        setLoading(false);
      }
    }
    getTrendMovies();

    return () => abortCtrl.current.abort();
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

export default Home;
