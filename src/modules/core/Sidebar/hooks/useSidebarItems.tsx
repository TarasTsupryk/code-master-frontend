import React, { useMemo } from "react";
import routes from "common/routes";
import { HomeIcon, CourseIcon, HelpIcon, SettingIcon, MessageIcon2, ExitIcon } from "components/icons";
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
        icon: <MessageIcon2 />,
        link: routes.MY_COURSES,
        title: "Повідомлення",
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
      {
        icon: <ExitIcon height={16} width={16} />,
        link: routes.SETTINGS,
        title: "Вихід",
        isBottom: true,
      },
    ],
    []
  );

  return {
    sidebarItems,
  };
};

export default useSidebarItems;
