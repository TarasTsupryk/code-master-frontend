import { Box } from "grommet";

import styled from "styled-components";

export const ActionBtn = styled(Box)`
  padding: ${({ theme }) => theme.spacings.spacing12};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.rounds.round8};
  flex-direction: row;
`;

export const FileBtn = styled(Box)`
  border-radius: 6px 6px 0px 0px;
  border: 2px solid ${({ theme }) => theme.colors.textSecondary};
  border-bottom: none;
  padding: ${({ theme }) => theme.spacings.spacing4}
    ${({ theme }) => theme.spacings.spacing8};
  background: lightgray;
`;
