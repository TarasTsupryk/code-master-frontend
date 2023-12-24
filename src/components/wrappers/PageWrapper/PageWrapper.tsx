import React from "react";
import { Box } from "grommet";
import styled from "styled-components";

const PageWithAnimation = styled(Box)`
  animation: 0.5s hideIn;

  @keyframes hideIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

interface Props {
  children?: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({ children }) => (
  <PageWithAnimation pad="spacing28">{children}</PageWithAnimation>
);

export default PageWrapper;
