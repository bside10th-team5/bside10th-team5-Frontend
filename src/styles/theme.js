export const GNB_H = 80;
export const INPUT_H = 50;
export const WHITE = "#FFFFFF";
export const GRAY100 = "#EFEFEF";
export const GRAY200 = "#FBFBFB";
export const GRAY300 = "#C8C8C8";
export const GRAY500 = "#949494";
export const GRAY700 = "#555555";
export const GRAY900 = "#111111";
export const ORANGE = "#FF5A00";

const defaultTheme = {
  color: {
    orange: "#FF5A00",
    yellow: "#FF9F00",
    green: "#03C348",
    blue: "#0B70FE",
    gray100: "#EFEFEF",
    gray300: "#C8C8C8",
    gray500: "#949494",
    gray700: "#555555",
    gray900: "#111111",
    disabled: "#E4E4E4",
  },
  opacity: {
    normal: "100%",
    hover: "70%",
    pressed: "50%",
  },
};

const light = {
  // darkmode 지원시
  bg: {},
  text: {},
};

const dark = {
  bg: {},
  text: {},
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
