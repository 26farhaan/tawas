import { Anchor, Box, Flex, Text } from "@mantine/core";

import IconArrowRight from "@/components/icons/IconArrowRight";
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
        <Box mt={64}>
          <Anchor href="#" target="_blank" rel="noopener noreferrer">
            <Flex c="black" align="center" gap={12}>
              <Text>All products</Text>
              <IconArrowRight size={18} />
            </Flex>
          </Anchor>
        </Box>
      </Box>
    </section>
  );
};

export default Products;
