import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieCredits } from 'helpers/api';
import DefaultAvatar from 'img/placeholder-avatar-png.png';
import {
  CastsList,
  CastItem,
  CastImg,
  CastName,
  CastRole,
} from '../pages/Pages.styled';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCasts() {
      try {
        const dataCasts = await fetchGetMovieCredits(movieId);

        setCasts(dataCasts.data.cast);
      } catch (err) {
        console.log(err);
      }
    }
    getMovieCasts();
  }, [movieId]);

  return (
    <CastsList>
      {casts.map(({ id, profile_path, name, character }) => {
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
  );
};

export default Cast;
