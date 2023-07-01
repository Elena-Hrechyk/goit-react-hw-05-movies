import PropTypes from 'prop-types';
import Placeholder from '../img/placeholder-612x612.jpg';

import {
  BoxMovieDetails,
  TitleMovieDetails,
  ImgMovieDetails,
  ScoreMovieDetails,
  Overview,
  OverviewDescr,
  Genres,
  ListGenres,
  ItemGenres,
} from './Details.styled';

const Details = ({ poster, title, voteAverage, annotation, genres }) => {
  return (
    <BoxMovieDetails>
      {poster ? (
        <ImgMovieDetails
          src={`https://image.tmdb.org/t/p/original${poster}`}
          alt="Poster movie"
        />
      ) : (
        <ImgMovieDetails
          src={Placeholder}
          alt="Poster movie"
          height="448"
          width="300"
        />
      )}
      <div>
        <TitleMovieDetails>{title}</TitleMovieDetails>
        <ScoreMovieDetails>
          Score: {(voteAverage * 10).toFixed()}%
        </ScoreMovieDetails>
        <Overview>
          Overview:
          <OverviewDescr>{annotation}</OverviewDescr>
        </Overview>
        <Genres>Genres:</Genres>
        <ListGenres>
          {genres.map(({ id, name }) => {
            return <ItemGenres key={id}>{name}</ItemGenres>;
          })}
        </ListGenres>
      </div>
    </BoxMovieDetails>
  );
};

Details.prototype = {
  title: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  annotation: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Details;
