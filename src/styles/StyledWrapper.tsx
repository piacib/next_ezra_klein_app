import React from "react";
import GlobalStyle from "@/styles/globalStyles";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
const StyledWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledWrapper;
