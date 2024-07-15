import { Box } from "@chakra-ui/react";

export default function Affliate(){

    return(
        <Box>
            <iframe src="https://giphy.com/embed/hX5wZ8zwTqeSeqSaT2" width="200" height="80" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            <Box sx={{position: 'relative', top : '-1pc'}} w={[300, 900]}>
                <a href="https://studio.buymeacoffee.com/posts"> Coffee with Members </a>
            </Box>
            <iframe src="https://giphy.com/embed/DXg2wYitNXTKD7Xu8s" width="200" height="80" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            <Box sx={{position: 'relative', top : '-2pc'}} w={[300, 900]}>
                <a href="https://www.patreon.com/wisdomengima/shop"> Shop with Members </a>
            </Box>
        </Box>
    );
}