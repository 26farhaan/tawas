import { Box, Text } from "@mantine/core";

import ListProducts from "@/components/PageProducts/ListProducts";

export default function Products() {
  return (
    <main>
      <section>
        <Box pt="lg">
          <Text>Parsley Seed Skin Care</Text>
          <Text component="h1" fz="h2">
            Supreme Skin Fortification
          </Text>
          <ListProducts />
        </Box>
      </section>
    </main>
  );
}
