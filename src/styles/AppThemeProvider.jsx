import React from "react";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { darkModeState } from "../state";
import { darkTheme, lightTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";

function AppThemeProvider({ children }) {
  const darkMode = useRecoilValue(darkModeState);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;

AppThemeProvider.propTypes = {
  children: PropTypes.node,
};
