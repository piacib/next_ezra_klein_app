import "./globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "./lib/registry";

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
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
