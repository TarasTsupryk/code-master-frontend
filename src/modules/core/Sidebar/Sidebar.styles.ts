import styled from "styled-components";
import { Box } from 'grommet';

export const StyledSidebarWrapper = styled(Box)`
  background: ${({ theme }) => theme.colors.gradient};
  padding: ${({ theme }) => theme.spacings.spacing16};
  height: 100vh;
  width: 300px;
`;
