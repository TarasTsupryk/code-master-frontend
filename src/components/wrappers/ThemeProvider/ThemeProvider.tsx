import React from "react";
import { Grommet } from "grommet";
import { ThemeProvider } from "styled-components";
import { grommetTheme } from "styles/grommet-theme";
import { theme } from "styles/theme";

interface Props {
  children: React.ReactNode;
}

const OwnThemeProvider: React.FC<Props> = ({ children }) => (
  <Grommet theme={grommetTheme}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Grommet>
);

export default OwnThemeProvider;
