import { BiBitcoin } from "react-icons/bi";
import { IconButton, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, useDisclosure, AlertDialogBody, Image, AlertDialogFooter, useToast, Toast } from "@chakra-ui/react";
import { useRef } from "react";
import QCode from "./assets/qrcode.png";
import { Cancel, Email } from "@mui/icons-material";


export default function Bitcoinpay(){

    const {isOpen, onOpen, onClose} = useDisclosure();
    const cancelRef = useRef();
    const toast = useToast();
    return(
        <>
            <IconButton icon={<BiBitcoin></BiBitcoin>} onClick={onOpen} sx={{color: 'Yellow', bg: 'black'}}></IconButton>
                <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                        <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader fontSize={'lg'} fontWeight={'bold'}> Why membership in Bitcoin? </AlertDialogHeader>
                                <AlertDialogBody>
                                        Register Now & Earn Exclusiveness
                                    <Image src={QCode} alt="qrcode" sx={{position: 'relative', left: '10pc', top: '2pc'}} width={100} height={100}></Image>
                                </AlertDialogBody>
                                <AlertDialogFooter>
                                    <IconButton ref={cancelRef} icon={<Cancel></Cancel>} sx={{bg:'black', color: 'red'}}></IconButton>
                                    <IconButton icon={<Email></Email>} sx={{position: 'relative', left: '-20pc', color:'white', bg: 'black'}} onClick={() => 
                                        toast({
                                            title: 'Confirmation your transactions',
                                            description: 'Kindly share your first & last name at our mail address wizdwarfs@gmail.com. Valid address is only acceptable for access',
                                            status: 'success',
                                            duration: '9000',
                                            isClosable: true,
                                        })
                                    }></IconButton>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>
        </>
    );
}