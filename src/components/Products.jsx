import React,{useState} from "react";
import { Flex, Grid } from "@chakra-ui/react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { Container } from "@chakra-ui/react";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const  = () => <div />;
  // const  = () => <div />;
const  [querry, setquerry] = useState({})
const [server, setServer] = useState()
// this querry will take each and every change in input 
// server take care of each and every data to json server to react

console.log(querry)



  return (
    <Container display={'flex'} justifyContent={"center"} mt='5' borderRadius="15" maxW='container.lg' border='1px' borderColor='gray.200'>
      <Flex>
        <AddProduct {...{setquerry ,setServer ,querry}}  />

        <Grid>
          <Product />
        </Grid>
        <Pagination />
      </Flex>
    </Container>
  );
};

export default Products;
