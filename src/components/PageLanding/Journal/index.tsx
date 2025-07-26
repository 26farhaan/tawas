import { Anchor, Box, Flex, Text } from "@mantine/core";

import IconArrowRight from "@/components/icons/IconArrowRight";
import CarouselJournal from "./carousel";

export default function Journal() {
  return (
    <Box py={100} px={{ md: 32 }}>
      <Text>Parsley Seed Skin Care</Text>
      <Text component="h2" fz="h2">
        Supreme Skin Fortification
      </Text>
      <Text>Discover our potent antioxidant-rich Parsley Seed Skin Care, perfect for all skin types.</Text>
      <CarouselJournal />
      <Box mt={64}>
        <Anchor href="#" target="_blank" rel="noopener noreferrer">
          <Flex c="black" align="center" gap={12}>
            <Text>All Blog Post</Text>
            <IconArrowRight size={18} />
          </Flex>
        </Anchor>
      </Box>
    </Box>
  );
}
