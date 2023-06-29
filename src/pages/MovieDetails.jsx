import { useParams, useLocation } from 'react-router-dom';
import { fetchGetMovieDetails } from 'helpers/api';
import { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from './Pages.styled';
import Placeholder from '../img/placeholder-612x612.jpg';
import {
  LinkGoBack,
  BoxMovieDetails,
  TitleMovieDetails,
  ImgMovieDetails,
  ScoreMovieDetails,
  Overview,
  OverviewDescr,
  Genres,
  ListGenres,
  ItemGenres,
  ListCastsReviews,
  ItemCastsReviews,
  LinkCastsReviews,
} from './Pages.styled';

const MovieDetails = () => {
  const [titleMovie, setTitelMovie] = useState('');
  const [description, setDescription] = useState('');
  const [poster, setPoster] = useState(null);
  const [movieGenres, setMovieGenres] = useState([]);
  const [voteAverage, setVoteAverage] = useState(0);
  const { movieId } = useParams();
  const location = useLocation();
  const clickGoTo = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const movieDatails = await fetchGetMovieDetails(movieId);
        const { title, poster_path, genres, overview, vote_average } =
          movieDatails.data;
        setTitelMovie(title);
        setDescription(overview);
        setPoster(poster_path);
        setMovieGenres(genres);
        setVoteAverage(vote_average);
      } catch (err) {
        console.log(err);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <Main>
      <LinkGoBack to={clickGoTo.current}>Go back</LinkGoBack>
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
          <TitleMovieDetails>{titleMovie}</TitleMovieDetails>
          <ScoreMovieDetails>
            Score: {(voteAverage * 10).toFixed()}%
          </ScoreMovieDetails>
          <Overview>
            Overview:
            <OverviewDescr>{description}</OverviewDescr>
          </Overview>
          <Genres>Genres:</Genres>
          <ListGenres>
            {movieGenres.map(({ id, name }) => {
              return <ItemGenres key={id}>{name}</ItemGenres>;
            })}
          </ListGenres>
        </div>
      </BoxMovieDetails>
      <h3>Additional information:</h3>
      <ListCastsReviews>
        <ItemCastsReviews>
          <LinkCastsReviews to="credits">Cast</LinkCastsReviews>
        </ItemCastsReviews>
        <ItemCastsReviews>
          <LinkCastsReviews to="reviews">Reviews</LinkCastsReviews>
        </ItemCastsReviews>
      </ListCastsReviews>
      <Outlet />
    </Main>
  );
};

export default MovieDetails;
