import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const StyledLink = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  display: inline;

  &:focus {
    outline: none;
  }
`;

interface Props {
  to: string;
  children: React.ReactNode;
}

const Link: React.FC<Props> = ({ children, to }) => (
  <StyledLink to={to}>{children}</StyledLink>
);

export default Link;
