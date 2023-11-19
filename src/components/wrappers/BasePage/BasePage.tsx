import React from "react";
import { Box } from "grommet";
import styled from "styled-components";
import { Sidebar } from "modules/core/Sidebar";
import { Header } from "modules/core/Header";

const StyledBasePage = styled(Box)`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.grayShade};
`;

interface Props {
  children?: React.ReactNode;
}

const BasePage: React.FC<Props> = ({ children }) => (
  <StyledBasePage direction="row">
    <Sidebar />
    <Box width="100%">
      <Header />
      {children}
    </Box>
  </StyledBasePage>
);

export default BasePage;
