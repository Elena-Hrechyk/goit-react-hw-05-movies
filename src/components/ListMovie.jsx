import { useLocation } from 'react-router-dom';
import { ItemMovie } from './ItemMovie';
import { ListMovies } from 'pages/Pages.styled';

export const ListMovie = ({ movies }) => {
  const location = useLocation();
  return (
    <ListMovies>
      {movies.map(({ id, title, poster_path }) => (
        <ItemMovie
          id={id}
          poster={poster_path}
          title={title}
          location={location}
        />
      ))}
    </ListMovies>
  );
};
