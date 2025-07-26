import { Box, Button, Text } from "@mantine/core";

import IconArrowRight from "@/components/icons/IconArrowRight";
import classes from "./index.module.css";

export default function Banner() {
  return (
    <section>
      <Box className={classes.wrapper}>
        <Box className={classes.content}>
          <Box className={classes.contentText} px={{ base: 20, md: 92 }}>
            <Text>Revitalize Your Body</Text>
            <Text fz="h4">Effective Ingredients for Visible Results</Text>
            <Text fz="xs" mt="xs">
              Our body products are rich in highly effective ingredients, achieve visible results, firm the skin and
              leave it feeling soft and supple. Fine textures that are quickly absorbed, non-greasy and in no way
              inferior to facial care. It’s time to give our body the same attention as our face.
            </Text>
            <Button color="white" variant="outline" mt="lg" rightSection={<IconArrowRight />}>
              Discover More
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
