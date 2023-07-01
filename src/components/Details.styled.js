import styled from 'styled-components';

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
