import { Stack, Box, Link } from '@chakra-ui/react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IMailChimp from './IMailChimp.jsx';


export default function Links(){

    return(
        <Box sx={{position: 'relative', top: '200pc', left : '14pc'}} w={[300,600]}>
            <Stack direction={['column', 'row']} sx={{color: 'teal'}}>
                <Link href='https://www.facebook.com/wisdomenigma' isExternal> <FacebookIcon></FacebookIcon> </Link>
                <Link href='https://www.instagram.com/wisdomenigma' isExternal> <InstagramIcon></InstagramIcon> </Link>
                <Link href='https://www.linkedin.com/company/wisdom-enigma' isExternal> <LinkedInIcon></LinkedInIcon> </Link>
                <Link href='https://www.youtube.com/channel/UCziNXOl_swLu-SXWWmjFVNA' isExternal> <YouTubeIcon></YouTubeIcon> </Link>
                <Link href='https://github.com/WEnigmaHQ' isExternal> <GitHubIcon></GitHubIcon> </Link>
                <Link href='https://whatsapp.com/channel/0029VaDMshaEawdwVNfg6H2H' isExternal><WhatsAppIcon></WhatsAppIcon></Link>
            </Stack>
            <Box sx={{position: 'relative', top : '0pc', left: '0pc'}} w={[300, 600]}>
                <IMailChimp></IMailChimp>
            </Box>
        </Box>
    );
}