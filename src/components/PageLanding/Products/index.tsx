import { Box, Text } from "@mantine/core";

import CarouselProducts from "./carousel";

const Products = () => {
  return (
    <section>
      <Box py={100} px={{ md: 32 }}>
        <Text>Parsley Seed Skin Care</Text>
        <Text component="h2" fz="h2">
          Supreme Skin Fortification
        </Text>
        <Text>Discover our potent antioxidant-rich Parsley Seed Skin Care, perfect for all skin types.</Text>
        <CarouselProducts />
      </Box>
    </section>
  );
};

export default Products;
