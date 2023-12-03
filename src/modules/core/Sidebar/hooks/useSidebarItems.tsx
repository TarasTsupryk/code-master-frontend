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
        title: "Головна",
      },
      {
        icon: <CourseIcon />,
        link: routes.MY_COURSES,
        title: "Мої курси",
      },
      {
        icon: <HelpIcon />,
        link: routes.HELP,
        title: "Допомога",
      },
      {
        icon: <SettingIcon />,
        link: routes.SETTINGS,
        title: "Налаштування",
      },
    ],
    []
  );

  return {
    sidebarItems,
  };
};

export default useSidebarItems;
