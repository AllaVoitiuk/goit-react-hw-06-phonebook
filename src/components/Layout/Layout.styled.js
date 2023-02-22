import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #237597;
  font-weight: 500;
  font-size: 18px;

  &.active {
    color: #fb6fa5;
  }
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  display: block;
  width: 150px;
`;
