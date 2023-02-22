import { Outlet } from 'react-router-dom';
import { StyledLink, Ul, Li } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Ul>
            <Li>
              <StyledLink to="/">AddContactPage</StyledLink>
            </Li>
            <Li>
              <StyledLink to="filter">FilterPage</StyledLink>
            </Li>
          </Ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
