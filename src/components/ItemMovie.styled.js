import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const ImgMovieSearch = styled.img`
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  margin-bottom: 10px;
  height: 294px;
  object-fit: cover;
`;

export const TitleMovieSearch = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 5px;
`;
