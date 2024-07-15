import {  Popover, PopoverTrigger, IconButton, Link, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverFooter} from '@chakra-ui/react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function Package(){
    return(
        <Popover>
            <PopoverTrigger>
                <IconButton aria-label='Download' variant='none' sx={{position: 'relative', top: '5pc', left: '5pc', border: 'grey', color: 'blue'}} icon={<InsertDriveFileIcon />} />
            </PopoverTrigger>
            <PopoverContent>
                    <PopoverArrow></PopoverArrow>
                    <PopoverCloseButton></PopoverCloseButton>
                    <PopoverHeader>
                            Download Package
                    </PopoverHeader>
                    <PopoverBody>
                        Install Rust comand Line Interface CLI in your system <br></br>
                        <small> $   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh </small> <br></br>
                        Check the version of your cargo <br></br>
                        <small> $ cargo --version </small> <br></br>
                        Download & Extract Package from github
                        <small> $ cd roombot && cargo make roombot </small>
                    </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}