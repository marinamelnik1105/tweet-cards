import styled from 'styled-components';
import bcgImage from '../../images/FollowMeOnTwitter.jpg';
import { NavLink } from 'react-router-dom';

export const HomePage = styled.section`
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #52319f;
  text-shadow: 1px 1px 2px #5cd3a8, 0 0 1em #5cd3a8, 0 0 0.2em #5cd3a8;
  background-image: url('${bcgImage}');
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TitlePage = styled.h1`
  font-weight: 600;
  font-size: 60px;
  margin: 20px;
`;

export const Text = styled.p`
  margin: 5px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;

export const StyledLink = styled(NavLink)`
  margin: 5px;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  border-radius: 10px;
  height: 50px;
  width: 150px;
  padding: 15px;
  background-color: #5cd3a8;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
    transition-duration: 500ms;
  }
`;
