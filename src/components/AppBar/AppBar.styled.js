import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  height: 80px;
  width: 100%;
  background-color: #5cd3a8;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 30px;
  color: #52319f;
  font-weight: 600;
`;

export const NavList = styled.ul`
  display: flex;
`;
export const StyledLink = styled(NavLink)`
  margin: 5px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active,
  :hover {
    color: #ebd8ff;
  }
`;
