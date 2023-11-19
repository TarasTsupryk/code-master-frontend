import React from "react";
import { useLocation } from "react-router-dom";
import { StyledSidebarWrapper, StyledSidebarContainer } from "./Sidebar.styles";
import SidebarItem from "./components/SidebarItem/SidebarItem";
import useSidebarItems from "./hooks/useSidebarItems";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { sidebarItems } = useSidebarItems();

  return (
    <StyledSidebarWrapper>
      <StyledSidebarContainer>
        {sidebarItems.map((item) => (
          <SidebarItem
            icon={item.icon}
            title={item.title}
            link={item.link}
            isActive={item.link === pathname}
          />
        ))}
      </StyledSidebarContainer>
    </StyledSidebarWrapper>
  );
};

export default Sidebar;
