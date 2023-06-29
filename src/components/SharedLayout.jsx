import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './Loader';
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
