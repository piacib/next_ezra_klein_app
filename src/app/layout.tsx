"use client";
import "./globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "./lib/registry";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalStyles";
import { theme } from "@/styles/theme";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Ezra Klein Books",
  description: "All Ezra Klein Book Reccomendations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
