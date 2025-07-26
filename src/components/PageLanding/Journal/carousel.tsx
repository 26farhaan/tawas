"use client";

import { useState } from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { Box, Text } from "@mantine/core";

import classes from "./carousel.module.css";

const CarouselJournal = () => {
  const [datas, setDatas] = useState<number[]>([1, 2, 3, 4, 1, 2, 3, 4]);

  return (
    <Box mt="xl">
      <Carousel
        classNames={{
          root: classes.root,
          indicators: classes.indicators,
          indicator: classes.indicator,
        }}
        nextControlProps={{ "aria-label": "Next slide" }}
        previousControlProps={{ "aria-label": "Previous slide" }}
        slideSize={{ md: "25%" }}
        withIndicators
      >
        {datas.map((data, i) => (
          <Carousel.Slide key={i} className={classes.slide}>
            <Box>
              <Image
                className={classes.image}
                src={`/images/product-${data}.png`}
                alt="Deodoran Tawas Alami"
                layout="responsive"
                width={1200}
                height={630}
              />
              <Box ta="center">
                <Text fw={600}>Lucent Facial Concentrate</Text>
                <Text>A Vitamin C-rich layering serum</Text>
                <Text mt="lg">60 ml</Text>
                <Text mt="lg">$94</Text>
              </Box>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselJournal;
