import React, { useMemo } from "react";
import routes from "common/routes";
import { HomeIcon, CourseIcon, HelpIcon, SettingIcon } from "components/icons";
import { SidebarItemProps } from "../components/SidebarItem/SidebarItem";

const useSidebarItems = () => {
  const sidebarItems: SidebarItemProps[] = useMemo(
    () => [
      {
        icon: <HomeIcon />,
        link: routes.HOME,
        title: "Home",
      },
      {
        icon: <CourseIcon />,
        link: routes.MY_COURSES,
        title: "My courses",
      },
      {
        icon: <HelpIcon />,
        link: routes.HELP,
        title: "Help & Support",
      },
      {
        icon: <SettingIcon />,
        link: routes.SETTINGS,
        title: "Settings",
      },
    ],
    []
  );

  return {
    sidebarItems,
  };
};

export default useSidebarItems;
