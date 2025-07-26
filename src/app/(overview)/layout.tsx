import { ReactNode } from "react";
import { Box, Container } from "@mantine/core";

import { UseFooter } from "@/components/Layout/Footer";
import { UseHeader } from "@/components/Layout/Header";
import classes from "./layout.module.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Box className={classes.root}>
      <UseHeader />
      <Container size="xl" px="sm" mt={{ base: 46, md: 48 }}>
        {children}
      </Container>
      <UseFooter />
    </Box>
  );
}
