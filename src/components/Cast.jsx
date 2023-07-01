import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieCredits } from 'helpers/api';
import Error from './Error';
import DefaultAvatar from 'img/placeholder-avatar-png.png';
import {
  CastsList,
  CastItem,
  CastImg,
  CastName,
  CastRole,
} from './Cast.styled';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const abortCtrl = useRef();

  useEffect(() => {
    async function getMovieCasts() {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }
      abortCtrl.current = new AbortController();
      try {
        setError(null);
        const dataCasts = await fetchGetMovieCredits(movieId, abortCtrl);

        setCasts(dataCasts.data.cast);
      } catch (err) {
        if (err.code !== 'ERR_BAD_REQUEST') {
          setError('Ooops! Try again!');
        }
      }
    }
    getMovieCasts();
    return () => abortCtrl.current.abort();
  }, [movieId]);

  return (
    <>
      {error && <Error error={error} />}
      <CastsList>
        {casts.length > 0 &&
          casts.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                {profile_path ? (
                  <CastImg
                    src={`https://image.tmdb.org/t/p/original${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <CastImg src={DefaultAvatar} alt={name} />
                )}
                <CastName>{name}</CastName>
                <CastRole>{character}</CastRole>
              </CastItem>
            );
          })}
      </CastsList>
    </>
  );
};

export default Cast;
