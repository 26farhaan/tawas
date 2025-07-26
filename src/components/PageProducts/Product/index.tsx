"use client";

import Image from "next/image";
import { ActionIcon, Box, Button, Flex, Grid, GridCol, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import IconShoppingCart from "@/components/icons/IconShoppingCart";
import classes from "./index.module.css";

type ProductProps = {
  image: string;
};

export default function Product({ image = "" }: ProductProps) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Box className={classes.product} p="md">
        <Box className={classes.imageWrapper} onClick={open}>
          <Image
            className={classes.image}
            src={`/images/product-${image}.png`}
            alt="Deodoran Tawas Alami"
            layout="responsive"
            width={1200}
            height={630}
          />
          <ActionIcon
            onClick={(e) => e.preventDefault()}
            variant="transparent"
            className={classes.iconShopping}
            size="lg"
            radius="100%"
          >
            <IconShoppingCart size={18} />
          </ActionIcon>
        </Box>
        <Box ta="center">
          <Text fw={600}>Lucent Facial Concentrate</Text>
          <Text>A Vitamin C-rich layering serum</Text>
          <Text mt="lg">60 ml</Text>
          <Text mt="lg">$94</Text>
        </Box>
      </Box>
      <Modal size={720} centered opened={opened} onClose={close} withCloseButton={false}>
        <Grid>
          <GridCol span={{ md: 6 }}>
            <Image
              className={classes.image}
              src={`/images/product-${image}.png`}
              alt="Deodoran Tawas Alami"
              layout="responsive"
              width={1200}
              height={630}
            />
          </GridCol>
          <GridCol span={{ md: 6 }}>
            <Flex direction="column" h="100%">
              <Box h="100%">
                <Text fw={600}>Lucent Facial Concentrate</Text>
                <Flex align="center">
                  <Text fz="sm">A Vitamin C-rich layering serum</Text>
                  <Text fz="sm">100ml</Text>
                </Flex>
                <Text mt={12} size="sm">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </Text>
                <Text mt="md">Size: 60ml</Text>
                <Text>Rp. 24.000</Text>
              </Box>
              <Flex mt="md" gap="sm">
                <Button size="xs" fullWidth color="black">
                  Buy Now!
                </Button>
                <Button size="xs" fullWidth>
                  Add To Cart
                </Button>
              </Flex>
            </Flex>
          </GridCol>
        </Grid>
      </Modal>
    </>
  );
}
