import { useParams, useLocation } from 'react-router-dom';
import { fetchGetMovieDetails } from 'helpers/api';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Details from 'components/Details';
import Loader from 'components/Loader';
import Error from 'components/Error';
import {
  Main,
  LinkGoBack,
  ListCastsReviews,
  ItemCastsReviews,
  LinkCastsReviews,
} from './Pages.styled';

const MovieDetails = () => {
  const [titleMovie, setTitelMovie] = useState('');
  const [annotation, setAnnotation] = useState('');
  const [poster, setPoster] = useState(null);
  const [movieGenres, setMovieGenres] = useState([]);
  const [voteAverage, setVoteAverage] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const clickGoTo = useRef(location.state?.from ?? '/movies');
  const abortCtrl = useRef();

  useEffect(() => {
    async function getMovieDetails() {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }
      abortCtrl.current = new AbortController();
      try {
        setError(null);
        setLoading(true);
        const movieDatails = await fetchGetMovieDetails(movieId, abortCtrl);
        const { title, poster_path, genres, overview, vote_average } =
          movieDatails.data;
        setTitelMovie(title);
        setAnnotation(overview);
        setPoster(poster_path);
        setMovieGenres(genres);
        setVoteAverage(vote_average);
      } catch (err) {
        if (err.code !== 'ERR_BAD_REQUEST') {
          setError('Ooops! Try again!');
        }
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
    return () => abortCtrl.current.abort();
  }, [movieId]);

  return (
    <Main>
      <LinkGoBack to={clickGoTo.current}>Go back</LinkGoBack>
      {loading && <Loader />}
      {error && <Error error={error} />}

      {!loading && !error && (
        <>
          <Details
            poster={poster}
            title={titleMovie}
            voteAverage={voteAverage}
            annotation={annotation}
            genres={movieGenres}
          />
          <h3>Additional information:</h3>
          <ListCastsReviews>
            <ItemCastsReviews>
              <LinkCastsReviews to="credits">Cast</LinkCastsReviews>
            </ItemCastsReviews>
            <ItemCastsReviews>
              <LinkCastsReviews to="reviews">Reviews</LinkCastsReviews>
            </ItemCastsReviews>
          </ListCastsReviews>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </Main>
  );
};

export default MovieDetails;
