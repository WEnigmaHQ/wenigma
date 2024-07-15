import Video from './assets/homepage.mp4'
import Apps from './assets/collection_search.mp4'
import { AspectRatio, Box, Link } from "@chakra-ui/react";
import Content from './Content.jsx';
import Content_1 from './Content_1.jsx';


export default function Features(){

    return(
        <Box sx={{position: 'relative', top : '5pc', left : '0pc'}} w={[300,600]}>
            <AspectRatio ratio={1}>
                <iframe src={Video} allowFullScreen></iframe>
            </AspectRatio>

            <Box sx={{position: 'relative', top : '2pc', fontSize: 'x-large'}} w={[300, 600]}>
                <Link href="https://github.com/WisdomEnigma/Roombot/releases"> V0.0.4 </Link>
                <Content></Content>
            </Box>

            <Box sx={{position: 'relative', top : '8pc', left : '1pc'}} w={[300,600]}>
                <AspectRatio ratio={1}>
                 <iframe src={Apps} allowFullScreen></iframe>
                </AspectRatio>
                <Content_1></Content_1>
            </Box>
        </Box>
    );
}