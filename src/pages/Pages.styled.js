import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

// Home ==========================================
export const Main = styled.main`
  width: 1310px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const TitelMain = styled.h2`
  text-align: center;
  font-size: 30px;
`;

export const ListMovies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-left: auto;
  margin-right: auto;
  padding-inline-start: 0px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ItemMovie = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  width: 200px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: darkblue;
  border-radius: 4px;
  border: 1px solid darkblue;
`;

export const ImgPoster = styled.img`
  padding: 2px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  height: 294px;
  object-fit: cover;
`;

export const TitleMovie = styled.p`
  padding: 2px;
  text-transform: uppercase;
  text-shadow: 2px 2px 2px lightblue;
`;

// Movies ==========================================
export const SearchForm = styled(Form)`
  width: 400px;
  display: flex;

  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonSearch = styled.button`
  width: auto;
  height: 36px;
  margin-left: 15px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: white;
  border: 2px solid blue;
  background-color: blue;
  border-radius: 4px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: yellow;
    color: blue;
    box-shadow: 2px 2px 2px #31463c6e;
  }
`;

export const InputSearch = styled(Field)`
  width: 100%;
  height: 36px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border: 2px solid blue;

  border-radius: 5px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

// Movies search list ==========================================

export const ImgMovieSearch = styled.img`
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  margin-bottom: 10px;
  height: 294px;
  object-fit: cover;
`;

export const ItemMovieSearch = styled.li`
  border-radius: 4px;
  padding: 2px;
  border: 2px solid darkblue;
  width: 200px;
  text-align: center;
  color: darkblue;
  transition: transform 250ms linear;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const LinkMovie = styled(Link)`
  display: block;
  color: darkblue;
  text-decoration: none;
  transition: text-decoration 250ms linear, color 250ms liner,
    font-weigth 250ms liner;
  &:hover,
  &:focus {
    text-decoration: underline;
    color: blue;
    font-weight: 600;
  }
`;

export const TitleMovieSearch = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 5px;
`;

// Movie Details ====================================

export const LinkGoBack = styled(Link)`
  display: block;
  width: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: blue;
  border: 2px solid blue;
  border-radius: 4px;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    background-color: yellow;
    color: blue;
    box-shadow: 2px 2px 2px #31463c6e;
  }
`;

export const BoxMovieDetails = styled.div`
  display: flex;
  grid-gap: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  border-top-style: groove;
  border-bottom-style: groove;
`;

export const ImgMovieDetails = styled.img`
  width: 300px;
  height: 448px;
  object-fit: cover;
  border: 2px solid darkblue;
  border-radius: 4px;
`;

export const TitleMovieDetails = styled.h3`
  font-size: 24px;
  margin: 0;
  margin-bottom: 20px;
`;

export const ScoreMovieDetails = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
`;

export const Overview = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
`;

export const OverviewDescr = styled.span`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
`;

export const Genres = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
`;

export const ListGenres = styled.ul`
  display: flex;
  grid-gap: 20px;
  flex-wrap: wrap;
  margin: 0;
  padding-left: 20px;
`;

export const ItemGenres = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
`;

export const ListCastsReviews = styled.ul`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  border-bottom-style: groove;
`;

export const ItemCastsReviews = styled.li`
  margin-bottom: 0;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const LinkCastsReviews = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  transition: text-decoration 250ms linear, color 250ms linear;
  &:hover,
  &:focus {
    text-decoration: underline;
    color: blue;
  }
`;

// Casts ==============================================

export const CastsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 20px;
  margin-top: 30px;
  padding: 0;
`;

export const CastItem = styled.li`
  width: 178px;
  padding: 5px;
  text-align: center;
  border-radius: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  /* border: 1px solid #32a1ce; */
`;

export const CastImg = styled.img`
  width: 170px;
  height: 255px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const CastName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
`;

export const CastRole = styled.p`
  font-size: 16px;
  margin: 0;
  margin-bottom: 10px;
`;

// Reviews ========================================

export const ListReviews = styled.ul`
  padding: 0;
`;

export const ItemReview = styled.li`
  padding: 15px;
  border: 2px solid lightblue;
  border-radius: 8px;
  transition: border 250ms linear;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  &:hover,
  &:focus {
    border: 2px solid darkblue;
  }
`;

export const Author = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Content = styled.p`
  margin: 0;
  line-height: 1.2;
`;

// ERROR ========================================
export const BoxError = styled.div`
  margin-top: 50px;
`;

export const TitleError = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
`;
export const ImgError = styled.img`
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
`;
