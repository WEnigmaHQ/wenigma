import Video from './assets/homepage.mp4'
import { AspectRatio, Box } from "@chakra-ui/react";

export default function Collection(){

    return(
        <Box sx={{position: 'relative', top : '2pc'}}>
            <AspectRatio maxW={'720px'} maxH={'420px'} ratio={1}>
                <iframe src={Video} allowFullScreen></iframe>
            </AspectRatio>
        </Box>
    );
}