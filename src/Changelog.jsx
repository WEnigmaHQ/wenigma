import {  Popover, PopoverTrigger, IconButton, Link, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverFooter} from '@chakra-ui/react'
import DownloadingIcon from '@mui/icons-material/Downloading';
export default function(){

    return(
        <Popover>
             <PopoverTrigger>
                    <IconButton aria-label='Download' variant='none' sx={{position: 'relative', top: '5pc', left: '-5pc', border: 'grey', color: 'green'}} icon={<DownloadingIcon />} /> 
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow></PopoverArrow>
                <PopoverCloseButton></PopoverCloseButton>
                <PopoverHeader> Changelog v-0.0.4 </PopoverHeader>
                <PopoverBody>
                        Deprecated functionalities fixed <br></br>
                        Voice command option <br></br>
                        Social network feature <br></br>
                        Music generative content
                </PopoverBody>
                <PopoverFooter>
                        <Link href='https://github.com/WisdomEnigma/Roombot/releases' isExternal sx={{color: 'blue'}}> Releases </Link>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    );
}