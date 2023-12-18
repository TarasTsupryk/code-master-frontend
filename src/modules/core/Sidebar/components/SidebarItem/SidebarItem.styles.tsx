import styled from "styled-components";
import { Box } from "grommet";

export const StyledSidebarItem = styled(Box)<{ isActive?: boolean }>`
  padding: ${({ theme }) => theme.spacings.spacing16};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.rounds.round8};
  font-size: 14px;

  &:hover {
    ${({ theme, isActive }) => {
      if (!isActive) {
        return {
          backgroundColor: theme.colors.whiteTransparentS,
        };
      }
    }}
  }

  ${({ theme, isActive }) => {
    if (isActive) {
      return {
        backgroundColor: theme.colors.whiteTransparentM,
      };
    }
  }}

  & > svg {
    fill: ${({ theme }) => theme.colors.white};
    height: ${({ theme }) => theme.spacings.spacing20};
    width: ${({ theme }) => theme.spacings.spacing20};
  }
`;
