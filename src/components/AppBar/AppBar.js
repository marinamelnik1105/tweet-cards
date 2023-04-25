import { Header, NavList, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/tweets">Tweets</StyledLink>
          </li>
        </NavList>
      </nav>
    </Header>
  );
};
