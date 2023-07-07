import React from "react";
import { theme } from "./theme";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";

const StyleWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleWrapper;
