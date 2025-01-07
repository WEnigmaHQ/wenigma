import {
  Box,
  Stack,
  Image,
} from "@chakra-ui/react";


import Voiceover from "./Voiceover.jsx";
import Links from "./Links.jsx";
import Stats from "./Stats.jsx";
import Reels from "./Reels.jsx";
import Hotel from "./assets/FKIUIafA-RIY--Lobby.jpg";
import { useToast } from "@chakra-ui/react";
import Brands from "./Brands.jsx";
import Merchandise from "./Merchandise.jsx";
import Join from "./Join.jsx";

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
        <Stack>
          <Box
            sx={{
              position: "relative",
              top: "5pc",
              left: "0pc",
              width: "50pc",
            }}
          >
            <Image src={Hotel} alt="exclusivness" borderRadius={'100pc'} boxSize={'70pc'}></Image>
          </Box>
          <Box
            sx={{
              position: "relative",
              left: "10pc",
              top: "15pc",
              width: "30pc",
              color: "black",
              fontSize: "xxx-large",
            }}
          >
            Seek exceptional, thrilling moments
          </Box>
          <Box sx={{ position: "relative", top: "10pc", left: "13pc", color: "darkslategrey" }}>
            ______________ THE TAPESTRY ALLURE THE MAGIC ______________
            <Voiceover></Voiceover>
          </Box>
          <Reels></Reels>
          <Brands></Brands>
          <Stats></Stats>
          <Merchandise></Merchandise>
          <Join></Join>
          <Links></Links>
        </Stack>
  );
}
