import type { Metadata } from "next";
import { ThemeProvider } from "./_lib/theme-provider";
import Navbar from "./component/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact Manager",
  description: "Manage your contacts easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
