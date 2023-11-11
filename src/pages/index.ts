import { RouteProps } from "react-router";
import ROUTES from "common/routes";

import HomePage from "./Home.page";

export const PAGES: RouteProps[] = [
  {
    path: ROUTES.HOME,
    Component: HomePage,
  },
];
