import { Box } from "@chakra-ui/react";
import Collection from "./Collection.jsx";
import CContent from "./CContent.jsx";
import CCContent from "./CCContent.jsx";
import CCContent_1 from "./CCContent_1.jsx";

export default function Heading(){

    return(
        <Box sx={{position: 'relative', top : '9pc', fontSize: 'x-large'}} w={[300, 600]}>
            <a href="https://github.com/WisdomEnigma/Roombot" alt="roombot" target="_black"> <h1> Roombot </h1> </a>
            <Collection></Collection>
            <CContent></CContent>
            <CCContent></CCContent>
            <CCContent_1></CCContent_1>
        </Box>
    );
}