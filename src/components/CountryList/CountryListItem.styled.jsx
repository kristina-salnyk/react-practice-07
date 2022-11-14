import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
`;

export const Flag = styled.img`
  padding: 15px;
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-style: normal;
  color: white;
  text-align: center;
`;
