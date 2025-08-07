import { Box, Text } from "@mantine/core";

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
    </Box>
  );
}
