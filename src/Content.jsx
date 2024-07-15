
import { Box } from "@chakra-ui/react";

export default function Content(){

    return(
        <Box sx={{position: 'relative', top : '3pc', left:'0pc', color:'darkslategrey'}} w={[300, 600]}>
            <ul>
                        Music Studio <br></br>
                        Secure Payment <br></br>
                        Digital Life
            </ul>
        </Box>
    );
}