import { Outlet } from 'react-router-dom';
import { Container, Header, NavLinks } from './App.styled';

const SharedLayout = () => {
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

export default SharedLayout;
