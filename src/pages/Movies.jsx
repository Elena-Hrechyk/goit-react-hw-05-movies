import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Main, SearchForm, ButtonSearch, InputSearch } from './Pages.styled';
import { fetchKeywordSearchMovie } from 'helpers/api';
import { Loader } from 'components/Loader';
import { ListMovie } from 'components/ListMovie';
import { Error } from 'components/Error';

const schema = yup.object().shape({
  search: yup.string().required(),
});

const initialValues = {
  search: '',
};

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  // const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    async function getSearchMovies() {
      try {
        setError(null);
        setLoading(true);
        const searchMoviesArr = await fetchKeywordSearchMovie(query);
        const { results } = searchMoviesArr;
        console.log(searchMoviesArr);

        if (!results.length) {
          setError('Ooops! Try again!');
        }
        setSearchMovies(results);
      } catch (err) {
        setError('Ooops! Try again!');
      } finally {
        setLoading(false);
      }
    }

    getSearchMovies();
  }, [query]);

  const onSubmit = (values, { resetForm }) => {
    const value = values.search.trim().toLowerCase();
    onSearch(value);
    resetForm();
  };

  const onSearch = value => {
    if (value === '') return;
    if (query === value) {
      alert(`The request for "${value}" has already been completed`);
      return;
    }

    setSearchParams({ query: value });
    setSearchMovies([]);
  };

  return (
    <Main>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <SearchForm>
          <InputSearch
            type="text"
            name="search"
            placeholder="Search images and photos..."
          />
          <ButtonSearch type="submit">Search</ButtonSearch>
        </SearchForm>
      </Formik>
      {searchMovies.length > 0 && <ListMovie movies={searchMovies} />}
      {loading && !error && <Loader />}

      {error && <Error error={error} />}
    </Main>
  );
};
