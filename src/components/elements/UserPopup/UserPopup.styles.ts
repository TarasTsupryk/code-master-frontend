import styled from "styled-components";
import { Image } from "grommet";

export const UserLogo = styled(Image)`
  border-radius: 100%;
  height: ${({ theme }) => theme.spacings.spacing40};
  width: ${({ theme }) => theme.spacings.spacing40};
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.shadows.image};
`;
