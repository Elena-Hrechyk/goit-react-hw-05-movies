import styled from 'styled-components';
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
