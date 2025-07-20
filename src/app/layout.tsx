import { ReactNode } from "react";
import { Metadata } from "next";
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { mantinetheme, resolver } from "../../mantine.theme";

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/notifications/styles.css";

// import "@mantine/dates/styles.css";
// import "@mantine/carousel/styles.css";
// import "@mantine/tiptap/styles.css";
// import "@mantine/dropzone/styles.css";
// import "@mantine/charts/styles.css";

import classes from "./index.module.css";
import MantineProgressHandler from "./MantineProgressHandler";

export const metadata: Metadata = {
  title: "Tawas",
  description: "Landing page for Tawas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <MantineProvider
          defaultColorScheme="dark"
          cssVariablesSelector="html"
          theme={mantinetheme}
          cssVariablesResolver={resolver}
        >
          <Notifications />
          <MantineProgressHandler />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
