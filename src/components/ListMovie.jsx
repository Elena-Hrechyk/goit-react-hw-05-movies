import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ItemMovie from './ItemMovie';
import { ListMovies } from 'pages/Pages.styled';

const ListMovie = ({ movies }) => {
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

ListMovie.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
export default ListMovie;
