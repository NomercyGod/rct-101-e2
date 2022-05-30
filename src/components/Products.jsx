import React from "react";
import AddProduct from './AddProduct'
import Pagination from './Pagination'
import Product from './Product'
import { Flex, Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
const Products = () => {
  // TODO: Remove below const and instead import them from chakra


  return (
    <Flex>
      <AddProduct/>
      <Grid>
        <Product/>
        </Grid>
     <Pagination/>
    </Flex>
  );
};

export default Products;
