"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Burger, Container, Group, Paper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./index.module.css";

const links = [
  { link: "/products", label: "Products" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export function UseHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <header>
      <Paper className={classes.navbar} withBorder shadow="sm">
        <Container size="xl" p={0}>
          <div className={classes.inner}>
            <Group>
              <Burger opened={opened} aria-label="Toggle navigation" onClick={toggle} size="sm" hiddenFrom="sm" />
            </Group>

            <Group>
              <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                {items}
              </Group>
            </Group>
          </div>
        </Container>
      </Paper>
    </header>
  );
}
