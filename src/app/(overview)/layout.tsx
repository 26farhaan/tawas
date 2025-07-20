import { ReactNode } from "react";
import { Container } from "@mantine/core";

import { UseHeader } from "@/components/Layout/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <UseHeader />
      <Container size="xl">{children}</Container>
    </>
  );
}
