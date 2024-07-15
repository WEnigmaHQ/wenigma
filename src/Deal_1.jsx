import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useDisclosure } from "@chakra-ui/react";
import DDrawer from "./DDrawer.jsx";
import { useAuth } from "./AuthContext";
import { FaGoogle } from "react-icons/fa";

export default function Deal_1() {
  const { user, login } = useAuth();
  if (!user) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        p="4"
        maxWidth="md"
        mx="auto"
        textAlign="center"
        fontFamily="Roboto, sans-serif"
        backgroundColor="#ffffff"
      >
        <Heading as="h3" size="md" mb="1" color="#333769">
          Login to View Deals!
        </Heading>
        <Button
          onClick={login}
          mt="1"
          colorScheme="blue"
          size="xs"
          backgroundColor="#62986c"
          _hover={{ backgroundColor: "#3b644d" }}
          fontSize="md"
          rightIcon={<FaGoogle />}
        >
          Login with
        </Button>
      </Box>
    );
  }
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const deals = [
    {
      title: "The Vertical V2",
      description: "Affordable commercial brand outlets.",
      image:
        "https://thevertical.pk/cdn/shop/files/The_Vertical_Brochure_2_c5f8432f-08c8-42be-aa40-d64ee181e283_800x.jpg?v=1676639931",
      id: "0",
    },
    {
      title: "Madison Square Mall",
      description: "Luxury commercial brand outlets and Hotel suites.",
      image:
        "https://images.zameen.com/w1600_h900/7/2272/madison_square_mall_43989.jpg",
      id: "1",
    },
    {
      title: "CafeXbot",
      description: "Automate CafeXBot setup (ice cream and coffee).",
      image:
        "https://vendinglab.tech/wp-content/uploads/2023/10/ink-1-e1697711796847.png",
      id: "2",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [showContractForm, setShowContractForm] = useState(false);

  const handlePaymentClick = () => {
    setPaymentOpen(true);
  };

  const handlePaymentClose = () => {
    setPaymentOpen(false);
    setShowContractForm(false);
  };

  const handleContractClick = () => {
    setShowContractForm(true);
  };

  return (
    <Box>
      {deals.map((data, index) => (
        <Card
          key={data.id}
          direction={{ base: "column", sm: "row" }}
          sx={{ position: "relative", top: "5pc", height: "10pc" }}
          overflow="hidden"
          variant="outline"
          marginBottom="1rem"
        >
          <Image
            objectFit="cover"
            sx={{
              maxWidth:
                data.id === "0"
                  ? "400px"
                  : data.id === "1"
                  ? "170px"
                  : data.id === "2"
                  ? "180px"
                  : "100%",
              height:
                data.id === "0"
                  ? "150px"
                  : data.id === "1"
                  ? "160px"
                  : data.id === "2"
                  ? "200px"
                  : "auto",
            }}
            src={data.image}
          />
          <Stack flex="1" marginLeft={{ base: "0", sm: "1rem" }}>
            <CardBody>
              <Heading
                size="md"
                sx={{
                  fontSize: data.id === "0" ? "lg" : "lg",
                  position: "relative",
                  top: "0",
                  marginTop: "1",
                  left: "0",
                }}
              >
                {data.title}
              </Heading>
              <Text
                py="2"
                sx={{
                  fontSize: data.id === "0" ? "sm" : "sm",
                  position: "relative",
                  top: "0rem",
                  marginTop: "-0rem",
                  left: "0",
                }}
              >
                {data.description}
                <Badge ml="1" colorScheme="green">
                  ACTIVE
                </Badge>
              </Text>
            </CardBody>
            <CardFooter>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Box>
                  <Badge
                    ml={1}
                    colorScheme="green"
                    sx={{ position: "relative", top: "-3pc", left: "5pc" }}
                  >
                    0 Views
                  </Badge>
                  <Box
                    sx={{ position: "relative", top: "-0.6pc", left: "-3.7pc" }}
                  >
                    <DDrawer data={index} />
                  </Box>
                </Box>
                <Button
                  colorScheme="blue"
                  size="xs"
                  onClick={handlePaymentClick}
                  sx={{
                    position: "absolute",
                    bottom: "3rem",
                    right: "7.6rem",
                    fontSize: "sm",
                    fontWeight: "normal",
                    borderRadius: "0.5g",
                    padding: "0rem 0.5rem",
                    cursor: "pointer",
                    borderColor: "black",
                    borderWidth: "1px",
                  }}
                >
                  Pay Now
                </Button>
              </Box>
            </CardFooter>
          </Stack>
        </Card>
      ))}
      <Modal isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>
            <Heading as="h3" size="md">
              Add your Details
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder="Ali" type="text" id="first" />
              <FormLabel>Family name</FormLabel>
              <Input placeholder="Hassan" type="text" id="last" />
              <FormLabel>PhoneNum</FormLabel>
              <Input placeholder="+9200 111 1110" type="phone" id="phone" />
              <FormLabel>Range</FormLabel>
              <NumberInput min={30000} max={40000} keepWithinRange={false}>
                <NumberInputField
                  placeholder="30000"
                  type="number"
                  id="range"
                />
              </NumberInput>
              <FormLabel>Schedule Appointment</FormLabel>
              <Input type="date" id="date" />
              <IconButton
                aria-label="Submit"
                icon={<ThumbUpAltIcon />}
                sx={{
                  position: "relative",
                  top: "0.3pc",
                  left: "10pc",
                  color: "green",
                  background: "transparent",
                }}
              />
              <IconButton
                aria-label="Cancel"
                icon={<ThumbDownAltIcon />}
                sx={{
                  position: "relative",
                  top: "0.3pc",
                  left: "10pc",
                  color: "red",
                  background: "transparent",
                }}
              />
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={paymentOpen} onClose={handlePaymentClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {showContractForm ? "Add Details" : "Select Payment Method"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {showContractForm ? (
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="First Name" type="text" />
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Last Name" type="text" />
                <FormLabel>CNIC/NTN</FormLabel>
                <Input placeholder="CNIC/NTN" type="text" />
                <FormLabel>Due date of contract</FormLabel>
                <Input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  max={
                    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .split("T")[0]
                  }
                />
                <FormLabel>Address</FormLabel>
                <Input placeholder="Address" type="text" />
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder="Phone Number" type="phone" />
                <Box display="flex" justifyContent="center" mt="4">
                  <Button
                    size="sm"
                    colorScheme="green"
                    onClick={() => alert("Form Submitted")}
                    mr="2"
                  >
                    Submit
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={handlePaymentClose}
                  >
                    Cancel
                  </Button>
                </Box>
              </FormControl>
            ) : (
              <Box>
                <Button
                  size="sm"
                  onClick={() => alert("Paying with e-account")}
                >
                  Pay with E-Account
                </Button>
                <Button size="sm" onClick={handleContractClick} ml="2">
                  Pay with Contract
                </Button>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
