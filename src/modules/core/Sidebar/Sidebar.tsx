import React from "react";
import { useLocation } from 'react-router-dom';
import { StyledSidebarWrapper } from "./Sidebar.styles";
import SidebarItem from "./components/SidebarItem/SidebarItem";
import useSidebarItems from './hooks/useSidebarItems';

const Sidebar = () => {
  const { pathname } = useLocation();
  const { sidebarItems } = useSidebarItems();

  return (
    <StyledSidebarWrapper>
      {sidebarItems.map((item) => (
        <SidebarItem
          icon={item.icon}
          title={item.title}
          link={item.link}
          isActive={item.link === pathname}
        />
      ))}
    </StyledSidebarWrapper>
  );
};

export default Sidebar;
