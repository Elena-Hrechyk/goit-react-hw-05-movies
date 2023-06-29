import { Outlet } from 'react-router-dom';
import { Container, Header, NavLinks } from './App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavLinks to="/" end>
            Home
          </NavLinks>
          <NavLinks to="/movies">Movies</NavLinks>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
