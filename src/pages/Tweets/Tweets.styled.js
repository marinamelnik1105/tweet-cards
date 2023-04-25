import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  margin: 20px;
  color: #373737;
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: 40px;
  width: 120px;
  padding: 10px;
  background-color: #5cd3a8;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
    transition-duration: 500ms;
  }
`;

export const P = styled.p`
  text-transform: uppercase;
  margin-left: 10px;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  margin: 10px;
  color: #373737;
  border-radius: 10px;
  height: 40px;
  width: 200px;
  padding: 10px;
  background-color: #5cd3a8;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  border: transparent;
  :hover {
    background-color: #4c2b9a;
    color: #ebd8ff;
  }
`;
