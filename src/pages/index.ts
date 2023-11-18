import { RouteProps } from "react-router";
import ROUTES from "common/routes";

import HomePage from "./Home.page";
import LoginPage from "./Login.page";

type Page = RouteProps & {
}

export const PAGES: Page[] = [
  {
    path: ROUTES.HOME,
    Component: HomePage,
  },
  {
    path: ROUTES.LOGIN,
    Component: LoginPage,
  }
];
