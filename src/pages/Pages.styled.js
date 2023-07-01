import styled from 'styled-components';
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

// export const ItemMovie = styled.li`
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   gap: 8px;
//   align-items: center;
//   width: 200px;
//   text-align: center;
//   font-size: 16px;
//   font-weight: 600;
//   color: darkblue;
//   border-radius: 4px;
//   border: 1px solid darkblue;
// `;

// export const ImgPoster = styled.img`
//   padding: 2px;
//   border-radius: 4px;
//   margin-left: auto;
//   margin-right: auto;
//   height: 294px;
//   object-fit: cover;
// `;

// export const TitleMovie = styled.p`
//   padding: 2px;
//   text-transform: uppercase;
//   text-shadow: 2px 2px 2px lightblue;
// `;

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

