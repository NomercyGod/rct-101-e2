import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Select,
  RadioGroup,
  Radio,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [querry, setquerry] = useState({
    title: "",
    category: "",
    gender: "",
    imageSrc: "",
    price: "",
  });

 
  function storedata(e) {
    if (typeof e != "string") {
      const { name, value, checked, type } = e.target;
      setquerry({ ...querry, [name]: value });
    } else {
      setquerry({ ...querry, gender: e });
    }
    
  }
 
 useEffect(() => {
   fetch("http://localhost:8080/products")
  .then((r) => r.json())
  .then((d) => setquerry(d));

console.log(querry);
  
 }, [])
 


  function senddata(e) {
    e.preventDefault();
    fetch("http://localhost:8080/products",{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify( {...querry} ),
    
    })
      .then((r) => r.json())
      .then((d) => setquerry([...querry,d]));
  }

  return (
    <>
      <Button onClick={onOpen} my={4} data-cy="add-product-button">
        Add New Product{" "}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={5}>
            <p>Title</p>
            <Input
              data-cy="add-product-title"
              name="title"
              onChange={storedata}
              placeholder="Title"
            />
            <p>Category</p>
            <Select
              data-cy="add-product-category"
              name="category"
              onChange={storedata}
            >
              <option data-cy="add-product-category-Category">Category</option>
              <option data-cy="add-product-category-shirt">shirt</option>
              <option data-cy="add-product-category-pant">pant</option>
              <option data-cy="add-product-category-jeans">jeans</option>
            </Select>
            <p>Gender</p>
            <RadioGroup
              data-cy="add-product-gender"
              name="gender"
              onChange={storedata}
            >
              <Radio
                data-cy="add-product-gender-male"
                name="gender2"
                value={"male"}
              >
                male
              </Radio>
              <Radio
                data-cy="add-product-gender-female"
                name="gender2"
                value={"female"}
              >
                female
              </Radio>
              <Radio
                data-cy="add-product-gender-unisex"
                name="gender2"
                value={"unisex"}
              >
                unisex
              </Radio>
            </RadioGroup>
            <p>Price</p>
            <Input
              data-cy="add-product-price"
              name="price"
              onChange={storedata}
              placeholder="Price"
            />
          </ModalBody>
          <ModalFooter>
            <Button data-cy="add-product-submit-button" onClick={senddata}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
