import { ThemeType } from "grommet";
import { theme } from "./theme";
import { mainFontFamily } from "./fonts";

export const grommetTheme: ThemeType = {
  global: {
    colors: {
      focus: 'transparent',
      ...theme.colors
    },
    size: theme.spacings,
    font: { family: mainFontFamily },
    edgeSize: {
      none: "0px",
      ...theme.spacings,
      ...theme.rounds,
    },
  },
  text: {
    xsmall: {
      size: '12px',
      height: '18px',
      // maxWidth: '10px',
    },
    small: {
      size: '14px',
      height: '20px',
      // maxWidth: '10px',
    },
    medium: {
      size: '16px',
      height: 'auto',
      // maxWidth: '10px',
    },
    large: {
      size: '18px',
      height: '22px',
      // maxWidth: '10px',
    },
    xlarge: {
      size: '22px',
      height: '22px',
      // maxWidth: '10px',
    },
    xxlarge: {
      size: '28px',
      height: '44px',
      // maxWidth: '10px',
    },
    '2xl': {
      size: '34px',
      height: '60px',
      // maxWidth: '10px',
    },
    '3xl': {
      size: '12px',
      height: '18px',
      // maxWidth: '10px',
    },
    // '4xl': fontSize,
    // '5xl': fontSize,
    // '6xl': fontSize,
  },
};
