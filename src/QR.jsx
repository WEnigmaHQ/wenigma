import { Box, AspectRatio } from "@chakra-ui/react";

import QRcode from './assets/bmc_qr.png';

export default function QR(){

    return(
        <Box>
            <AspectRatio ratio={1} w={[300, 900]}>
                <iframe src={QRcode}></iframe>
            </AspectRatio>
        </Box>
    );
}