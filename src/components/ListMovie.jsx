import { useLocation } from 'react-router-dom';
import ItemMovie from './ItemMovie';
import { ListMovies } from 'pages/Pages.styled';

const ListMovie = ({ movies }) => {
  const location = useLocation();
  return (
    <ListMovies>
      {movies.map(({ id, title, poster_path }) => (
        <ItemMovie
          key={id}
          poster={poster_path}
          title={title}
          location={location}
        />
      ))}
    </ListMovies>
  );
};
export default ListMovie;
