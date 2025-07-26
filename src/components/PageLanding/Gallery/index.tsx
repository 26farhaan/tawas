import Image from "next/image";
import { Box, Button, Flex, Grid, GridCol, Text } from "@mantine/core";

import IconArrowRight from "@/components/icons/IconArrowRight";
import classes from "./index.module.css";

export default function Gallery() {
  return (
    <Box py={{ base: 32, md: 100 }} className={classes.root}>
      <Flex align="center" justify="center" h={{ md: 600 }}>
        <Box ta="center" w={{ md: 800 }}>
          <Text fz="h4">Gallery</Text>
          <Grid mt="md" px={{ base: 12, md: 0 }}>
            {[1, 2, 3, 4, 1, 2].map((data, i) => (
              <GridCol key={i} span={4}>
                <Image
                  className={classes.image}
                  src={`/images/product-${data}.png`}
                  alt={`Gallery Image ${data}`}
                  width={300}
                  height={300}
                  layout="responsive"
                />
              </GridCol>
            ))}
          </Grid>
          <Button mt="lg" color="grey" variant="outline" rightSection={<IconArrowRight size={20} />}>
            More
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
