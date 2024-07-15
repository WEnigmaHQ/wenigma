import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Box,
  Input,
  Container,
} from "@chakra-ui/react";
import DeckIcon from "@mui/icons-material/Deck";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import AttractionsIcon from "@mui/icons-material/Attractions";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function DDrawer(prop) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const deals = [
    {
      inital: "Prestige Commerical Outlets",
      address:
        "94 B Block, Khayaban E Amin, Pine Ave, Block B Khayaban E Ameen, Lahore, Punjab 54000",
      shop: "cooperate offices & oulets",
      starting: "starting from 30000 Rs",
      id: "0",
    },
    {
      inital: "Luxury Commerical Outlets & Hotel Suits for investment",
      address:
        "92B-2 Mian Mehmood Ali Kasoori Rd, Block B2 Block B 2 Gulberg III, Lahore, Punjab 54000",
      shop: "hotel suits & oulets",
      starting: "starting from 6M Rs",
      id: "1",
    },
    {
      inital: "Automate Business 4x growth",
      address: "Dubai",
      shop: "Installation in commerical real estate ",
      starting: " starting from 10k USD (included installation) exclude duty",
      id: "2",
    },
  ];
  return (
    <Box sx={{ position: "relative", top: "-2.5pc", left: "5pc" }}>
      {deals.map((data) =>
        prop.data == data.id ? (
          <Box>
            <IconButton
              aria-label="Details"
              icon={<DeckIcon />}
              ref={btnRef}
              sx={{
                position: "relative",
                top: "-2pc",
                left: "7pc",
                border: "black",
                color: "black",
                background: "transparent",
              }}
              onClick={onOpen}
            ></IconButton>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader> Deals Details </DrawerHeader>
                <DrawerBody>
                  {data.inital}
                  <Container sx={{ position: "relative", top: "2pc" }}>
                    <ShareLocationIcon
                      sx={{ position: "relative", top: "0.2pc" }}
                    ></ShareLocationIcon>{" "}
                    <span> {data.address} </span> <br></br>
                    <Box sx={{ position: "relative", top: "2pc" }}>
                      <AttractionsIcon
                        sx={{ position: "relative", top: "0.4pc" }}
                      ></AttractionsIcon>{" "}
                      <span> {data.shop} </span> <br></br>
                    </Box>
                    <Box sx={{ position: "relative", top: "3pc" }}>
                      <PriceChangeIcon
                        sx={{ position: "relative", top: "0.4pc" }}
                      ></PriceChangeIcon>{" "}
                      <span> {data.starting} </span>
                    </Box>
                    <Box sx={{ position: "relative", top: "3pc" }}>
                      <RequestQuoteIcon
                        sx={{ position: "relative", top: "0.4pc" }}
                      ></RequestQuoteIcon>{" "}
                      <span>
                        {" "}
                        5% for consultancy , Transfer of ownership & Negiotation
                        service{" "}
                      </span>
                    </Box>
                    <Box sx={{ position: "relative", top: "3pc" }}>
                      <PhoneIcon
                        sx={{ position: "relative", top: "0.4pc" }}
                      ></PhoneIcon>{" "}
                      <span> +9217 4287-461 </span>
                    </Box>
                    <Box sx={{ position: "relative", top: "3pc" }}>
                      <AlternateEmailIcon
                        sx={{ position: "relative", top: "0.4pc" }}
                      ></AlternateEmailIcon>{" "}
                      <span> wizdwarfs@gmail.com </span>
                    </Box>
                  </Container>
                </DrawerBody>
                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
        ) : null
      )}
    </Box>
  );
}
