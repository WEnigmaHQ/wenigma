import Enigma  from './assets/wisdomenigma.jpg'
import { Box, AspectRatio } from '@chakra-ui/react';

export default function CCContent_1(){

    return(

        <Box sx={{position: 'relative', top : '7pc', left: '25pc'}} w={[300,600]}>
                    <AspectRatio ratio={3/2} borderRadius={'full'}>
                            <iframe src={Enigma}></iframe>
                    </AspectRatio>
        </Box>
    );
}