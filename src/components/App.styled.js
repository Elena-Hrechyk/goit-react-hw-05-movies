import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  /* padding: 0 16px; */
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 8px 300px;
  margin-bottom: 16px;
  background-color: blue;
  color: white;
  border-bottom: 2px solid grey;

  > nav {
    display: flex;
  }
`;

export const NavLinks = styled(NavLink)`
  padding: 4px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    color: darkblue;
    background-color: yellow;
    border: 2px solid darkblue;
  }
`;
