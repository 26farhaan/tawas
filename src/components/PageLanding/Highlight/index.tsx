"use client";

import Image from "next/image";
import { Box, Button, Grid, GridCol, Text } from "@mantine/core";

// import { motion } from "motion/react";

import IconArrowRight from "@/components/icons/IconArrowRight";
import classes from "./index.module.css";

export default function Highlight() {
  return (
    <section>
      {/* <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1 }}> */}
      <Grid gutter={{ base: 30, md: 116 }} py={{ base: 45, md: 150 }} px={{ base: 0, md: 80 }} className={classes.root}>
        <GridCol span={{ base: 12, sm: 6 }}>
          <Image
            className={classes.image}
            width={600}
            height={600}
            src="/images/highlight_product.png"
            alt="Highlight Product"
          />
        </GridCol>
        <GridCol span={{ sm: 6 }} className={classes.content}>
          <Box>
            <Text>Skin Care</Text>
            <Text component="h2" className={classes.contentTitle}>
              Potent Solutions for Demanding Skin
            </Text>
            <Text>
              Discover products tailored for mature skin and urban lifestyles, offering daily hydration and the added
              advantage of powerful vitamins and antioxidants.
            </Text>
            <Button variant="outline" color="black" mt={52} rightSection={<IconArrowRight />}>
              Read More
            </Button>
          </Box>
        </GridCol>
      </Grid>
      {/* </motion.div> */}
    </section>
  );
}
