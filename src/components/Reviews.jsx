import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieReviews } from 'helpers/api';
import Error from './Error';
import { ListReviews, ItemReview, Author, Content } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const abortCtrl = useRef();

  useEffect(() => {
    async function getMovieReviews() {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();
      try {
        setError(null);

        const dataReviews = await fetchGetMovieReviews(movieId, abortCtrl);
        setReviews(dataReviews.data.results);
      } catch (err) {
        if (err.code !== 'ERR_BAD_REQUEST') {
          setError('Ooops! Try again!');
        }
      }
    }
    getMovieReviews();
    return () => abortCtrl.current.abort();
  }, [movieId]);

  return (
    <>
      {error && <Error error={error} />}

      <ListReviews>
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id }) => {
            return (
              <ItemReview key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </ItemReview>
            );
          })
        ) : (
          <li>We don't have any reviews for this movie</li>
        )}
      </ListReviews>
    </>
  );
};

export default Reviews;
