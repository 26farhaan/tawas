import { Box, Divider, Flex, Grid, GridCol, TextInput } from "@mantine/core";

import IconSearch from "@/components/icons/IconSearch";
import Product from "../Product";

export default function ListProducts() {
  return (
    <section>
      <Box>
        <Flex justify="end" py="lg">
          <TextInput
            // size={{ base: "lg" }}
            w={{ base: "100%", md: 400 }}
            placeholder="Cari produk"
            rightSection={<IconSearch size={18} />}
          />
        </Flex>
        <Divider mb="lg" />
        <Grid>
          {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((item, i) => (
            <GridCol span={{ md: 3 }} key={i}>
              <Product image={`${item}`} />
            </GridCol>
          ))}
        </Grid>
      </Box>
    </section>
  );
}
