import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";
import {Providers} from "@/Providers";
import {ThemeSwitcher} from "@/components/theme-switcher/ThemeSwitcher";
import {roboto} from "@/fonts";

export const metadata: Metadata = {
  title: "MovieHub",
  description: "MovieHub root layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} a`}>
      <Providers>
          <ThemeSwitcher/>
          {children}
      </Providers>
      </body>
    </html>
  );
}
