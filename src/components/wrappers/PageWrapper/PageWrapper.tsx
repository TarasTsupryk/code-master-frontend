import React from "react";
import { Box } from "grommet";

interface Props {
  children?: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({ children }) => (
  <Box pad="spacing28">{children}</Box>
);

export default PageWrapper;
