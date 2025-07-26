import { Box, Flex, Text } from "@mantine/core";

import classes from "./index.module.css";

export default function Caption() {
  return (
    <section>
      <Flex align="center" justify="center" direction="column" className={classes.root}>
        <Box ta="center" maw={{ md: 500 }}>
          <Text component="h2" fz={{ base: "h3", md: "h4" }}>
            Countless answers lie within nature's genius, awaiting our exploration and engagement.
          </Text>
          <Text size="xs" mt="sm">
            THE FUTURE OF NATURAL SKINCARE
          </Text>
        </Box>
      </Flex>
    </section>
  );
}
