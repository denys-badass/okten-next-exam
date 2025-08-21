import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/app/provider";
import {ColorModeButton} from "@/components/ui/color-mode";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "MovieHub",
  description: "Movie catalog title",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
            <main>
                <ColorModeButton/>
                {children}
            </main>
        </Provider>
      </body>
    </html>
  );
}
