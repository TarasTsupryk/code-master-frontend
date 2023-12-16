import { RouteProps } from "react-router";
import ROUTES from "common/routes";

import HomePage from "./Home.page";
import MyCoursesPage from "./MyCourses.page";
import HelpPage from "./Help.page";
import SettingsPage from "./Settings.page";
import LoginPage from "./Login.page";
import TaskPage from "./Task.Page";

type Page = RouteProps & {
}

export const PAGES: Page[] = [
  {
    path: ROUTES.HOME,
    Component: HomePage,
  },
  {
    path: ROUTES.MY_COURSES,
    Component: MyCoursesPage,
  },
  {
    path: ROUTES.HELP,
    Component: HelpPage,
  },
  {
    path: ROUTES.SETTINGS,
    Component: SettingsPage,
  },
  {
    path: ROUTES.LOGIN,
    Component: LoginPage,
  },
  {
    path: ROUTES.TASK,
    Component: TaskPage,
  }
];
