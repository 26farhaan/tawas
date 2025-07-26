import { ReactNode } from "react";
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { mantinetheme, resolver } from "../../mantine.theme";

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
// import "@mantine/dates/styles.css";
// import "@mantine/tiptap/styles.css";
// import "@mantine/dropzone/styles.css";
// import "@mantine/charts/styles.css";

import "@/styles/font.css";

import MantineProgressHandler from "./MantineProgressHandler";

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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* <meta name="description" content="Learn more about MyTaskApp and our mission to simplify task management." /> */}
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={mantinetheme} cssVariablesResolver={resolver}>
          <Notifications />
          <MantineProgressHandler />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
