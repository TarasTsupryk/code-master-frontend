import React from "react";
import { Box } from "grommet";
import styled from "styled-components";

export const StyledButton = styled(Box)`
  padding: ${({ theme }) => theme.spacings.spacing12};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.rounds.round8};
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
`;

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
}

const Button: React.FC<Props> = ({ children, onClick, isLoading }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
