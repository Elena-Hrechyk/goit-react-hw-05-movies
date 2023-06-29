import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchKeywordSearchMovie } from 'helpers/api';
import FormSearchMovies from 'components/FormSearchMovies';
import Loader from 'components/Loader';
import ListMovie from 'components/ListMovie';
import Error from 'components/Error';
import { Main } from './Pages.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const abortCtrl = useRef();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    async function getSearchMovies() {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }
      abortCtrl.current = new AbortController();
      try {
        setError(null);
        setLoading(true);
        const searchMoviesArr = await fetchKeywordSearchMovie(query, abortCtrl);
        const { results } = searchMoviesArr;

        if (!results.length) {
          setError('Ooops! Try again!');
        }
        setMovies(results);
      } catch (err) {
        if (err.code !== 'ERR_BAD_REQUEST') {
          setError('Ooops! Try again!');
        }
      } finally {
        setLoading(false);
      }
    }

    getSearchMovies();

    return () => abortCtrl.current.abort();
  }, [query]);

  const onSearch = value => {
    if (value === '') return;
    if (query === value) {
      alert(`The request for "${value}" has already been completed`);
      return;
    }

    setSearchParams({ query: value });
    setMovies([]);
  };

  return (
    <Main>
      <FormSearchMovies onSearch={onSearch} />
      {movies.length > 0 && <ListMovie movies={movies} />}
      {loading && !error && <Loader />}
      {error && <Error error={error} />}
    </Main>
  );
};

export default Movies;
