import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

interface Props {
  children: React.ReactNode;
}

const OwnThemeProvider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default OwnThemeProvider;
