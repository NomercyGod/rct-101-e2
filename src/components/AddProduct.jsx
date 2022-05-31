import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

const AddProduct = (props) => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  let setquerry = props.setquerry;
  let querry = props.querry;
  let setServer = props.setServer;

  function deta(e) {
    if (typeof e == "string") {
      {
        setquerry({ ...querry, ["gender"]: e });
      }
    } else {
      const { value, name } = e.target;
      setquerry({ ...querry, [name]: value });
    }
  }
  function storedata(e){
    e.preventDefault()
    onClose()
    axios.post()
  }

  return (
    <>
      <Button
        my={4}
        onClick={onOpen}
        data-cy="add-product-button"
        m={"10"}
        maxWidth={"fit-content"}
      >
        Add New Product
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <p>Title</p>
            <Input
              mt={3}
              onChange={deta}
              name="Title"
              data-cy="add-product-title"
            />
            <p>Category</p>
            <Select
              mt={3}
              onChange={deta}
              name="Category"
              data-cy="add-product-category"
            >
              <option data-cy="add-product-category-shirt">Category</option>
              <option data-cy="add-product-category-shirt">Shirt</option>
              <option data-cy="add-product-category-pant">Pant</option>
              <option data-cy="add-product-category-jeans">Jeans</option>
            </Select>
            <p>Gender</p>
            <RadioGroup mt={3} onChange={deta} data-cy="add-product-gender">
              <Radio
                mr={3}
                data-cy="add-product-gender-male"
                value={"male"}
                name="Sgender"
              >
                Male{" "}
              </Radio>
              <Radio
                mr={3}
                data-cy="add-product-gender-female"
                value={"female"}
                name="Sgender"
              >
                {" "}
                Female
              </Radio>
              <Radio
                mr={3}
                data-cy="add-product-gender-unisex"
                value={"unisex"}
                name="Sgender"
              >
                {" "}
                Unisex
              </Radio>
            </RadioGroup>
            <p>Price</p>
            <Input
              mt={3}
              onChange={deta}
              name="Price"
              data-cy="add-product-price"
            />
            <Button
              ml={"80%"}
              mt={3}
              onClick={storedata}
              data-cy="add-product-submit-button"
            >
              Create
            </Button>
          </ModalBody>{" "}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
