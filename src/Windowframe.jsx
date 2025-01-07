import { Box, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Image, Text, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Table, Thead, Tr, Th, Tbody, Td, useToast, Fade, FormControl, FormLabel, Input, Stack, Select, FormHelperText, Heading } from "@chakra-ui/react"
import { Email, LocationSearching, Timer, VerifiedUser, Watch} from "@mui/icons-material";
import { useRef, useState } from "react";
import { PiGavel } from "react-icons/pi";
import CartierWatchFront from "./assets/cartier/FB_IMG_1729849364365.jpg";
import CartierWatchFrontWithBox from "./assets/cartier/FB_IMG_1729849383297.jpg";
import CartierWatchFrontWithBoxFar from "./assets/cartier/FB_IMG_1729849344677.jpg";
import CartierWatchBox from "./assets/cartier/FB_IMG_1729849331304.jpg";
import PaneraiStrap from "./assets/panerai/panerai_strap.jpg";
import RolexDateJust1 from "./assets/rolex/rolexdatejust1.jpeg";
import RolexDateJust2 from "./assets/rolex/rolexdatejust2.jpeg";
import RolexDateJust3 from "./assets/rolex/rolexdatejust3.jpeg";
import RolexDateJustStrap from "./assets/rolex/rolexdatejuststrap.jpeg";
import OmegaWatch from "./assets/omega/omega speedmaster professional.jpeg";
import Geneve14k1 from "./assets/geneve14kgold/459193113_1040372577400909_4087201961293054331_n.jpg";
import Geneve14k2 from "./assets/geneve14kgold/459198578_806798974864481_8329926125111774321_n.jpg";
import Geneve14k3 from "./assets/geneve14kgold/459308925_1432682180729870_7734264335370226379_n.jpg";
import Geneve14k4 from "./assets/geneve14kgold/460022395_1574326426819197_6591835997507201061_n.jpg";
import HeuerStrap from "./assets/heuer/2e6e25de-feb2-4308-a82e-802c47512358.jpeg";
import HeuerStrap2 from "./assets/heuer/55cbf000-20b6-4589-a572-2f3becf72531.jpeg";
import HeuerStrap3 from "./assets/heuer/d6d7d465-35af-4342-93df-7cedb0e4fa2b.jpeg";
import CartierSantosBlueface from "./assets/cartier/blueface/0b8ddd83-5801-4043-964c-85ae04716cbf.jpeg";
import CartierSantosBlueface2 from "./assets/cartier/blueface/7dd1d51f-a992-406f-83cf-c444eae171d6.jpeg";
import CartierSantosBlueface3 from "./assets/cartier/blueface/97360684-56f5-40e5-95e0-66867878e2a0.jpeg";
import CartierSantosBlueface4 from "./assets/cartier/blueface/b6e61a25-0a22-4c65-8b3c-043633132032.jpeg";
import CartierSantosBlueface5 from "./assets/cartier/blueface/f55a934c-a039-4d59-b6e6-6e58cbe3431e.jpeg";
import AudemarsPiguet from "./assets/ap/AP Oak.jpg";
import PatekPhilipeR from "./assets/patekphilipe/8cf45b2d-495e-466a-b201-bc69f5383966.jpeg";
import PatekPhilipeR2 from "./assets/patekphilipe/9dcba47d-d1bc-43f8-a298-6bddd7b20b09.jpeg";
import PatekPhilipeR3 from "./assets/patekphilipe/29df1763-3d54-4eaa-8280-25e8d405c1bc.jpeg";
import PatekPhilipeA from "./assets/patekphilipe/Steel/2ce63935-2969-467a-ad03-bf86f0bdb243.jpeg";
import PatekPhilipeA1 from "./assets/patekphilipe/Steel/3a4e1fc0-e340-4134-9035-cc3d61db9775.jpeg";
import PatekPhilipeA2 from "./assets/patekphilipe/Steel/14c72644-b71f-47ae-9c97-baeaf9d1b0af.jpeg";
import PatekPhilipeA3 from "./assets/patekphilipe/Steel/16d60e44-6c18-4409-a421-e3f5716a4086.jpeg";
import PatekPhilipeA4 from "./assets/patekphilipe/Steel/d95f3393-9524-47b8-9114-c44cc7172554.jpeg";
import BNIPAP from "./assets/ap/bnip/4c180509-178a-4235-b6bc-03eded5698b2.jpeg";
import BNIPAP2 from "./assets/ap/bnip/5f444b26-f4e8-4615-aec5-a17858c21b01.jpeg";
import BNIPAP3 from "./assets/ap/bnip/731ffa8c-8d21-4554-b0e8-dd7d2dcc27f1.jpeg";
import APOffShore from "./assets/ap/offshore/1abe828c-5b84-43c6-a058-320e9dfc0c62.jpeg";
import APOffShore2 from "./assets/ap/offshore/7cc0dc58-d611-4339-9051-553964810644.jpeg";
import APOffShore3 from "./assets/ap/offshore/402cc87a-c7f2-46fd-8c92-b31bb9517295.jpeg";
import APOffShore4 from "./assets/ap/offshore/755ede44-371f-4b7c-83a4-09743a902152.jpeg";
import APOffShore5 from "./assets/ap/offshore/c1b87189-8be4-41f8-b2f0-37e711c69075.jpeg";
import RolexDiamonds from "./assets/rolex/diamond/460239358_3250410955093727_3961382952304216606_n.jpg";
import RolexDiamonds2 from "./assets/rolex/diamond/461000084_1198918608029044_972449817486662743_n.jpg";
import RolexDiamonds3 from "./assets/rolex/diamond/460596499_549407984197526_5101751837007288321_n.jpg";
import RolexDiamonds4 from "./assets/rolex/diamond/461167298_1549503985661803_5494880969839751094_n.jpg";
import RolexDiamonds5 from "./assets/rolex/diamond/461175019_1329220748237050_6465910821312049115_n.jpg";
import CartierSantosGemstone from "./assets/cartier/santos/358e0d2a-5d7f-4fef-a2f5-6edc584ec9c3.jpeg";
import CartierSantosGemstone2 from "./assets/cartier/santos/3fb460bc-1ede-429d-a276-71cbc73c0e5b.jpeg";
import CartierSantosGemstone3 from "./assets/cartier/santos/317413f1-a48f-4a03-a6d7-562fdb95a316.jpeg";
import CartierSantosGemstone4 from "./assets/cartier/santos/423241fd-d4d3-4ea3-a3c3-729f91d69fb3.jpeg";
import CartierSantosGemstone5 from "./assets/cartier/santos/f6aa146a-cfca-4822-b561-2ab5bbd36dc5.jpeg";
import WhiteOak from "./assets/ap/whiteoffshore/458749236_1303147664159296_5138544588543275994_n.jpg";
import WhiteOak2 from "./assets/ap/whiteoffshore/459681480_2028075437634410_5145071184438351717_n.jpg";
import WhiteOak3 from "./assets/ap/whiteoffshore/460039027_893444089329694_158634460668621927_n.jpg";
import WhiteOak4 from "./assets/ap/whiteoffshore/460340348_1723661348469540_4493477087698806280_n.jpg";
import WhiteOak5 from "./assets/ap/whiteoffshore/461135823_410897542031079_4118100640317571765_n.jpg";
import WhiteOak6 from "./assets/ap/whiteoffshore/461191424_902994841705021_18105049772652262_n.jpg";
import PaneraiPa from "./assets/panerai/pa/1b3d34ef-14c9-42a0-b619-ca5a2a17d1d4.jpeg";
import PaneraiPa2 from "./assets/panerai/pa/6bb61ea8-2839-48fb-89dd-753763c25fc2.jpeg";
import PaneraiPa3 from "./assets/panerai/pa/80f7e4ed-b704-4641-a1a0-bf68e83556f9.jpeg";
import PaneraiPa4 from "./assets/panerai/pa/60996d57-78fc-420a-be7d-80c586382d9d.jpeg";
import PaneraiPa5 from "./assets/panerai/pa/c48511bb-00d2-44b9-a60a-c1d553f1576e.jpeg";
import PaneraiPa6 from "./assets/panerai/pa/f36479f2-0616-46b8-879e-cf23d09064b3.jpeg";
import CartierPasha from "./assets/cartier/pasha/25832b5f-efda-47a9-b3e3-61d590a3cb6f.jpeg";
import { BsCartPlus, BsDatabaseLock, BsNodeMinus, BsNodePlus } from "react-icons/bs";
import { TableContainer } from "@mui/material";
import getDb from "./FirestoreSDK";
import { collection, getDocs,doc, updateDoc } from "firebase/firestore";


export default function Windowframe(){

    const { isOpen, onToggle } = useDisclosure();
    return(<>
            <IconButton icon={<Watch></Watch>} variant={'none'} sx={{position: 'relative', top: "-9.5pc", left: "15pc", color:"brown", bg: "transparent"}} onClick={onToggle}></IconButton>
                <Fade in={isOpen}>
                    <Box p='40px' color='white' mt='4' bg='yellow.500' rounded='md' shadow='md' sx={{position: 'relative', top: "1pc"}}>
                        <Cartier_Santos_In_Stock></Cartier_Santos_In_Stock>
                        <Panerai_Strap_In_Stock></Panerai_Strap_In_Stock>
                        <Rolex_DateJust_In_Stock></Rolex_DateJust_In_Stock>
                        <Omega_In_Stock></Omega_In_Stock>
                        <Text sx={{fontFamily: 'La Belle Aurore', position: 'relative', top: '-60pc', fontSize: 'xxx-large', font: 'bold', left: '60pc'}}>  Se &#129397; y    </Text>
                        <Geneve_Square_14k_Gold_Lady_In_Stock></Geneve_Square_14k_Gold_Lady_In_Stock>
                        <Heuer_Strap_In_Stock></Heuer_Strap_In_Stock>
                        <Cartier_Santos_Diamonds_In_Stock></Cartier_Santos_Diamonds_In_Stock>
                        <AP_Oak_In_Stock></AP_Oak_In_Stock>
                        <Text sx={{fontFamily: 'La Belle Aurore', position: 'relative', top: '-100pc', fontSize: 'xxx-large', font: 'bold', left: '5pc'}}> Be Rebels    </Text>
                        <Patek_Philipe_R_In_Stock></Patek_Philipe_R_In_Stock>
                        <Patek_Philipe_A_In_Stock></Patek_Philipe_A_In_Stock>
                        <BNIB_AP_Oak_In_Stock></BNIB_AP_Oak_In_Stock>
                        <AP_Oak_OffShore_In_Stock></AP_Oak_OffShore_In_Stock>
                        <Text sx={{fontFamily: 'La Belle Aurore', position: 'relative', top: '-155pc', fontSize: 'xxx-large', font: 'bold', left: '54pc'}}> Emperor  </Text>
                        <Rolex_DateJust_Diamonds_A_In_Stock></Rolex_DateJust_Diamonds_A_In_Stock>
                        <Cartier_Santos_Diamond_Crown_In_Stock></Cartier_Santos_Diamond_Crown_In_Stock>
                        <Audemars_Piguet_white_Oak_In_Stock></Audemars_Piguet_white_Oak_In_Stock>
                        <Panerai_Pa_Luminor_Marina_In_Stock></Panerai_Pa_Luminor_Marina_In_Stock>
                        <Text sx={{fontFamily: 'La Belle Aurore', position: 'relative', top: '-210pc', fontSize: 'xxx-large', font: 'bold', left: '10pc'}}> Warrior  </Text>
                        <Cartier_Pasha_Seatimer_In_Stock></Cartier_Pasha_Seatimer_In_Stock>
                        <Members_Addons></Members_Addons>
                        <House_Of_Exclusivity></House_Of_Exclusivity>
                     </Box>
            </Fade>
        </>);
}

function Members_Addons(){

    const toast = useToast()

    return(<>
        <IconButton icon={<Watch></Watch>} position={'relative'} top={'-220pc'} left={'30pc'} color={'blue'} bg={'transparent'} 
        onClick={() =>toast({
          title: 'Exchange your memories',
          description: "Excellent You have share details about your masterpiece, through email. Have a great day",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })}></IconButton>
        
    </>)
}

function House_Of_Exclusivity(){
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ email, setEmail ] = useState('')
    const [ role, setRole ] = useState('')
    const [ collector, setCollector ] = useState('')
    const [ verfied, setVerfied] = useState(false)
    const [ DOCID, setDOCID] = useState('')
    const [ txsStatus, setTxsStatus ] = useState('')
    const [ interest, setInterest ] = useState([])


    const onHandle_Email = async(event) => {setEmail(event.target.value);}
    const onHandle_Role = async(event) => {setRole(event.target.value);}
    const onHandle_CollectorType = async(event) => {setCollector(event.target.value);}

    const onHandle_EmailQuery_if_exist = async() => {

        try{

            (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                
                   if ((doc.data().Email === email)){ 
                    setDOCID(doc.id); 
                    console.log('document reference: ',DOCID); 
                    setVerfied(true); setTxsStatus(doc.data().status);  
                    console.log('status: ',txsStatus);  }
            })
        
        }catch(error){
            console.log('error', error)
        }

    }

    const onHandle_Update_Member = async() =>{

        interest.push({Role: role, Collector: collector});
        setInterest(interest);
        console.log('My interest:', interest);
        const docRef = doc(getDb(), "ExclusiveMembership",DOCID);
    
        await updateDoc(docRef, {
                    
                 Interest: interest,
        })
        alert('Your record have been updated')
    }



    return(<>
        <IconButton onClick={onOpen} icon={<PiGavel></PiGavel>} position={'relative'} top={'-220pc'} left={'50pc'} color={'blue'} bg={'transparent'}></IconButton>
        <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> <Heading as='h3' color={'yellow.600'}> Exclusivess is an art !</Heading> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
                <FormControl>
                    <FormLabel> Email </FormLabel>
                    <Input placeholder="email" type="email" focusBorderColor="yellow.600" onChange={onHandle_Email}></Input>
                    <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={ txsStatus === 'verified' ? '-2.5pc' :'-2.5pc'} left={'26pc'} bg={'transparent'} color={verfied ? 'yellow.600': 'red.600'}></IconButton>
                    {txsStatus === 'verified' ? ' ': <FormHelperText color='red' position={'relative'} top={'-2pc'} left={'2pc'}> Your membership is not yet active </FormHelperText>}
                    {txsStatus === 'verified' ?
                    <Box position={'relative'} top={'-2pc'}>
                        <FormLabel> Your Role: </FormLabel>
                        <Stack spacing={2}>
                            <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Role}>
                                <option> As a buyer </option>
                                <option> As a seller </option>
                            </Select>
                        </Stack>
                        <FormLabel> Collector : </FormLabel>
                        <Stack spacing={2}>
                            <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_CollectorType}>
                                <option> Watch [Inital offer = 0.5 BTC] </option>
                                <option> Pen's [Inital offer = 1 BTC] </option>
                                <option> Fragances [Inital offer = 0.3 BTC] </option>
                                <option> Cars [Inital offer = 3 BTC] </option>
                                <option> Real Estate [Inital offer = 100 BTC] </option>
                            </Select>
                        </Stack>
                        <IconButton icon={<BsDatabaseLock></BsDatabaseLock>} position={'relative'} left={'10pc'} top={'1pc'} bg={'transparent'} color={'yellow.600'} onClick={onHandle_Update_Member}></IconButton>
                    </Box>: ''}
                </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>)
}

function Cartier_Santos_In_Stock(){
    
    const images = [
        CartierWatchFront, CartierWatchFrontWithBox, CartierWatchFrontWithBoxFar, CartierWatchBox
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Cartier Santos XL 100 Automatic for Mens" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', left : '5pc', top: '10pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '1.8pc', height: '8pc', top: "1pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '12pc', height: '8pc', top: "1pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '2pc', left: '5pc', width: '10pc'}}> Cartier Santos XL 100 Automatic </Text>
                    <CartierDetails></CartierDetails>
            </>);
}

function CartierDetails(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'black', position: 'relative', top: '-4pc', left: '10pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Cartier Santos XL 100 Automatic </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 54.9 x 46.5 mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> 2656 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Color </Td>
                                        <Td> White / Stainless Stell </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Limited Edition </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Production Year </Td>
                                        <Td> 2004 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Strap Color </Td>
                                        <Td> Black Leather </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 4000 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Calculated  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Buckle </Td>
                                        <Td> Stainless Steel </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> Good </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Chrono24 Secondary Market Price </Td>
                                        <Td> 3500 - 6000 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> <LocationSearching></LocationSearching> </Td>
                                        <Td> USA </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function Panerai_Strap_In_Stock(){
    
    const images = [
        PaneraiStrap
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Panerai Strap black Ortish Leather" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-13pc', left: '30pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '27pc', height: '8pc', top: "-21.9pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '37.5pc', height: '8pc', top: "-21.9pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-21pc', left: '32.5pc', width: '10pc'}}>PANERAI SUBMERSIBLE STRAPS - OSTRICH LEG BLACK </Text>
                    <Panerai_Strap_Details></Panerai_Strap_Details>
            </>);
}

function Panerai_Strap_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'black', position: 'relative', top: '-29pc', left: '33pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Panerai Submersible Strap </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Long / Short </Td>
                                        <Td> 115 / 65 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Width Dimension </Td>
                                        <Td> 22 / 20 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Limited Edition </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Min Quality </Td>
                                        <Td> 3 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Strap Color </Td>
                                        <Td> Black Ortish Leather </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 572 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Calculated  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Buckle </Td>
                                        <Td> Stainless Steel </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> New </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> <LocationSearching></LocationSearching> </Td>
                                        <Td> Turkey </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function Rolex_DateJust_In_Stock(){
    
    const rolex_images = [
        RolexDateJust1, RolexDateJustStrap , RolexDateJust2, RolexDateJust3,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % rolex_images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + rolex_images.length) % rolex_images.length);
    }
    return(<>
            
                    <Image src={rolex_images[currentIndex]} alt="Rolex DateJust Timepiece" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-39pc', left: '55pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '51.5pc', height: '8pc', top: "-47.9pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '62.5pc', height: '8pc', top: "-47.9pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-47pc', left: '56pc', width: '10pc'}}> Rolex DateJust  </Text>
                    <Rolex_DateJust_Details></Rolex_DateJust_Details>
            </>);
}

function Rolex_DateJust_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'black', position: 'relative', top: '-51pc', left: '58pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Rolex Datejust 36 Diamonds  </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 36 mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> 16013G </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Case Color </Td>
                                        <Td> Gold / Steel </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Braclet Color </Td>
                                        <Td> Gold / Steel </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Production Year </Td>
                                        <Td> 1998 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> No </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 5400 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Calculated  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gemstone </Td>
                                        <Td> Diamonds </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> Good </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Chrono24 Secondary Market Price </Td>
                                        <Td> 4700 - 5400 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> <LocationSearching></LocationSearching> </Td>
                                        <Td> USA </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Vintage </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Payment Accept </Td>
                                        <Td> Bank Wire </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function Omega_In_Stock(){
    
    const images = [
        OmegaWatch
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Omega Speedmaster Professional" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-40pc', left: '28pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '24pc', height: '8pc', top: "-49.2pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '36pc', height: '8pc', top: "-49.2pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-47pc', left: '29pc', width: '10pc'}}> Omega Speedmaster Professional  </Text>
                    <Omega_Speedmaster_Professional_Details></Omega_Speedmaster_Professional_Details>
            </>);
}

function Omega_Speedmaster_Professional_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'black', position: 'relative', top: '-54pc', left: '30pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Omega Speedmaster Professional   </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 42mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> 145.012-67 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Case Color </Td>
                                        <Td> Silver </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Braclet Color </Td>
                                        <Td> Silver </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Production Year </Td>
                                        <Td> 1960-1969 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> On Request </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Calculated  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> Good </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Case Material </Td>
                                        <Td> Stainless Steel </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Vintage </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> <LocationSearching></LocationSearching> </Td>
                                        <Td> Portland, USA </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Bitcoin Payment </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function Geneve_Square_14k_Gold_Lady_In_Stock(){
    
    const images = [
        Geneve14k1, Geneve14k2, Geneve14k3, Geneve14k4
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt=" Geneve Square 14k Gold" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-45pc', left: '5pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '2pc', height: '8pc', top: "-54.2pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '12pc', height: '8pc', top: "-54.2pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-53pc', left: '5pc', width: '10pc'}}> Geneve Square 14k Gold Lady  </Text>
                    <Geneve_Quatz_14K_Gold_Details></Geneve_Quatz_14K_Gold_Details>
            </>);
}

function Geneve_Quatz_14K_Gold_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'black', position: 'relative', top: '-59pc', left: '6pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Geneve Quatz 14k Gold Lady   </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 28 × 37mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> 0585 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Material </Td>
                                        <Td> Gold 14k </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Weight </Td>
                                        <Td> 59.25g </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Production Year </Td>
                                        <Td> Unknown </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Quatz </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Lady </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> No </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> No </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> On Request </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Hallmark </Td>
                                        <Td> 14k Gold / 0585 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Calculated  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> used </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orgin </Td>
                                        <Td> Italy </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Vintage </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Bitcoin Payment </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function Heuer_Strap_In_Stock(){
    
    const images = [
        HeuerStrap, HeuerStrap2, HeuerStrap3
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Heuer Corfam Strap" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-67.5pc', left: '30pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '27pc', height: '8pc', top: "-77.2pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '37.5pc', height: '8pc', top: "-77.2pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-75.5pc', left: '30pc', width: '10pc'}}> Heuer Corfam Strap BLACK Printed Calendar </Text>
                    <Heuer_Strap_Details></Heuer_Strap_Details>
            </>);
}

function Heuer_Strap_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'black', position: 'relative', top: '-84.3pc', left: '33pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Heuer Corfam Strap Black </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Long / Short </Td>
                                        <Td> 20 / 16 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Width Dimension </Td>
                                        <Td> 20mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Limited Edition </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Quality </Td>
                                        <Td> 1 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Strap Color </Td>
                                        <Td> Black  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 1000 Euro  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Include  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Buckle </Td>
                                        <Td> Heuer Sun </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> New / unused  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> <LocationSearching></LocationSearching> </Td>
                                        <Td> Prague,Czech </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}


function Cartier_Santos_Diamonds_In_Stock(){
    
    const images = [
        CartierSantosBlueface, CartierSantosBlueface2, CartierSantosBlueface3, CartierSantosBlueface4, CartierSantosBlueface5
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Cartier Santos Diamonds" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-92pc', left: '54pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '50pc', height: '8pc', top: "-101.5pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '62pc', height: '8pc', top: "-101.5pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-100pc', left: '56pc', width: '10pc'}}> Cartier Santos Diamond  </Text>
                    <Cartier_Santos_Diamonds_Details></Cartier_Santos_Diamonds_Details>
            </>);
}

function Cartier_Santos_Diamonds_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'white', position: 'relative', top: '-105pc', left: '57pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Cartier Santos Diamond   </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 35mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> W4SA0006 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Case Material </Td>
                                        <Td> Steel  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Dial </Td>
                                        <Td> Blue </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Production Year </Td>
                                        <Td> 2021 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Crystal </Td>
                                        <Td> Sapphire </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Unisex </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> On Request </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Hallmark </Td>
                                        <Td> Cartier </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Calculated  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> used </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Brand / Model </Td>
                                        <Td> Cartier Santos </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function AP_Oak_In_Stock(){
    
    const images = [
        AudemarsPiguet
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Audemars Piguet" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-94.5pc', left: '30pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '27pc', height: '8pc', top: "-104pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '37pc', height: '8pc', top: "-104pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-102.5pc', left: '31pc', width: '10pc'}}> Audemars Piguet Royal Oak  Chronograph Limited Edition 500   </Text>
                    <Audemars_Piguet_500_Details></Audemars_Piguet_500_Details>
            </>);
}

function Audemars_Piguet_500_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'black', position: 'relative', top: '-112pc', left: '36pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Audemars Piguet Royal Oak Chronograph  </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 41mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> 26331IP.OO.1220IP.01 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Case Material </Td>
                                        <Td> Titanium  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Water Resistance </Td>
                                        <Td> 5 ATM </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Purchase Year </Td>
                                        <Td> 2020 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 90,220 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Braclet Material </Td>
                                        <Td> Titanium </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> 1100 USD  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> very good </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Secondary Market Chrono24 </Td>
                                        <Td> 59K - 205K USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Bitcoin Payment </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> <LocationSearching></LocationSearching> </Td>
                                        <Td> Dubai </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function Patek_Philipe_R_In_Stock(){
    
    const images = [
        PatekPhilipeR, PatekPhilipeR2, PatekPhilipeR3
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Patek Philipe" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-90pc', left: '5pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '1pc', height: '8pc', top: "-98.5pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '13pc', height: '8pc', top: "-98.5pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-98pc', left: '6pc', width: '10pc'}}> Patek Philippe Aquanaut Rose  </Text>
                    <Patek_Philipe_R_Details></Patek_Philipe_R_Details>
            </>);
}

function Patek_Philipe_R_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'white', position: 'relative', top: '-106pc', left: '6pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Patek Philippe Aquanaut Rose Dial  </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 42.2mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> 5968R-001 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Case Material </Td>
                                        <Td> Rose gold  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Production Year </Td>
                                        <Td> 2023 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men / Unisex </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 153,000 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Braclet Material </Td>
                                        <Td> Brown Rubber Strap </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Crystals </Td>
                                        <Td> Sapphire </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Water Resistance </Td>
                                        <Td> 10 ATM </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Power Reserve </Td>
                                        <Td> 55h </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Jewels </Td>
                                        <Td> 32 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Numerals </Td>
                                        <Td> Arabic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> 1200 USD  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> Brand New </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> International Warranty </Td>
                                        <Td> 2 Years </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Secondary Market Chrono24 </Td>
                                        <Td> 122,000 - 153,000 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Bank Payment </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> <LocationSearching></LocationSearching> </Td>
                                        <Td> Malaysia </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function Patek_Philipe_A_In_Stock(){
    
    const images = [
        PatekPhilipeA, PatekPhilipeA1, PatekPhilipeA2, PatekPhilipeA3, PatekPhilipeA4
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Patek Philipe" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-112pc', left: '30pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '27pc', height: '8pc', top: "-121pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '37pc', height: '8pc', top: "-121pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-120pc', left: '31pc', width: '10pc'}}> Patek Philippe Aquanaut Blue  </Text>
                    <Patek_Philipe_A_Details></Patek_Philipe_A_Details>
            </>);
}

function Patek_Philipe_A_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'white', position: 'relative', top: '-127pc', left: '36pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Patek Philippe Aquanaut Blue  </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 42.2mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> 5968A-001 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Case Material </Td>
                                        <Td> Steel  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Production Year </Td>
                                        <Td> 2023 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men / Unisex </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 183,700 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Braclet Material </Td>
                                        <Td> Blue Rubber Strap </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Crystals </Td>
                                        <Td> Sapphire </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Water Resistance </Td>
                                        <Td> 10 ATM </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Power Reserve </Td>
                                        <Td> 55h </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Jewels </Td>
                                        <Td> 32 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Numerals </Td>
                                        <Td> Arabic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> 1200 USD  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> Brand New </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> International Warranty </Td>
                                        <Td> 2 Years </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Secondary Market Chrono24 </Td>
                                        <Td> 152,000 - 249,000 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Bank Payment </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> <LocationSearching></LocationSearching> </Td>
                                        <Td> Malaysia </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function BNIB_AP_Oak_In_Stock(){
    
    const images = [
        BNIPAP, BNIPAP2, BNIPAP3
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Audemars Piguet" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-135pc', left: '52pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '48pc', height: '8pc', top: "-144pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '60pc', height: '8pc', top: "-144pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-143pc', left: '53pc', width: '10pc'}}> BINP Audemars Piguet Royal Oak Selfwiding Chronograph   </Text>
                    <BINP_AP_Details></BINP_AP_Details>
            </>);
}

function BINP_AP_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'black', position: 'relative', top: '-152pc', left: '58pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> BINP Audemars Piguet Royal Oak Chronograph  </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 38mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Thickness </Td>
                                        <Td> 11mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> 26715 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Case Material </Td>
                                        <Td> Steel  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Water Resistance </Td>
                                        <Td> 5 ATM  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Jewels </Td>
                                        <Td> 39  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Power reserve </Td>
                                        <Td> 40h  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Crystal </Td>
                                        <Td> Sapphire  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Dial Numbers </Td>
                                        <Td> NO Numerals  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Purchase Year </Td>
                                        <Td> 2024 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 59,375 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Braclet Material </Td>
                                        <Td> Steel </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Calculated  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> Brand New </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Secondary Market Chrono24 </Td>
                                        <Td> 39000 - 108,000 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> <LocationSearching></LocationSearching> </Td>
                                        <Td> NYC, United State </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function AP_Oak_OffShore_In_Stock(){
    
    const images = [
        APOffShore, APOffShore2, APOffShore3, APOffShore4, APOffShore5
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Audemars Piguet" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-140pc', left: '30pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '27pc', height: '8pc', top: "-149pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '37pc', height: '8pc', top: "-149pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-148pc', left: '31pc', width: '10pc'}}> Audemars Piguet Royal Oak Offshore Diver </Text>
                    <AP_Offshore_Details></AP_Offshore_Details>
            </>);
}

function AP_Offshore_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'white', position: 'relative', top: '-155pc', left: '33pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Audemars Piguet Royal Oak Offshore Diver </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 42 x 55mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> 15703st </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Case Material </Td>
                                        <Td> Steel  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Water Resistance </Td>
                                        <Td> 30 ATM  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Jewels </Td>
                                        <Td> 40  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Power reserve </Td>
                                        <Td> 60h  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Dial </Td>
                                        <Td> Black  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Numerals </Td>
                                        <Td> No  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Crystal </Td>
                                        <Td> Sapphire </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 24,375 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Braclet </Td>
                                        <Td> Rubber Black </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Calculated  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> Good </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Secondary Market Chrono24 </Td>
                                        <Td> 16,200 - 42,000 USD </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function Cartier_Pasha_Seatimer_In_Stock(){
    
    const images = [
        CartierPasha
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Cartier Pasha Seatimer " width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-228pc', left: '50pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '47pc', height: '8pc', top: "-238pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '57pc', height: '8pc', top: "-238pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-236pc', left: '52pc', width: '10pc'}}> Cartier Pasha Seatimer  </Text>
                    <Cartier_Pasha_Seatimer_Details></Cartier_Pasha_Seatimer_Details>
            </>)
}

function Rolex_DateJust_Diamonds_A_In_Stock(){
    
    const images = [
        RolexDiamonds, RolexDiamonds2, RolexDiamonds3, RolexDiamonds4, RolexDiamonds5
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Rolex DateJust" width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-150pc', left: '5pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '1pc', height: '8pc', top: "-159pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '13pc', height: '8pc', top: "-159pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-158pc', left: '6pc', width: '10pc'}}> Rolex Datejust 36 Mother of Pearl  </Text>
                    <Rolex_DateJust_Diamonds_Details></Rolex_DateJust_Diamonds_Details>
            </>);
}
function Rolex_DateJust_Diamonds_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'black', position: 'relative', top: '-163pc', left: '8pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Rolex Datejust 36 Mother of Pearl  </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 36mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> 16234 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Case Material </Td>
                                        <Td> Steel  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men / Unisex </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> No </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> On Request </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Braclet Material </Td>
                                        <Td> Steel </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Crystals </Td>
                                        <Td> Sapphire </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Water Resistance </Td>
                                        <Td> 10 ATM </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Power Reserve </Td>
                                        <Td> 48h </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Bazel Material </Td>
                                        <Td> Gem's </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Dial </Td>
                                        <Td> Mother of Pearl </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Numerals </Td>
                                        <Td> Gemstones </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Calculated  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> Used </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Caliber </Td>
                                        <Td> 3135 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Secondary Market Chrono24 </Td>
                                        <Td> 7200 - 9200 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Bank Payment </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> <LocationSearching></LocationSearching> </Td>
                                        <Td> Flordia, USA </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function Cartier_Santos_Diamond_Crown_In_Stock(){
    
    const images = [
        CartierSantosGemstone, CartierSantosGemstone2, CartierSantosGemstone3, CartierSantosGemstone4, CartierSantosGemstone5
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Cartier Santos " width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-173pc', left: '30pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '27pc', height: '8pc', top: "-182pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '37pc', height: '8pc', top: "-182pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-181pc', left: '31pc', width: '10pc'}}> Cartier Santos 100  </Text>
                    <Cartier_Santos_Gemstone_Details></Cartier_Santos_Gemstone_Details>
            </>);
}

function Cartier_Santos_Gemstone_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'white', position: 'relative', top: '-185pc', left: '33pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Catier Santos - 100 </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 38mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> 2656 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Case Material </Td>
                                        <Td> Steel  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men / Unisex </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 5400 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Braclet Material </Td>
                                        <Td> Orginal Cartier Cocodile Leather </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Crown </Td>
                                        <Td> Sapphire </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Water Proof </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Dial </Td>
                                        <Td> Steel </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Numerals </Td>
                                        <Td> Arabic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Calculated  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Warranty </Td>
                                        <Td> 2 years </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Secondary Market Chrono24 </Td>
                                        <Td> 3000 - 9500 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Payment Mode </Td>
                                        <Td> Bitcoin </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function Audemars_Piguet_white_Oak_In_Stock(){
    
    const images = [
        WhiteOak, WhiteOak2, WhiteOak3, WhiteOak4, WhiteOak5, WhiteOak6
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Audemars Piguet Royal Oak Chorograph [white] " width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-194pc', left: '52pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '47pc', height: '8pc', top: "-203.5pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '60pc', height: '8pc', top: "-203.5pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-202pc', left: '52.5pc', width: '10pc'}}> Audemars Piguet Royal Oak Offshore Chornograph [White]  </Text>
                    <Aduemars_Piguet_Oak_White_Details></Aduemars_Piguet_Oak_White_Details>
            </>)
}

function Aduemars_Piguet_Oak_White_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'black', position: 'relative', top: '-209pc', left: '56pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Audemar's Piguet Royal Oak Offshore Chronograph [White Cermaic]  </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diameter </Td>
                                        <Td> 44mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> 26402CB.OO.A010CA.01 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Case Material </Td>
                                        <Td> Cermaic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Production Year </Td>
                                        <Td> 2014 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men / Unisex </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 87600 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Braclet Material </Td>
                                        <Td> White Rubber </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Crystals </Td>
                                        <Td> Sapphire </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Water Resistance </Td>
                                        <Td> 10 ATM </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Jewels </Td>
                                        <Td> 59 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Numerals </Td>
                                        <Td> No </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> 1500 USD  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> Very Good </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Secondary Market Chrono24 </Td>
                                        <Td> 72,000 - 115,000 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Bitcoin Payment </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> <LocationSearching></LocationSearching> </Td>
                                        <Td>  Morrisville, North Carolina </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function Panerai_Pa_Luminor_Marina_In_Stock(){
    
    const images = [
        PaneraiPa4, PaneraiPa2, PaneraiPa3, PaneraiPa, PaneraiPa5, PaneraiPa6
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const plus = () =>{
        setCurrentIndex((previousIndex) => (previousIndex +1) % images.length);
    }

    const minus = () => {
        setCurrentIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
    }
    return(<>
            
                    <Image src={images[currentIndex]} alt="Panerai Luminor Marina Automatic Firenze 1890 " width={150} height={150} sx={{borderRadius: "20pc", position: 'relative', top: '-200pc', left: '30pc'}}></Image>
                    <IconButton icon={<BsNodePlus></BsNodePlus>} onClick={plus} sx={{position: 'relative', left: '27pc', height: '8pc', top: "-209pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <IconButton icon={<BsNodeMinus></BsNodeMinus>} onClick={minus} sx={{position: 'relative', left: '37pc', height: '8pc', top: "-209pc", bg: "transparent", color: "black", fontSize: 'large'}}></IconButton>
                    <Text sx={{ position: 'relative', top: '-208pc', left: '31pc', width: '10pc'}}> Panerai Luminor Marina Automatic Firenze 1890  </Text>
                    <Panerai_Luminor_Marina_1890_Details></Panerai_Luminor_Marina_1890_Details>
            </>)
}

function Panerai_Luminor_Marina_1890_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'black', position: 'relative', top: '-215pc', left: '33pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Panerai Luminor Marina Automatic Firenze 1890  </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> OP 6693, BB1219876 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Production Year </Td>
                                        <Td> 2000-2009 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men / Unisex </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> No </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> No </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 5520 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Braclet Material </Td>
                                        <Td> Brown Leather </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Dial </Td>
                                        <Td> 12 hour  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Hours </Td>
                                        <Td> Non numeric Hour Marks / Large </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Vintage </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Numerals </Td>
                                        <Td> Arabic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Calculated  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> Used </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Secondary Market Chrono24 </Td>
                                        <Td> 5200 - 7200 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Bitcoin Payment </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}

function Cartier_Pasha_Seatimer_Details(){
    const { isOpen , onOpen, onClose} = useDisclosure();
    const buttonRef = useRef();
    const EmailToast = useToast();
    const TimerToast = useToast();

    
    return(<> <IconButton icon={<BsCartPlus></BsCartPlus>} ref={buttonRef} onClick={onOpen} sx={{bg: 'transparent' ,color: 'white', position: 'relative', top: '-242pc', left: '53pc'}}></IconButton>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={buttonRef}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader> Cartier Pasha Seatimer  </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant={'simple'}>
                                <Thead>
                                    <Tr>
                                        <Th> Specs </Th>
                                        <Th> Details </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td> Diaimeter </Td>
                                        <Td> 40mm </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Reference </Td>
                                        <Td> W31077u2 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Power Reserve </Td>
                                        <Td> 42 h </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Water Resistance </Td>
                                        <Td> 100M </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Glass Material </Td>
                                        <Td> Scratch Resistant Glare Proof Sapphire Crystal </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Hands </Td>
                                        <Td> Luminescent Hands And Numerals </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Production Year </Td>
                                        <Td> Unknown </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Mechanism </Td>
                                        <Td> Automatic / Self Winding  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Gender </Td>
                                        <Td> Men / Unisex </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Papers </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Orginial Box </Td>
                                        <Td> No </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Price </Td>
                                        <Td> 3000 USD </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Private Seller </Td>
                                        <Td> Yes </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Braclet Material </Td>
                                        <Td> Black Leather </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Dial </Td>
                                        <Td> Black  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Special </Td>
                                        <Td> Date </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Crown </Td>
                                        <Td> Sapphire crystal </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Numerals </Td>
                                        <Td> Arabic </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Shipping Cost </Td>
                                        <Td> Calculated  </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Condition </Td>
                                        <Td> Used </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Secondary Market Chrono24 </Td>
                                        <Td> 3000 - 7600 </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> Payment Mode </Td>
                                        <Td> Bank </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <IconButton icon={<Email></Email>} onClick={() => EmailToast({
                            title: 'Buy now',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com]',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })} sx={{position: 'relative', top: '1pc', bg: 'black', color: 'white'}}></IconButton>
                        <IconButton icon={<Timer></Timer>} onClick={() => TimerToast({
                            title: 'Shall you want to hold masterpiece',
                            description: 'Share your shippment address, First name, Last name & contact details on our email address [wizdwarfs@gmail.com] & 20% inital deposit on our bitcoin wallet. Reserve time will be 14 days. ',
                            status: 'loading',
                            isClosable: true,
                            duration: 9000,
                        })}  sx={{position: 'relative', top: '1pc', left: '12pc', bg: 'black', color: 'white'}}></IconButton>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>);
}