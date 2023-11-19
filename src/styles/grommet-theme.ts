import { ThemeType } from "grommet";
import { theme } from "./theme";

export const grommetTheme: ThemeType = {
  global: {
    colors: theme.colors,
    size: theme.spacings,
    edgeSize: {
      none: "0px",
      ...theme.spacings,
      ...theme.rounds,
    },
  },
};
