import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieReviews } from 'helpers/api';
import { ListReviews, ItemReview, Author, Content } from 'pages/Pages.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const dataReviews = await fetchGetMovieReviews(movieId, page);
        console.log(dataReviews.data);
        setReviews(dataReviews.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    getMovieReviews();
  }, [movieId, page]);

  const getCurrentPage = () => {
    setPage(prevState => prevState + 1);
  };

  return (
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
  );
};
