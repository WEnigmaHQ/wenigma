import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Container,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  DownloadIcon,
  DragHandleIcon,
  AtSignIcon,
} from "@chakra-ui/icons";
import Voiceover from "./Voiceover.jsx";
import Heading from "./Heading.jsx";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Links from "./Links.jsx";
import Stats from "./Stats.jsx";
import ShopMenu from "./Lesuire.jsx";
// import Download from './Download.jsx';
import Features from "./Features.jsx";
import Pricing from "./Pricing.jsx";
import GavelIcon from "@mui/icons-material/Gavel";
import Hotel from "./assets/FKIUIafA-RIY--Lobby.jpg";
import Licence from "./Licence.jsx";
import { GoogleLogin } from "@react-oauth/google";
import { useToast } from "@chakra-ui/react";
import Changelog from "./Changelog.jsx";
import Package from "./Package.jsx";
import Deal_1 from "./Deal_1.jsx";
import Lesuire from "./Lesuire.jsx";

export default function Menubar() {
  const toast = useToast();

  // google account if exist

  const onSuccessMessage = (response) => {
    toast({
      title: "Your Google Account Login Successfully!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  //  google account if fail;
  const onErrorMessage = (error) => {
    toast({
      title: "Your Google account failed to login",
      description: "OOH! Error may be some error Google Account ",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Tabs>
      <TabList>
        <Tab>
          {" "}
          <HamburgerIcon></HamburgerIcon>{" "}
        </Tab>
        <Tab>
          {" "}
          <DragHandleIcon></DragHandleIcon>{" "}
        </Tab>
        <Tab>
          {" "}
          <DownloadIcon></DownloadIcon>{" "}
        </Tab>
        <Tab>
          {" "}
          <ShoppingBagIcon></ShoppingBagIcon>{" "}
        </Tab>
        <Tab>
          {" "}
          <AtSignIcon></AtSignIcon>{" "}
        </Tab>
        <Tab>
          {" "}
          <GavelIcon></GavelIcon>{" "}
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Box
            sx={{
              position: "relative",
              top: "5pc",
              left: "15pc",
              width: "25pc",
            }}
          >
            <img src={Hotel}></img>
          </Box>
          <Box
            sx={{
              position: "relative",
              left: "-10pc",
              top: "-5pc",
              width: "20pc",
              color: "darkslategrey",
              fontSize: "xx-large",
            }}
          >
            Connect Life with Lesuire & Luxury
          </Box>
          <Box sx={{ position: "relative", top: "5pc", color: "black" }}>
            THE TAPESTRY ALLURE THE MAGIC
            <Voiceover></Voiceover>
          </Box>
          <Box sx={{ position: "relative", top: "68pc", left: "0pc" }}>
            <Container
              sx={{
                fontSize: "xx-large",
                position: "relative",
                top: "5pc",
                color: "darkslategrey",
                width: "20pc",
              }}
            >
              {" "}
              Aesthetic Shopping Experience{" "}
            </Container>
            <Box
              sx={{
                position: "relative",
                top: "7pc",
                width: "2pc",
                left: "10pc",
              }}
            >
              <GoogleLogin
                onSuccess={onSuccessMessage}
                onError={onErrorMessage}
                useOneTap
              ></GoogleLogin>
            </Box>
          </Box>
          <Heading></Heading>
          <Stats></Stats>
          <Links></Links>
        </TabPanel>

        <TabPanel>
          <Deal_1></Deal_1>
        </TabPanel>

        <TabPanel>
          <Changelog></Changelog>
          <Package></Package>
          <Licence></Licence>
        </TabPanel>

        <TabPanel>
          <Lesuire></Lesuire>
        </TabPanel>

        <TabPanel></TabPanel>

        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  );
}
