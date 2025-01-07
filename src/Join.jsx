import { IconButton, Modal, ModalBody, ModalCloseButton,Divider, Center, ModalContent, ModalHeader, Card, List, ModalOverlay,Popover, PopoverContent, PopoverHeader, PopoverTrigger, Text, useDisclosure, PopoverCloseButton, PopoverBody, CardBody, ListItem, ListIcon } from "@chakra-ui/react";
import { Business, CheckCircle, Laptop } from "@mui/icons-material";
import { CardContent } from "@mui/material";
import { PiCoins } from "react-icons/pi";

export default function Join(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    return(<>
        <Text  position={'relative'} top={'182pc'} left={'17pc'} color={'teal'} font={'bold'} fontSize={'lg'} fontFamily={'La Belle Aurore'}> Join us ! </Text>
        <IconButton icon={<Business></Business>} onClick={onOpen} position={'relative'} top={'179pc'} left={'-10pc'} color={'teal'} bg={'transparent'}></IconButton>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={'lg'}>
            <ModalOverlay></ModalOverlay>
            <ModalContent>
                <ModalHeader fontFamily={'La Belle Aurore'} position={'relative'} left={'7pc'}> Why choose us? </ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                <ModalBody>
                    <Popover>
                        <PopoverTrigger>
                            <IconButton icon={<Laptop></Laptop>} position={'relative'} left={'11pc'} bg={'transparent'} color={'silver'} top={'10pc'}></IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader> Exclusive Benefits to join us </PopoverHeader>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverBody>
                                <Text> &#10003; Employees have equity stake option for best profit </Text>
                                <Text> &#10003; Employees have flexible time & space </Text>
                                <Text> &#10003; Employees have collaboration with best mind around the globe  </Text>
                                <Text> &#10003; Employees have many other exclusive benefit </Text>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Text position={'relative'} width={'5pc'} top={'5pc'} left={'5pc'} fontFamily={'La Belle Aurore'}> Together, We Ignite Passionate Possibilities! </Text>
                    <Center height='200px'>
                            <Divider orientation='vertical' />
                    </Center>
                    <Popover>
                        <PopoverTrigger>
                            <IconButton icon={<PiCoins></PiCoins>} bg={'transparent'} color={'yellow.600'} position={'relative'} left={'16pc'} top={'-8pc'}></IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverBody>
                                    <Text> &#10003; Investors will earn 10 - 20% based on market capitalization </Text>
                                    <Text> &#10003; Investors enjoy 10-15% tax benefits </Text>
                                    <Text> &#10003; Investors will enjoy exclusive limited deals </Text>
                                    <Text> &#10003; Investors will owe Beruni Royal Airline Membership </Text>
                                    <Text> &#10003; Investors will enjoy 5% apprication on both cash and mortage real estate deal </Text>  
                                    <Text> &#10003; Investor have access to some important network connection </Text>  
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Text position={'relative'} width={'5pc'} left={'20pc'} top={'-12pc'} fontFamily={'La Belle Aurore'}> Invest Smart, Choose Exclusivity! </Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>)
}