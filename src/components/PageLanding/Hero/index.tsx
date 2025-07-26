"use client";

import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { Box, Button, Flex, Text } from "@mantine/core";

import IconArrowRight from "@/components/icons/IconArrowRight";
import classes from "./index.module.css";

export function Hero() {
  return (
    <section>
      <Carousel
        withIndicators
        withControls={false}
        nextControlProps={{ "aria-label": "Next slide" }}
        previousControlProps={{ "aria-label": "Previous slide" }}
      >
        {[1, 2, 3].map((item) => (
          <Carousel.Slide key={item}>
            <Flex direction="column">
              <Image
                className={classes.image}
                src="/images/banner.png"
                alt="Deodoran Tawas Alami"
                layout="responsive"
                width={1200}
                height={630}
              />
              <Box className={classes.contentWrapper}>
                <Box className={classes.content}>
                  <Text>Treat Your Body Like Your Face</Text>
                  <Text fz="h3" className={classes.title}>
                    Highly Effective Body Care
                  </Text>
                  <Text>
                    A combination of nature and advanced technology. Vegan, natural, skin-friendly and rich in effective
                    biotechnological ingredients.
                  </Text>
                  <Button color="white" mt="md" variant="outline" rightSection={<IconArrowRight />} size="md">
                    Discover More
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
}
