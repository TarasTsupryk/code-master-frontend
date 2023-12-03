import styled from "styled-components";
import { Box } from "grommet";

export const StyledHeader = styled(Box)`
  position: static;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) =>
    `${theme.spacings.spacing16} ${theme.spacings.spacing40}`};
  min-height: 100px;
  box-shadow: ${({ theme }) => theme.shadows.primary};
`;
