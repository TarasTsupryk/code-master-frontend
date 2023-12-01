import React from "react";
import { Box } from "grommet";
import { Link } from "components/elements/Link";
import { theme } from "styles/theme";
import { StyledSidebarItem } from "./SidebarItem.styles";

export interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  link,
  isActive,
}) => {
  return (
    <Link to={link}>
      <StyledSidebarItem isActive={isActive} direction="row">
        {icon}
        <Box justify="center" margin={{ left: theme.spacings.spacing16 }}>{title}</Box>
      </StyledSidebarItem>
    </Link>
  );
};

export default SidebarItem;
