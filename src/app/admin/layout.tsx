"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { AppShell, Box, Burger, Container, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// import { useUserAuth } from "@/queries/auth";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  // const { data } = useUserAuth();
  // console.log({ data });

  return (
    <AppShell
      padding="md"
      header={{ height: 40 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar>
        <Menu>
          {/* <Menu.Label>Application</Menu.Label> */}
          <Link href="dashboard">
            <Menu.Item>dashboard</Menu.Item>
          </Link>
          <Link href="banners">
            <Menu.Item>Banners</Menu.Item>
          </Link>
        </Menu>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
