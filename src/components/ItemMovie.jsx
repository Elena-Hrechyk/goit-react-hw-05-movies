import PropTypes from 'prop-types';
import Placeholder from 'img/placeholder-612x612.jpg';
import {
  ItemMovieSearch,
  ImgMovieSearch,
  LinkMovie,
  TitleMovieSearch,
} from 'pages/Pages.styled';

const ItemMovie = ({ id, title, poster, location }) => {
  return location.pathname === '/movies' ? (
    <ItemMovieSearch key={id}>
      <LinkMovie to={`${id}`} state={{ from: location }}>
        {poster ? (
          <ImgMovieSearch
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt="Movie poster"
          />
        ) : (
          <ImgMovieSearch src={Placeholder} alt="Movie poster" />
        )}
        <TitleMovieSearch>{title}</TitleMovieSearch>
      </LinkMovie>
    </ItemMovieSearch>
  ) : (
    <ItemMovieSearch key={id}>
      <LinkMovie to={`movies/${id}`} state={{ from: location }}>
        {poster ? (
          <ImgMovieSearch
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt="Movie poster"
          />
        ) : (
          <ImgMovieSearch src={Placeholder} alt="Movie poster" />
        )}
        <TitleMovieSearch>{title}</TitleMovieSearch>
      </LinkMovie>
    </ItemMovieSearch>
  );
};

ItemMovie.prototypev = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  location: PropTypes.object,
};

export default ItemMovie;
