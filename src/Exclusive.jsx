import { InfoIcon } from "@chakra-ui/icons";
import { IconButton, Modal, Text, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import Bitcoinpay from "./Bitcoinpay.jsx"
import { useState } from "react";

export default function Exclusive(){
    
    const Overlay = () => (
                <ModalOverlay bg={'blackAlpha.300'} backdropFilter={'blur(100px) hue-rotate(90deg)'}/>
    );

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [overlay, setOverlay] = useState(<Overlay/>);

    return(
    <>
        <IconButton icon={<InfoIcon></InfoIcon>} sx={{color: 'yellow.600', bg: 'transparent'}} onClick={() => {
            setOverlay(<Overlay/>);
            onOpen();
        }}></IconButton> <Text color={'yellow.600'} position={'relative'} top={'-2pc'} left={'2.5pc'}> Exclusive Membership Benefits</Text>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent sx={{borderRadius: '2pc'}}>
                <ModalHeader> Exclusive Membership Benefits </ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                <ModalBody>

                    First 500 members will have enjoy exclusive benefits. <br></br>
                    <br></br>
                    1. Business Class trips & tours <br></br>
                    2. Business Network connection <br></br>
                    3. Exclusive Spaces for family & Business <br></br>
                    4. Access to Limited Edition or Vintage Collections <br></br>
                    5. Exclusive Investments Deals <br></br>
                    6. Consigliere Prenium Services <br></br>
                    7. Royal Brueni Airlines Membership  <br></br>
                </ModalBody>
                <ModalFooter>
                    <Bitcoinpay></Bitcoinpay>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
    );
}