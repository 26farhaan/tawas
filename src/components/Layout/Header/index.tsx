"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Burger,
  Button,
  Container,
  Flex,
  Group,
  Paper,
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import IconMoonStars from "@/components/icons/IconMoon";
import IconSun from "@/components/icons/IconSun";
import { useUserAuth } from "@/queries/auth";
import classes from "./index.module.css";

const links = [
  { link: "/products", label: "Products" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export function UseHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const isLight = useComputedColorScheme() === "light";
  const [onTop, setOnTop] = useState(true);

  const { data } = useUserAuth();
  const name = data?.first_name + " " + data?.last_name;

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
        <Container size="xl" px={8}>
          <div className={classes.inner}>
            <Flex align="center" w="100%" hiddenFrom="sm">
              <Burger opened={opened} aria-label="Toggle navigation" onClick={toggle} size="sm" />
              <Switch
                ml="auto"
                size="md"
                color="dark.4"
                onLabel={<IconSun size={16} color="var(--mantine-color-yellow-4)" />}
                offLabel={<IconMoonStars size={16} color="var(--mantine-color-blue-6)" />}
                onClick={() => setColorScheme(isLight ? "dark" : "light")}
              />
              <Avatar name="Mohamad Farhan" color="initials" />
            </Flex>

            <Group justify="end" w="100%" visibleFrom="sm">
              <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                {items}
                <Switch
                  size="md"
                  color="dark.4"
                  onLabel={<IconMoonStars size={16} color="var(--mantine-color-blue-6)" />}
                  offLabel={<IconSun size={16} color="var(--mantine-color-yellow-4)" />}
                  onClick={() => setColorScheme(isLight ? "dark" : "light")}
                />
                <Box ml="xs">
                  {data?.email ? (
                    <Avatar alt={name} name={name} color="initials" />
                  ) : (
                    <Link href="/login">
                      <Button c="black" variant="transparent" size="compact-xs">
                        Login
                      </Button>
                    </Link>
                  )}
                </Box>
              </Group>
            </Group>
          </div>
        </Container>
      </Paper>
    </header>
  );
}
