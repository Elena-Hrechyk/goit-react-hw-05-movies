import styled from 'styled-components';

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
