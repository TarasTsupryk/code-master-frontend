const mainFontFamily = "'Poppins', sans-serif";

const commonFontStyle = {
  "font-family": mainFontFamily,
};

const regularMixin = {
  ...commonFontStyle,
  "font-weight": "400",
};

const mediumMixin = {
  ...commonFontStyle,
  "font-weight": "500",
};

const semiBoldMixin = {
  ...commonFontStyle,
  "font-weight": "600",
};

export const fonts = {
  title1: {
    "font-size": "34px",
    "line-height": "60px",
    ...semiBoldMixin,
  },
  title2: {
    "font-size": "28px",
    "line-height": "44px",
    ...semiBoldMixin,
  },
  title3: {
    "font-size": "22px",
    "line-height": "22px",
    ...semiBoldMixin,
  },
  title4: {
    "font-size": "16px",
    "line-height": "auto",
    ...mediumMixin,
  },
  title5: {
    "font-size": "18px",
    "line-height": "22px",
    ...mediumMixin,
  },
  title6: {
    "font-size": "16px",
    "line-height": "22px",
    ...semiBoldMixin,
  },
  title7: {
    "font-size": "14px",
    "line-height": "22px",
    ...mediumMixin,
  },
  paragraph1: {
    "font-size": "16px",
    "line-height": "auto",
    ...regularMixin,
  },
  paragraph2: {
    "font-size": "14px",
    "line-height": "20px",
    ...regularMixin,
  },
  paragraph3: {
    "font-size": "12px",
    "line-height": "18px",
    ...regularMixin,
  },
};
