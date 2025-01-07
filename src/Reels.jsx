import { Collapse,Box, useDisclosure, IconButton, AspectRatio } from '@chakra-ui/react'
import { FaFire} from 'react-icons/fa';

export default function Reels(){
    const { isOpen, onToggle } = useDisclosure();


    return(
        <>
            <IconButton colorScheme={'red'} icon={<FaFire></FaFire>} sx={{position: 'relative', top: '10pc', left: '-10pc', width: '5pc'}} aria-label='trilled' onClick={onToggle}> </IconButton>
            <Collapse in={isOpen} animateOpacity>
                <Box p='40px' color='white' mt='4' bg='red.500' rounded='md' shadow='md'>
                <AspectRatio maxW={'720px'} maxH={'420px'} ratio={1}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RwRpVRbKw1c?si=4p6R2I22T0o2qpV9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </AspectRatio>
                </Box>
            </Collapse>
        </>
    );
}