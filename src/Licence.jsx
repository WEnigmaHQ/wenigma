import GavelIcon from '@mui/icons-material/Gavel';
import { IconButton, Container, Box, Link} from '@chakra-ui/react'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { Heading } from '@chakra-ui/react'

export default function Licence(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')

    return(
        <Container>
            <IconButton aria-label='Download' variant='none' sx={{position: 'relative', top: '15pc', left: '2pc', border: 'grey', color: 'orange'}} icon={<GavelIcon />} onClick={onOpen} />
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'> <Heading> Licence </Heading> </DrawerHeader>
                    <DrawerBody>
                        <Heading as='h3' size='lg'> Welcome </Heading>
                        <Box sx={{position: 'relative', top: '2pc'}}>
                            Welcome and thankyou for your interest. "Roombot" is open source project under the licence terms of Mozilla Public Licence.
                            According to Mozilla Public Licence few terms should be clearly stated. Contributor, Contributor Version, Contribution, Covered Software, Secondary Licence, Lincensable, Patent Claims, You & Your, Distibution, Due to Statute, Termination, Limition of Libability, Litigation and Version.
                            The purpose of this Licence is to extend our prior work.
                            <br></br>
                            <br></br>
                            <br></br>
                            THIS IS LEGAL LICENCE/AGREEMENT & THIRD PARTIES, LICENSABLE SHOULD FOLLOW LICENCE TERMS & PRIVACY POLICES. OTHERWISE THIS ARGREEMENT WILL BE TERMINATED & WISDOMENIGMA INC WILL EXCISE ACT OF TERMINATION.
                        </Box>
                        <Box sx={{position: 'relative', top: '3pc'}}>
                            <Heading as='h3' size='lg'> Definition </Heading>
                            <Box sx={{position: 'relative', top: '4pc', height: '100pc'}}>
                                <Heading as='h3' size='lg'> Contributor </Heading> <br></br>
                                    Any Legal Entity or group of people who will create & contribute in Covered Software. The term Covered Software means Open Source Project. <br></br>
                                <Heading as='h3' size='lg' sx={{position: 'relative', top: '2pc'}}> Contribution Version </Heading><br></br>
                                <Box sx={{position: 'relative', top: '2pc'}}> When a group of people extend creator prior work. </Box> <br></br>
                                <Heading as='h3' size='lg' sx={{position: 'relative', top: '2pc'}}> Secondary Licence </Heading><br></br>
                                <Box sx={{position: 'relative', top: '2pc'}}> Creator enforce rules, terms on Covered Software Version which secondary licence should follow.  </Box> <br></br>
                                <Heading as='h3' size='lg' sx={{position: 'relative', top: '2pc'}}> Large Work </Heading><br></br>
                                <Box sx={{position: 'relative', top: '2pc'}}> Additional Files i.e images, documents are exclude from Covered Software if Project group of contributors </Box> <br></br>
                                <Heading as='h3' size='lg' sx={{position: 'relative', top: '2pc'}}> Licensable </Heading><br></br>
                                <Box sx={{position: 'relative', top: '2pc'}}> Creator , Legal Entity or group of contribtors will grant access to third party for some duration or Lifetime. </Box> <br></br>
                                <Heading as='h3' size='lg' sx={{position: 'relative', top: '2pc'}}> Modification </Heading><br></br>
                                <Box sx={{position: 'relative', top: '2pc'}}> Any contribution i.e addition & deletion in an open source project will be included in covered software. Any new file/ delete file are also include in covered software, when entity issue licence. </Box> <br></br>
                                <Heading as='h3' size='lg' sx={{position: 'relative', top: '2pc'}}> Patent Claims </Heading><br></br>
                                <Box sx={{position: 'relative', top: '2pc'}}> Patent Claim without limitation on method, algorithm , technology will be matter of infringed. However Covered Software will be offer, profit distrbution, sale, transfer if Covered Softaware have contribution version or it contributor.  </Box> <br></br>
                                <Heading as='h3' size='lg' sx={{position: 'relative', top: '2pc'}}> You or Your </Heading><br></br>
                                <Box sx={{position: 'relative', top: '2pc'}}> Definition clearly stated "You" is a singular if a legal entity or group of people "your". A Legal entity who have direct or indirect control the covered software. Another state if licensale have more than 50% stake or beneficial shares then "you" or "your" will be used in licence.   </Box> <br></br>
                                <Box sx={{position: 'relative', top: '5pc', left: '5pc'}}>
                                    <Link href='https://github.com/WisdomEnigma/Roombot?tab=MPL-2.0-1-ov-file' isExternal> Mozilla Public Licence </Link>
                                </Box>
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Container>
    );
}