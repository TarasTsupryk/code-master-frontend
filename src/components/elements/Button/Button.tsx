import React from "react";
import { Box } from "grommet";
import styled from "styled-components";

export const StyledButton = styled(Box)`
  padding: ${({ theme }) => theme.spacings.spacing12};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.rounds.round8};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 700;
`;

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<Props> = ({ children, onClick, isLoading, style }) => {
  return <StyledButton onClick={onClick} style={style}>{children}</StyledButton>;
};

export default Button;
