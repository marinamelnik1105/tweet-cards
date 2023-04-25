import { HomePage, StyledLink, Text, TitlePage } from './Home.styled';

const Home = () => {
  return (
    <HomePage>
      <TitlePage>Tweet app</TitlePage>
      <ul>
        <li>
          <Text>Welcome!</Text>
        </li>
        <li>
          <Text>Do you like to follow interesting people?</Text>
        </li>
        <li>
          <Text>Then you are here</Text>
        </li>
      </ul>

      <StyledLink to="/tweets">Tweets</StyledLink>
    </HomePage>
  );
};
export default Home;
