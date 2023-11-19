import styled from "styled-components";
import { Box } from "grommet";

export const StyledSidebarWrapper = styled(Box)`
  min-width: 300px;
`;

export const StyledSidebarContainer = styled(Box)`
  position: fixed;
  background: ${({ theme }) => theme.colors.gradient};
  padding: ${({ theme }) => theme.spacings.spacing16};
  height: 100vh;
  width: 300px;
  max-width: 300px
  margin-right: 300px;
`;
