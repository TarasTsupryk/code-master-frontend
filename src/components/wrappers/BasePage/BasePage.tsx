import React from 'react';
import { Box } from 'grommet'
import styled from 'styled-components';
import { Sidebar } from 'modules/core/Sidebar';

const StyledBasePage = styled(Box)`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.grayShade};
`;

interface Props {
  children?: React.ReactNode;
}

const BasePage: React.FC<Props> = ({
  children,
}) => (
  <StyledBasePage direction="row">
    <Sidebar />
    {children}
  </StyledBasePage>
);

export default BasePage;
