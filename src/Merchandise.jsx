import { Box, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Image, Text, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, FormControl, FormLabel, Input, Stack, Select, NumberInputField, NumberInput, NumberIncrementStepper, NumberInputStepper, NumberDecrementStepper, FormHelperText, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverBody, PopoverHeader, Popover, Spinner, Tabs, TabList, Tab, TabPanels, TabPanel, Card ,CardBody,Tag, CardHeader, Center, Divider, Heading } from "@chakra-ui/react"
import { Business, CalendarMonthOutlined, Cancel, CardMembership, Castle, CurrencyBitcoinRounded, DataObject, FamilyRestroom, FoodBank, Games, Handshake, Hiking, Home, Hotel, PersonPinCircle, Restaurant, Send, ShoppingCart, Stadium, VerifiedUser} from "@mui/icons-material";
import {
    Step,
    StepDescription,
    StepIndicator,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    AspectRatio,
  } from '@chakra-ui/react'
import { useRef, useState, useEffect } from "react";
import { FacebookProvider, LoginButton, Page} from "react-facebook";
import Breguet from "./assets/Breguet-Classique-Tourbillon.jpg";
import VintagePen from "./assets/Limited.jpg";
import { PiGlobeDuotone, PiInvoiceBold } from "react-icons/pi";
import { TbBeach, TbChess, TbCircleCheck, TbPerfume } from "react-icons/tb";
import CaronsPoivre from "./assets/CaronsPoivre.jpg";
import SexyCars from "./assets/apbmt-2022.jpg";
import { BsDatabaseAdd, BsPersonPlus } from "react-icons/bs";
import { Avatar, CardContent } from "@mui/material";
import { BiBitcoin, BiCoinStack, BiCrown, BiLike, BiMicrophone, BiPackage } from "react-icons/bi";
import { FaBitcoin, FaChessBoard, FaChessKing, FaChessQueen, FaMicrophone, FaTruckPickup } from "react-icons/fa";
import getDb from "./FirestoreSDK";
import axios from "axios";

import Windowframe from "./Windowframe";
import LimitedEditionPen from "./LimitedEditionPen";

import { addDoc, collection, getDocs,doc, updateDoc } from "firebase/firestore";
import Fragance from "./Fragance";
import Cars from "./Cars";




function Entice(){
    
    const [ verified, setVerfied ] = useState(false)
    const [ DOCID, setDOCID ] = useState(false)

    const facebook_login_response = async(response) =>{ console.log('facebbook login response', response);  
        
        if (response.userID == '' || response.status !== 'connected' ){
            alert('No account connect'); setVerfied(false);}
        else{
            setVerfied(true);}

        // try{

        //     (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                
        //            if ( doc.data().Name.match(response.name) && ( doc.data().level >= 1 || doc.data().Email.match(response.email))){ setDOCID(doc.id); console.log('document reference: ',DOCID); }
        //     })
        
        // }catch(error){
        //     console.log('error', error)
        // }

        // const docRef = doc(getDb(), "ExclusiveMembership",DOCID);
    
        // await updateDoc(docRef, {
                    
        //     profileVerfication: true,
        // })
        // setVerfied(true);
    }

    const onError = (error) =>{ alert('No Facebook account against your email ')}
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(<>
            <IconButton icon={<Restaurant></Restaurant>} onClick={onOpen} sx={{position: 'relative', top: '6pc', left: '0pc', color: 'yellow.600', bg: 'transparent'}}></IconButton>
            <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
                <ModalOverlay></ModalOverlay>
                <ModalContent>
                    <ModalHeader sx={{color: 'yellow.600', position: 'relative', left: '30pc', top: '3pc'}}> Entice Pal <Tag color= {'yellow.600'} bg={'transparent'}> 1 </Tag> </ModalHeader>
                    <ModalCloseButton></ModalCloseButton>
                    <ModalBody>
                        <Box sx={{position: 'relative', top: '15pc', left: '30pc', color: 'white', bg: verified ? 'blue': 'red', width: '10pc', borderRadius: '2pc'}}>
                           {/* <FacebookLogin appId={'920077980228702'} autoload={true} fields={"name,email,picture"} cssClass="my-facebook-button-class" icon="fa-facebook" callback={facebook_login_response}></FacebookLogin> { verified ? <Text color={'green'} position={'relative'} top={'2pc'} left ={'3pc'} fontSize={'lg'}> 🎉 🎉 🎉 </Text> : <Spinner></Spinner>} */}
                           <FacebookProvider appId={'920077980228702'}>
                               <LoginButton scope="email" onSuccess={facebook_login_response} sx={{height: '2pc'}}> {verified ? <Text position={'relative'} top={'1pc'}> ⓕ Connected Facebook </Text> :'ⓕ Connect via Facebook'} </LoginButton>
                               {verified ? <Box position={'relative'} top={'-10pc'} left={'-10pc'} width={'50pc'} borderRadius={'12pc'} color={'darkslategrey'}>
                                <Page href="https://www.facebook.com/wisdomenigma" tabs="timeline"></Page>
                            </Box>: ''}
                               
                           </FacebookProvider>
                           
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
    </>)
}


function Exclusive(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    
    const [ adult, setAdults ] = useState(0)
    const [ babies, setBabies ] = useState(0)
    const [ kids, setKids ] = useState(0)
    const [ growup, setGrowup ] = useState(0)
    const [ Email, setEmail ] = useState('')
    const [ arrival, setArrival ] = useState('')
    const [ deparature, setDeparture ] = useState('')
    const [ restroom, setRestroom ] = useState('')
    const [ verified, setVerfied ] = useState(false)
    const [ reserve, setReserve ] = useState([])
    const [ DOCID, setDOCID ] = useState('')

    const [ paymentStatus, setPaymentStatus ] = useState('')
    const [ membershipStatus, setMembershipStatus ] = useState('')

    const onHandle_Adults = async(adult) => {setAdults(adult); console.log('adult', adult)}
    const onHandle_Restroom = async(event) => {setRestroom(event.target.value); console.log('restroom', restroom)}
    const onHandle_Email = async(event) => {setEmail(event.target.value); console.log('email', Emailmail)}
    const onHandle_Babies = async(babies) => {setBabies(babies); console.log('babies', babies)}
    const onHandle_Kids = async(kids) => {setKids(kids); console.log('kids', kids)}
    const onHandle_Grow = async(growup) => {setGrowup(growup); console.log('growup', growup)}
    const onHandle_Arrival_Date = async(event) => {setArrival(event.target.value); console.log('arrival', arrival)}
    const onHandle_Departure_Date = async(event) => {setDeparture(event.target.value); console.log('departure', deparature)}
    
    const onHandle_EmailQuery_if_exist = async() => {

        try{

            (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                
                   if ((doc.data().Email === Email && doc.data().level >= 1)){ 
                    setDOCID(doc.id); console.log('document reference: ',DOCID); 
                    setVerfied(true);
                    setMembershipStatus(doc.data().status);
                }
            })
        
        }catch(error){
            console.log('error', error)
        }

    }
    
    
    const onHandle_Reserve = async() => {
        
        let reserve = [];
        reserve.push({'Adult': adult, 'Baby': babies,'Kids': kids, 'Grow': growup, 'Arrival': arrival, 'Departure': deparature, 'Restroom': restroom});
        setReserve(reserve); console.log('reserve', reserve);

        const collectionRef = collection(getDb(), "ExclusiveMembership");

        try{

            await addDoc(collectionRef, {

                Reseerve: reserve,
            })
        }catch(error){
            console.log('document status ?', error);
        }

        const docRef = doc(getDb(), "ExclusiveMembership",DOCID);
    
        await updateDoc(docRef, {
                    
            Reseerve: reserve,
        })
    }


    useEffect(() => {

        const onHandle_Active_Membership = async() => {

            try{
    
                (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                    
                    console.log("Bitcoin Address:", doc.data().BitcoinAddress )
                       if (doc.data().BitcoinAddress.length >= 26 && doc.data().BitcoinAddress.length < 63 && doc.data().Email.match('.com') && doc.data().status === 'verified')
                        { setMembershipStatus(doc.data().status);
                            setPaymentStatus(doc.data().paid); 
                            console.log("membership status:", membershipStatus, paymentStatus) }
                })
            
            }catch(error){
                console.log('error', error)
            } 
        }

        onHandle_Active_Membership();
    },[])



    return(<> 
            <IconButton icon={<Hiking></Hiking>} onClick={onOpen} sx={{position: 'relative', top: '6pc', left: '0pc', color: 'yellow.600', bg: 'transparent'}}></IconButton>
                <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
                <ModalOverlay></ModalOverlay>
                <ModalContent>
                    <ModalHeader sx={{color: 'yellow.600', position: 'relative', left: '30pc', top: '3pc'}}> Seek Adventure <Tag color= {'yellow.600'} bg={'transparent'}> 12 </Tag> </ModalHeader>
                    <ModalCloseButton></ModalCloseButton>
                    <ModalBody>

                    { membershipStatus.match('verified') && paymentStatus ?
                        <Tabs variant='soft-rounded' colorScheme='yellow' position={'relative'} top={'3pc'}>
                        <TabList>
                            <Tab> Business vacation &#x26f5; &#xfe0f; <Tag color= {'yellow.600'} bg={'transparent'}> 1 </Tag> </Tab>
                            <Tab> Royal vacation &#x1f451; <Tag color= {'yellow.600'} bg={'transparent'}> 1 </Tag> </Tab>
                            <Tab> Winter 🏂 <Tag color= {'yellow.600'} bg={'transparent'}> 2 </Tag> </Tab>
                            <Tab> Summer 🍹 <Tag color= {'yellow.600'} bg={'transparent'}> 1 </Tag> </Tab>
                            <Tab> Fall 🍂 <Tag color= {'red.600'} bg={'transparent'}> 0 </Tag> </Tab>
                            <Tab> Spring 🍃 <Tag color= {'red.600'} bg={'transparent'}> 0 </Tag> </Tab>
                            <Tab> Castle 🏰 <Tag color= {'yellow.600'} bg={'transparent'}> 1 </Tag> </Tab>
                            <Tab> Penthouses 🏡 <Tag color= {'yellow.600'} bg={'transparent'}> 4 </Tag> </Tab>
                            <Tab> Restaurant 🍝 <Tag color= {'red.600'} bg={'transparent'}> 0 </Tag></Tab>
                            <Tab> Hotel 🏨 <Tag color= {'yellow.600'} bg={'transparent'}> 2 </Tag> </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> The Artisan Hotel </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Tuscan Village </Text>
                                        <Tag sx={{position: 'relative', left: '10pc', color: 'yellow.600'}}> 🐱 Pet Friendly </Tag>
                                        {/* <Text sx={{position: 'relative', left: '15pc', top: '-1.5pc'}}> 📅 04-December-2024 , 05-April-2025</Text> */}
                                        <Text sx={{position: 'relative', left: '35pc', top: '-1.5pc'}}> 📸  Photography </Text> 
                                        <Text sx={{position: 'relative', left: '45pc', top: '-3pc'}}> Minimum 3 Night Stay </Text> 
                                        <Tag sx={{position: 'relative', left: '28pc', top: '-1.5pc'}}> Adult </Tag> 
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hotel></Hotel>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-5pc', left: '20pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ Dining </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> 🎂 Event Space </Tag>
                                                    <Tag sx={{position: 'relative', left: '-3.5pc', top: '1.7pc', color: 'yellow.600'}}> 🛍️ Shopping </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> ⛷️ Adventure </Tag>
                                                    <Tag sx={{position: 'relative', left: '7pc', top: '-1.5pc', color: 'yellow.600'}}>  🏨 Room </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-8pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-8pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17] </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                    <option> The Grand Ballroom </option>
                                                                    <option> The Veranda </option>
                                                                    <option> Industrialist Room </option>
                                                                    <option> Mercantile Room </option>
                                                                    <option> Private Dining Rooms at TK </option>
                                                                    <option> The Rooftop </option>
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            </TabPanel>
                            <TabPanel>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> Kimpinski Royal Hotel </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Duabi </Text>
                                        {/* <Tag sx={{position: 'relative', left: '8pc', color: 'yellow.600'}}> 🏂 Winter, 🏖️Summer </Tag> */}
                                        {/* <Tag sx={{position: 'relative', left: '10pc', color: 'yellow.600'}}> 🐱 Pet Friendly </Tag> */}
                                        {/* <Text sx={{position: 'relative', left: '20pc', top: '-1.5pc'}}> 📅 19-December-2024 , 06-Janury-2025</Text> */}
                                        <Text sx={{position: 'relative', left: '30pc', top: '-0pc'}}> 👑  Royal </Text> 
                                        <Text sx={{position: 'relative', left: '18pc', top: '1pc'}}> Minimum 1 Night Stay </Text> 
                                        {/* <Tag sx={{position: 'relative', left: '39pc', top: '-0.5pc'}}> Adult </Tag>  */}
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hotel></Hotel>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-3.5pc', left: '20pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ Dining </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> 🎂 Celebration </Tag>
                                                    <Tag sx={{position: 'relative', left: '-3.5pc', top: '1.7pc', color: 'yellow.600'}}> ⛳ Golf </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> ⛷️ Adventure </Tag>
                                                    <Tag sx={{position: 'relative', left: '7pc', top: '-1.5pc', color: 'yellow.600'}}>  🏨 Chalets </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                        <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17]</FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                    <option> Superior Room [max 2 person] </option>
                                                                    <option> Deluxe Room [max 3 person] </option>
                                                                    <option> Grand Deluxe Room [max 3 person] </option>
                                                                    <option> Executive Grand Deluxe [max 3 person] </option>
                                                                    <option> Fit Room [max 3 person] </option>
                                                                    <option> Executive Suite [max 3 person] </option>
                                                                    <option> Corner Suite [max 3 person] </option>
                                                                    <option> 2 Family Suite [max 6 person] </option>
                                                                    <option> Diplomatic Suite [max 3 person] </option>
                                                                    <option> Presidental Suite [max 8 person] </option>
                                                                    <option> 3 Family Suite [max 7 person] </option>
                                                                    <option> Aspen Ski Chalet [max 3 person] </option>
                                                                    <option> Duplex Aspen Ski Chalet [max 4 person] </option>
                                                                    <option> 2 Aspen Ski Chalet [max 7 person] </option>
                                                                    <option> 2 Aspen Ski Chalet [max 8 person] </option>
                                                                    <option> Aspen Pool Chalet [max 4 person] </option>
                                                                    {/* <option> Two bedroom Family Apartment  [max 6 person] </option> */}
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            </TabPanel>
                            <TabPanel>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> Hotel Faren Arosa Altein </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Swiss Alps </Text>
                                        <Tag sx={{position: 'relative', left: '8pc', color: 'yellow.600'}}> 🏂 Winter </Tag>
                                        <Text sx={{position: 'relative', left: '15pc', top: '-1.5pc'}}> 📅 04-December-2024 , 05-April-2025</Text>
                                        <Text sx={{position: 'relative', left: '35pc', top: '-3pc'}}> 🎉 FIS Ski Cross World Cup Arosa Lenzerheide </Text>
                                        <Text sx={{position: 'relative', left: '27pc', top: '1pc'}}> Minimum 3 Night Stay </Text> 
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hiking></Hiking>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-6.8pc', left: '32pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ All Day </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> ♨️ Traditional </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0.2pc', color: 'yellow.600'}}> 🏊 Outdoor & indoor </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> ⛷️ SKI </Tag>
                                                    <Tag sx={{position: 'relative', left: '0.5pc', top: '-1.5pc', color: 'yellow.600'}}>  🏨 Room </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                        <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17] </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                    <option> Cosy Single [ 1 person ] </option>
                                                                    <option> Comfy Double Mountain View [2 person] </option>
                                                                    <option> Maxi Triple [3 person] </option>
                                                                    <option> Maxi Triple Mountain View [3 person] </option>
                                                                    <option> Deluxe Corner Balcony [3 person] </option>
                                                                    <option> Family Room [4 person] </option>
                                                                    <option> Family Suite [5 person] </option>
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            <Divider></Divider>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> Deferegental Hotel & Resort </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Austria </Text>
                                        <Tag sx={{position: 'relative', left: '8pc', color: 'yellow.600'}}> 🏂 Winter </Tag>
                                        {/* <Tag sx={{position: 'relative', left: '10pc', color: 'yellow.600'}}> 🐱 Pet Friendly </Tag> */}
                                        <Text sx={{position: 'relative', left: '20pc', top: '-1.5pc'}}> 📅 19-December-2024 , 06-Janury-2025</Text>
                                        <Text sx={{position: 'relative', left: '50pc', top: '-3pc'}}> 🏎️  Porche Cabrio </Text> 
                                        <Text sx={{position: 'relative', left: '28pc', top: '1pc'}}> Minimum 4 Night Stay </Text> 
                                        <Tag sx={{position: 'relative', left: '39pc', top: '-0.5pc'}}> Adult </Tag> 
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hotel></Hotel>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-6.5pc', left: '40pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ Dining </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> 🎂 Event Space </Tag>
                                                    <Tag sx={{position: 'relative', left: '-3.5pc', top: '1.7pc', color: 'yellow.600'}}> ⛳ Golf </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> ⛷️ Adventure </Tag>
                                                    <Tag sx={{position: 'relative', left: '7pc', top: '-1.5pc', color: 'yellow.600'}}>  🏨 Room </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '38pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                        <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '38pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17]</FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                    <option> Luxusdoppelizimmrt [max 3 person] </option>
                                                                    <option> Maisonette [max 4 person] </option>
                                                                    <option> Maisonette IM Gastehaus [max 4 person] </option>
                                                                    <option> Junior Suite [max 4 person] </option>
                                                                    <option> 2-Raum Suite [max 4 person] </option>
                                                                    <option> Junior Suite IM Gastehaus [max 4 person] </option>
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            </TabPanel>
                            <TabPanel>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> Deferegental Hotel & Resort </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Austria </Text>
                                        <Tag sx={{position: 'relative', left: '8pc', color: 'yellow.600'}}> 🏖️Summer </Tag>
                                        {/* <Tag sx={{position: 'relative', left: '10pc', color: 'yellow.600'}}> 🐱 Pet Friendly </Tag> */}
                                        <Text sx={{position: 'relative', left: '20pc', top: '-1.5pc'}}> 📅 19-December-2024 , 06-Janury-2025</Text>
                                        <Text sx={{position: 'relative', left: '50pc', top: '-3pc'}}> 🏎️  Porche Cabrio </Text> 
                                        <Text sx={{position: 'relative', left: '28pc', top: '1pc'}}> Minimum 4 Night Stay </Text> 
                                        <Tag sx={{position: 'relative', left: '39pc', top: '-0.5pc'}}> Adult </Tag> 
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hotel></Hotel>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-6.5pc', left: '40pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ Dining </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> 🎂 Event Space </Tag>
                                                    <Tag sx={{position: 'relative', left: '-3.5pc', top: '1.7pc', color: 'yellow.600'}}> ⛳ Golf </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> ⛷️ Adventure </Tag>
                                                    <Tag sx={{position: 'relative', left: '7pc', top: '-1.5pc', color: 'yellow.600'}}>  🏨 Room </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                        <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17] </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                    <option> Luxusdoppelizimmrt [max 3 person] </option>
                                                                    <option> Maisonette [max 4 person] </option>
                                                                    <option> Maisonette IM Gastehaus [max 4 person] </option>
                                                                    <option> Junior Suite [max 4 person] </option>
                                                                    <option> 2-Raum Suite [max 4 person] </option>
                                                                    <option> Junior Suite IM Gastehaus [max 4 person] </option>
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            </TabPanel>
                            <TabPanel>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> No Exclusive Vacation available right now  <Spinner></Spinner> </Heading> </CardHeader>
                                </CardContent>
                            </Card>
                            </TabPanel>
                            <TabPanel>
                            <Card>
                                <CardContent>
                                     <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> No Exclusive Vacation available right now  <Spinner></Spinner> </Heading> </CardHeader>
                                </CardContent>
                            </Card>
                            </TabPanel>
                            <TabPanel>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> Reschio Estate </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Italy </Text>
                                        {/* <Tag sx={{position: 'relative', left: '10pc', color: 'yellow.600'}}> 🐱 Pet Friendly </Tag> */}
                                        {/* <Text sx={{position: 'relative', left: '15pc', top: '0pc'}}> 📅 New Year Eve </Text> */}
                                        {/* <Text sx={{position: 'relative', left: '35pc', top: '-1.5pc'}}> 📸  Photography </Text>  */}
                                        <Text sx={{position: 'relative', left: '35pc', top: '2pc'}}> Minimum 2 Night Stay </Text> 
                                        {/* <Tag sx={{position: 'relative', left: '28pc', top: '1.5pc'}}> Adult </Tag>  */}
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hotel></Hotel>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-2pc', left: '23pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ Dining </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> 🎂 Celebration </Tag>
                                                    <Tag sx={{position: 'relative', left: '-1.5pc', top: '1.7pc', color: 'yellow.600'}}> 🧧 Gifts </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> ☽ Celestial treats </Tag>
                                                    <Tag sx={{position: 'relative', left: '6.2pc', top: '0.2pc', color: 'yellow.600'}}>  🏨 Room </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '44pc', color: 'yellow.600', bg: 'transparent', top: '-10pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                        <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '44pc', color: 'yellow.600', bg: 'transparent', top: '-10pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17]</FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                    <option> Room [max 2 guests] </option>
                                                                    <option> Grand Room [max 2 guests] </option>
                                                                    <option> Suites Castello [max 3 guests] </option>
                                                                    <option> Suite Castello Twin [max 2 guests] </option>
                                                                    <option> The Tower Suite [max 4 guests] </option>
                                                                    <option> Grand Suites [max 4 guests] </option>
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            </TabPanel>
                            <TabPanel>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> At Six </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Sweden </Text>
                                        {/* <Tag sx={{position: 'relative', left: '10pc', color: 'yellow.600'}}> 🐱 Pet Friendly </Tag> */}
                                        <Text sx={{position: 'relative', left: '15pc', top: '0pc'}}> 📅 New Year Eve </Text>
                                        {/* <Text sx={{position: 'relative', left: '35pc', top: '-1.5pc'}}> 📸  Photography </Text>  */}
                                        <Text sx={{position: 'relative', left: '35pc', top: '-1.5pc'}}> Minimum 3 Night Stay </Text> 
                                        <Tag sx={{position: 'relative', left: '28pc', top: '1.5pc'}}> Adult </Tag> 
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hotel></Hotel>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-3.8pc', left: '23pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ Dining </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> 🎂 Celebration </Tag>
                                                    {/* <Tag sx={{position: 'relative', left: '-3.5pc', top: '1.7pc', color: 'yellow.600'}}> 🛍️ Shopping </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> ⛷️ Adventure </Tag> */}
                                                    <Tag sx={{position: 'relative', left: '2pc', top: '0pc', color: 'yellow.600'}}>  🏨 Room </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '44pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                        <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '44pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17]</FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                    <option> Superior Room </option>
                                                                    <option> Deluxe Room </option>
                                                                    <option> Standard Room </option>
                                                                    <option> Junior Suite Room </option>
                                                                    <option> Suite </option>
                                                                    <option> Masterpiece Suite </option>
                                                                    <option> Apartments </option>
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            <Divider></Divider>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> Kimpinski Royal Hotel </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Saudia Arabia </Text>
                                        {/* <Tag sx={{position: 'relative', left: '8pc', color: 'yellow.600'}}> 🏂 Winter, 🏖️Summer </Tag> */}
                                        {/* <Tag sx={{position: 'relative', left: '10pc', color: 'yellow.600'}}> 🐱 Pet Friendly </Tag> */}
                                        {/* <Text sx={{position: 'relative', left: '20pc', top: '-1.5pc'}}> 📅 19-December-2024 , 06-Janury-2025</Text> */}
                                        <Text sx={{position: 'relative', left: '30pc', top: '-0pc'}}> 👑  Royal </Text> 
                                        <Text sx={{position: 'relative', left: '18pc', top: '1pc'}}> Minimum 1 Night Stay </Text> 
                                        {/* <Tag sx={{position: 'relative', left: '39pc', top: '-0.5pc'}}> Adult </Tag>  */}
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hotel></Hotel>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-3.5pc', left: '20pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ Dining </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> 🎂 Celebration </Tag>
                                                    <Tag sx={{position: 'relative', left: '-3.5pc', top: '1.7pc', color: 'yellow.600'}}> ⛳ Golf </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> ⛷️ Adventure </Tag>
                                                    <Tag sx={{position: 'relative', left: '7pc', top: '-1.5pc', color: 'yellow.600'}}>  🏨 Chalets </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '48pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                        <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '48pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17]</FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                    {/* <option> Superior Room [max 2 person] </option>
                                                                    <option> Deluxe Room [max 3 person] </option>
                                                                    <option> Grand Deluxe Room [max 3 person] </option>
                                                                    <option> Executive Grand Deluxe [max 3 person] </option>
                                                                    <option> Fit Room [max 3 person] </option>
                                                                    <option> Executive Suite [max 3 person] </option>
                                                                    <option> Corner Suite [max 3 person] </option>
                                                                    <option> 2 Family Suite [max 6 person] </option>
                                                                    <option> Diplomatic Suite [max 3 person] </option>
                                                                    <option> Presidental Suite [max 8 person] </option>
                                                                    <option> 3 Family Suite [max 7 person] </option>
                                                                    <option> Aspen Ski Chalet [max 3 person] </option>
                                                                    <option> Duplex Aspen Ski Chalet [max 4 person] </option>
                                                                    <option> 2 Aspen Ski Chalet [max 7 person] </option>
                                                                    <option> 2 Aspen Ski Chalet [max 8 person] </option>
                                                                    <option> Aspen Pool Chalet [max 4 person] </option> */}
                                                                    <option> Two bedroom Family Apartment  [max 6 person] </option>
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            <Divider></Divider>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> Reschio Estate </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Italy </Text>
                                        {/* <Tag sx={{position: 'relative', left: '10pc', color: 'yellow.600'}}> 🐱 Pet Friendly </Tag> */}
                                        {/* <Text sx={{position: 'relative', left: '15pc', top: '0pc'}}> 📅 New Year Eve </Text> */}
                                        {/* <Text sx={{position: 'relative', left: '35pc', top: '-1.5pc'}}> 📸  Photography </Text>  */}
                                        <Text sx={{position: 'relative', left: '35pc', top: '2pc'}}> Minimum 2 Night Stay </Text> 
                                        {/* <Tag sx={{position: 'relative', left: '28pc', top: '1.5pc'}}> Adult </Tag>  */}
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hotel></Hotel>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-2pc', left: '23pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ Dining </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> 🎂 Celebration </Tag>
                                                    <Tag sx={{position: 'relative', left: '-1.5pc', top: '1.7pc', color: 'yellow.600'}}> 🧧 Gifts </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> ☽ Celestial treats </Tag>
                                                    <Tag sx={{position: 'relative', left: '6.2pc', top: '0.2pc', color: 'yellow.600'}}>  🏨 Room </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '48pc', color: 'yellow.600', bg: 'transparent', top: '-10pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                        <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '48pc', color: 'yellow.600', bg: 'transparent', top: '-10pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17]</FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                <option> Arrighi [max 12 guests, 1 Left] </option>
                                                                    <option> Barco [max 12 guests, 1 Left] </option>
                                                                    <option> Bell'Aria [max 12 guests, 1 Left] </option>
                                                                    <option> Paintaverna [max 8 guests, 1 Left] </option>
                                                                    <option> Spinaltermine [max 10 guests, 1 Left] </option>
                                                                    <option> Cercoschene [max 8 guests, 1 Left] </option>
                                                                    <option> Tisciano [max 12 guests] </option>
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            <Divider></Divider>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> Private Villas </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Mexico </Text>
                                        <Tag sx={{position: 'relative', left: '10pc', color: 'yellow.600'}}> 🐱 Pet Friendly </Tag> 
                                        <Text sx={{position: 'relative', left: '20pc', top: '-1.5pc'}}> 📅 08 December 2024 , 13 December 2024 </Text>
                                        <Text sx={{position: 'relative', left: '45pc', top: '-3pc'}}> ⛵ Private yacht </Text> 
                                        <Text sx={{position: 'relative', left: '35pc', top: '2pc'}}> Minimum 3 Night Stay </Text> 
                                        {/* <Tag sx={{position: 'relative', left: '28pc', top: '1.5pc'}}> Adult </Tag>  */}
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hotel></Hotel>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-6.5pc', left: '40pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ Dining </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> ⛵ adventure </Tag>
                                                    <Tag sx={{position: 'relative', left: '-4.5pc', top: '1.7pc', color: 'yellow.600'}}> 🚐 travel </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> 🧘 Yoga </Tag>
                                                    <Tag sx={{position: 'relative', left: '6.5pc', top: '0.2pc', color: 'yellow.600'}}>  🏨 Room </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '48pc', color: 'yellow.600', bg: 'transparent', top: '-13pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                        <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '48pc', color: 'yellow.600', bg: 'transparent', top: '-13pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17]</FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                    <option> Kevali Beach House [max 14 guests] </option>
                                                                    <option> Casa Tropical [max 10 guests] </option>
                                                                    <option> Casa Xixim [max 12 guests] </option>
                                                                    <option> Villa Mariola [max 14 guests] </option>
                                                                    <option> Azumaya Beach House [max 14 guests] </option>
                                                                    <option> Villa Blanca [max 10 guests] </option>
                                                                    <option> Villa Moloch [max 14 guests] </option>
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            </TabPanel>
                            <TabPanel>
                            <Card>
                                <CardContent>
                                     <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> No Exclusive Vacation available right now  <Spinner></Spinner> </Heading> </CardHeader>
                                </CardContent>
                            </Card>
                            </TabPanel>
                            <TabPanel>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> The Artisan Hotel </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Tuscan Village </Text>
                                        <Tag sx={{position: 'relative', left: '10pc', color: 'yellow.600'}}> 🐱 Pet Friendly </Tag>
                                        {/* <Text sx={{position: 'relative', left: '15pc', top: '-1.5pc'}}> 📅 04-December-2024 , 05-April-2025</Text> */}
                                        <Text sx={{position: 'relative', left: '35pc', top: '-1.5pc'}}> 📸  Photography </Text> 
                                        <Text sx={{position: 'relative', left: '45pc', top: '-3pc'}}> Minimum 3 Night Stay </Text> 
                                        <Tag sx={{position: 'relative', left: '28pc', top: '-1.5pc'}}> Adult </Tag> 
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hotel></Hotel>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-5pc', left: '20pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ Dining </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> 🎂 Event Space </Tag>
                                                    <Tag sx={{position: 'relative', left: '-3.5pc', top: '1.7pc', color: 'yellow.600'}}> 🛍️ Shopping </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> ⛷️ Adventure </Tag>
                                                    <Tag sx={{position: 'relative', left: '7pc', top: '-1.5pc', color: 'yellow.600'}}>  🏨 Room </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-8pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                        <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-8pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17]</FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                    <option> King Bedroom </option>
                                                                    <option> Deluxe King Guestroom </option>
                                                                    <option> Deluxe Queen </option>
                                                                    <option> Corner Double Queen </option>
                                                                    <option> The Granite Suit </option>
                                                                    <option> The Rockkingam Suit </option>
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            <Divider></Divider>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> Deferegental Hotel & Resort </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Austria </Text>
                                        <Tag sx={{position: 'relative', left: '8pc', color: 'yellow.600'}}> 🏂 Winter, 🏖️Summer </Tag>
                                        {/* <Tag sx={{position: 'relative', left: '10pc', color: 'yellow.600'}}> 🐱 Pet Friendly </Tag> */}
                                        <Text sx={{position: 'relative', left: '20pc', top: '-1.5pc'}}> 📅 19-December-2024 , 06-Janury-2025</Text>
                                        <Text sx={{position: 'relative', left: '50pc', top: '-3pc'}}> 🏎️  Porche Cabrio </Text> 
                                        <Text sx={{position: 'relative', left: '28pc', top: '1pc'}}> Minimum 4 Night Stay </Text> 
                                        <Tag sx={{position: 'relative', left: '39pc', top: '-0.5pc'}}> Adult </Tag> 
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hotel></Hotel>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-6.5pc', left: '40pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ Dining </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> 🎂 Event Space </Tag>
                                                    <Tag sx={{position: 'relative', left: '-3.5pc', top: '1.7pc', color: 'yellow.600'}}> ⛳ Golf </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> ⛷️ Adventure </Tag>
                                                    <Tag sx={{position: 'relative', left: '7pc', top: '-1.5pc', color: 'yellow.600'}}>  🏨 Room </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                        <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17]</FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                    <option> Luxusdoppelizimmrt [max 3 person] </option>
                                                                    <option> Maisonette [max 4 person] </option>
                                                                    <option> Maisonette IM Gastehaus [max 4 person] </option>
                                                                    <option> Junior Suite [max 4 person] </option>
                                                                    <option> 2-Raum Suite [max 4 person] </option>
                                                                    <option> Junior Suite IM Gastehaus [max 4 person] </option>
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            <Divider></Divider>
                            <Card>
                                <CardContent>
                                    <CardHeader sx={{color: 'yellow.600'}}> <Heading as={'h2'}> Trump Tower </Heading> </CardHeader>
                                    <CardBody>
                                        <Text sx={{position: 'relative', top: '1.5pc'}}> ✈︎ Central park west, NY, USA </Text>
                                        <Tag sx={{position: 'relative', left: '8pc', color: 'yellow.600'}}> 🏂 Luxurious </Tag>
                                        {/* <Tag sx={{position: 'relative', left: '10pc', color: 'yellow.600'}}> 🐱 Pet Friendly </Tag> */}
                                        <Text sx={{position: 'relative', left: '20pc', top: '-1.5pc'}}> 📅 14-Feburary-2025 </Text>
                                        {/* <Text sx={{position: 'relative', left: '50pc', top: '-3pc'}}> 🏎️  Porche Cabrio </Text>  */}
                                        <Text sx={{position: 'relative', left: '28pc', top: '1pc'}}> Minimum 1 Night Stay </Text> 
                                        <Tag sx={{position: 'relative', left: '39pc', top: '-0.5pc'}}> Adult / Kids </Tag> 
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Hotel></Hotel>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '-6.5pc', left: '40pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Amenities await for you Only </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <Tag sx={{position: 'relative', left: '0pc', top: '0pc', color: 'yellow.600'}}> 🍽️ Dining </Tag>
                                                    <Tag sx={{position: 'relative', left: '1pc', top: '0pc', color: 'yellow.600'}}> 🎂 Event Space </Tag>
                                                    <Tag sx={{position: 'relative', left: '-3.5pc', top: '1.7pc', color: 'yellow.600'}}> ⛳ Golf </Tag>
                                                    <Tag sx={{position: 'relative', left: '1.5pc', top: '0.2pc', color: 'yellow.600'}}> 🧖‍♂️ SPA </Tag>
                                                    <Tag sx={{position: 'relative', left: '7pc', top: '-1.5pc', color: 'yellow.600'}}>  🏨 Room </Tag>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<FamilyRestroom></FamilyRestroom>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Family Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                        <FormLabel> Your Email </FormLabel>
                                                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '16.2pc', top: '-2.5pc'}}></IconButton>
                                                            {verified && membershipStatus.match('verified') ? <Box>
                                                                <FormLabel> Adult Members </FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={adult} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Adults}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Babies [upto 5 years] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={babies} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Babies}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Child [upto 6, 11 years ] </FormLabel>
                                                            <NumberInput defaultValue={0} min={0} value={kids} focusBorderColor="yellow.600"  max={8} keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Kids}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            </Box> : '' }
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<CalendarMonthOutlined></CalendarMonthOutlined>} sx={{position: 'relative', left: '40pc', color: 'yellow.600', bg: 'transparent', top: '-11pc'}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader color={'yellow.600'}> Appointment Details </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Any Grown up Age [12, 17]</FormLabel>
                                                            <NumberInput defaultValue={1} min={1} value={growup} focusBorderColor="yellow.600"  max={8}  keepWithinRange={true} clampValueOnBlur={true} onChange={onHandle_Grow}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper />
                                                                <NumberDecrementStepper />
                                                            </NumberInputStepper>
                                                            </NumberInput>
                                                            <FormLabel> Arrival Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Arrival_Date}></Input>
                                                            <FormLabel> Departure Date </FormLabel>
                                                            <Input type="datetime-local" placeholder="datetime" onChange={onHandle_Departure_Date}></Input>
                                                            <FormLabel> Restroom </FormLabel>
                                                            <Stack spacing={2}>
                                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Restroom}>
                                                                    <option> Executive Suites </option>
                                                                    <option> Junior Suits  </option>
                                                                    <option> Executive One Bedroom Park View </option>
                                                                    <option> Executive Two Bedroom Park View </option>
                                                                    <option> Park View Suite </option>
                                                                </Select>
                                                            </Stack>
                                                            <IconButton icon={<Hotel></Hotel>} onClick={onHandle_Reserve} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '0.2pc', left: '7pc'}}></IconButton>
                                                            {/* <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '13pc', top: '-2.5pc'}}></IconButton> */}
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </CardContent>
                            </Card>
                            </TabPanel>
                        </TabPanels>
                        </Tabs> : <Text color={'red.600'} position={'relative'} top={'10pc'} width={'20pc'} left={'25pc'} height={'20pc'}> <Heading as='h1'> "Reignite Your Membership! Deposit Fees and Enjoy Full Benefits Now"</Heading> <Spinner></Spinner> </Text>}
                    </ModalBody>
                </ModalContent>
                </Modal>
    </>)

}


function Active_Membership(){

    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ email, setEmail ] = useState('')
    const [ DOCID, setDOCID ] = useState('')
    const [ verified, setVerfied ] = useState(false)
    const [ payGateway, setPayGateway ] = useState(false)
    const [ paymentdeliver, setPaymentDeliver ] = useState(false)
    const [ myBitcoinAddress, setMyBitcoinAddress ] = useState('')
    const [ enigmaWallet, setEnigmaWallet ] = useState('')
    const [ txOut, setTxOut ] = useState('')
    const [ error, setError ] = useState('')
    const [ isZero, setIsZero ] = useState(false)
    const [ isOne, setIsOne ] = useState(false)
    const [message, setMessage] = useState('');

    const onHandle_Email = async(event) => {setEmail(event.target.value);}
    const onHandle_EmailQuery_if_exist = async() => {

        try{

            (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                
                   if ((doc.data().Email === email && doc.data().level >= 1)){ setDOCID(doc.id); 
                    console.log('document reference: ',DOCID); 
                    setVerfied(true);
                    setMyBitcoinAddress(doc.data().BitcoinAddress);
                    setEnigmaWallet(doc.data().platformAddress);
                    check_balance_before_txs();

                }
            })
        
        }catch(error){
            console.log('error', error)
        }

    }


    const membership_fees_status = async() =>{

        try {
            
            const response = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${enigmaWallet}/balance`);
            console.log('Enigma Response :', response.data)

            const member_response = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${myBitcoinAddress}/balance`);
            console.log('Member Response :', member_response.data)
            
           

            if (((((member_response.data.unconfirmed_balance <=0 && member_response.data.final_n_tx <= 0)) && ((member_response.data.total_sent < response.data.total_received ) && (member_response.data.total_sent < 50 && response.data.total_received < 50))))){ alert(' You have insufficent to complete this transaction ');}
            if (member_response.data.total_sent == 50 && response.data.total_received == 50){setTxOut(response.data.total_received); alert('Congratulation ! Transaction complete')}
        
        } catch (err) {
            setError('Failed to fetch balance. Please check the address.');
            console.log("Error", error);
        }

        const docRef = doc(getDb(), "ExclusiveMembership",DOCID);
        
        if(txOut === 50){
            setPayGateway(true);
            setPaymentDeliver(true);
        }else{
            setPayGateway(false);
            setPaymentDeliver(false);
        }
    
        await updateDoc(docRef, {
                    
                    paid: 'true',
                    status: 'verified',
        })

        
    }

    const check_balance_before_txs = async() =>{

        try {
            const response = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${myBitcoinAddress}/balance`);
            console.log('Response :', response.data)
            
            if (response.data.balance <= 0){ alert('Insufficent Balance'); setIsZero(true); setIsOne(false)}
            if (response.data.balance >= 50){setTxOut(response.data.balance); setIsZero(false); setIsOne(true)}
        } catch (err) {
            setError('Failed to fetch balance. Please check the address.');
            console.log("Error", error);
        }
    }

    const send_tx_out_in_satoshi = async() =>{

        try{

            const response = await axios.post('https://api.blockcypher.com/v1/btc/main/txs/new', {
                inputs: [{ addresses: [myBitcoinAddress] }],  // Replace with your wallet address
                outputs: [{ addresses: [enigmaWallet], value: txOut * 100000000 }] // Amount in satoshis
            }, {
                params: { token:  import.meta.env.VITE_BLOCK_CYPHER_API } // Replace with your BlockCypher API token
            });

            console.log("response", response)
            const tx = response.data;
            const result = await axios.post(`https://api.blockcypher.com/v1/btc/main/txs/send?token=${mport.meta.env.VITE_BLOCK_CYPHER_API}`, tx);
            setMessage(`Transaction sent! TX Hash: ${result.data.tx.hash}`);

        }catch(err){
            console.error(" info ",err.response);
            setError('Error sending Bitcoin: ' + (err.response ? err.response.data.errors[0].error : err.message));
        }
    }


    return(<>
        <IconButton icon={<CurrencyBitcoinRounded></CurrencyBitcoinRounded>} onClick={onOpen} sx={{position: 'relative', top: '6pc', left: '0pc', color: 'yellow.600', bg: 'transparent'}}></IconButton>
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay></ModalOverlay>
                <ModalContent>
                    <ModalHeader sx={{color: 'yellow.600'}}> Active Membership </ModalHeader>
                    <ModalCloseButton></ModalCloseButton>
                    <ModalBody>
                        <form>
                            <FormControl>
                                <FormHelperText> * Make sure buttons doubled clicked  </FormHelperText>
                                <FormLabel> Email : </FormLabel>
                                <Input placeholder="email" type="email" focusBorderColor="yellow.600" onChange={onHandle_Email}></Input>
                                <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '22pc', top: '-2.5pc'}}></IconButton>
                                {!payGateway && !paymentdeliver ? <Spinner color="red.600" position={'relative'} top={'1pc'} left={'5pc'}></Spinner> : ''}
                            </FormControl>
                        </form>
                        {isOne ? <Card>
                            <CardContent>
                                <CardBody>
                                    <Tag ><Heading as={'h1'} color={'yellow.600'}> {txOut} BTC </Heading></Tag>
                                    <IconButton icon={<FaBitcoin></FaBitcoin>} color={'green.600'} bg={'transparent'} onClick={send_tx_out_in_satoshi}></IconButton>
                                    <Text position={'relative'} top={'2.5pc'} color={'red'} fontSize={'sm'}> {error === null ? message : error} </Text>
                                    {message? <IconButton icon={<PiInvoiceBold></PiInvoiceBold>} onClick={membership_fees_status} sx={{color: 'yellow.600', position: 'relative', bg: 'transparent', left: '15pc', top: '0.3pc'}}></IconButton>:''}
                                </CardBody>
                            </CardContent>
                        </Card>: <Text position={'relative'} left={'2pc'}> Welcome Friends, Have a great day </Text>}
                        {/* {isZero? <Text color={'green.600'} position={'relative'} left={'2pc'}> Will you join our community with exclusive benefits </Text> : <Text color={'red.600'} position={'relative'} left={'22pc'}> <Spinner></Spinner> </Text>} */}
                    </ModalBody>
                </ModalContent>
        </Modal>
    </>)
}

function Connect_btc_site() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ email, setEmail ] = useState('')
    const [ bitcoinAddress, setBitcoinAddress ] = useState('')
    const [ DOCID, setDOCID ] = useState('')
    const [ verified, setVerfied ] = useState(false)
    const [ payGateway, setPayGateway ] = useState(false)
    const [ btctx, setBtcTx] = useState(null);
    const [ txsStatus, setTxsStatus ] = useState('')
    const [ error, setError] = useState('');
    


    const onHandle_Email = async(event) => {setEmail(event.target.value);}
    const onHandle_Bitcoin = async(event) => {setBitcoinAddress(event.target.value);}
    const onHandle_EmailQuery_if_exist = async() => {

        try{

            (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                
                   if ((doc.data().Email === email && doc.data().level >= 1)){ 
                    setDOCID(doc.id); 
                    console.log('document reference: ',DOCID); 
                    setVerfied(true);
                    setTxsStatus(doc.data().status);
                }
            })
        
        }catch(error){
            console.log('error', error)
        }

    }


    const onHandle_Bitcoin_connection = async() =>{

        try {
            const response = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${bitcoinAddress}/balance`);
            setBtcTx(response.data);
            console.log("balance : ", btctx);
        } catch (err) {
            setError('Failed to fetch balance. Please check the address.');
            console.log("Error", error);
        }


        const docRef = doc(getDb(), "ExclusiveMembership",DOCID);
    
        await updateDoc(docRef, {
                    
                    BitcoinAddress: bitcoinAddress,
                    paymentMode: "btc",
                    status: "pending",
                    platformAddress: 'bc1qn4mes7vrt6gvhhj3l6ldht8cjevvt93uey8zxn',
        })

        setPayGateway(true);
    }


    return(<>
        <IconButton icon={<FaBitcoin></FaBitcoin>} onClick={onOpen} sx={{position: 'relative', top: '6pc', left: '0pc', color: 'yellow.600', bg: 'transparent'}}></IconButton>
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay></ModalOverlay>
                <ModalContent>
                    <ModalHeader sx={{color: 'yellow.600'}}> Active bitcoin wallet </ModalHeader>
                    <ModalCloseButton></ModalCloseButton>
                    <ModalBody>
                        <form>
                            <FormControl>
                                <FormHelperText> * Make sure buttons doubled clicked  </FormHelperText>
                                <FormLabel> Email : </FormLabel>
                                <Input placeholder="email" type="email" focusBorderColor="yellow.600" onChange={onHandle_Email}></Input>
                                <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} sx={{color: verified ? 'green.600' : 'silver', position: 'relative', bg: 'transparent', left: '22pc', top: '-2.5pc'}}></IconButton>
                                { verified && txsStatus === 'unverified' || txsStatus === 'verified'   ? '' : <FormHelperText position={'relative'} top={'-2pc'}> Your membership is not active yet </FormHelperText>}
                                { verified && txsStatus === 'unverified' || txsStatus === 'verified'  ? <Box>
                                    <FormLabel> Your Bitcoin Address : </FormLabel>
                                <Input placeholder="btc address" type="text" focusBorderColor="yellow.600" onChange={onHandle_Bitcoin}></Input>
                                <IconButton icon={<BiBitcoin></BiBitcoin>} onClick={onHandle_Bitcoin_connection} sx={{color: 'yellow.600', position: 'relative', bg: 'transparent', left: '22pc', top: '-2.5pc'}}></IconButton>
                                </Box> : ''}
                            </FormControl>
                        </form>
                        { btctx !== null ? <Card>
                            <CardHeader>{bitcoinAddress}</CardHeader>
                            <CardBody>
                                <Heading as={'h1'} position={'relative'} left={'5pc'} color={'yellow.600'}> &#8383; {(btctx.balance - btctx.unconfirmed_balance) <= btctx.final_balance ? btctx.balance : btctx.final_balance} BTC </Heading>
                                <Text color={btctx.n_tx >= 1? 'green': 'red'} position={'relative'} top={'2pc'}> ⏳ mempool txs  {(btctx.final_n_tx - btctx.unconfirmed_n_tx)} total transactions {btctx.n_tx}</Text>
                                <Tag position={'relative'} left={'13.5pc'} top={'-5pc'} color={btctx.total_sent >= 1 ? 'green': 'red'}> 🛒 {btctx.total_sent}</Tag>
                                <Tag position={'relative'} left={'11pc'} top={'-2pc'} color={btctx.total_received >= 1 ? 'green': 'red'}> ⛃ {btctx.total_received}</Tag>
                            </CardBody>
                        </Card>: ''}
                        {payGateway ?  <Spinner color="yellow.600"></Spinner> : ''}
                    </ModalBody>
                </ModalContent>
            </Modal>

    </>)
}

function Membership() {

    const { isOpen, onOpen, onClose } = useDisclosure()


    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ relation, setRelation ] = useState('')
    const [ benefits, setBenefits ] = useState('')
    const [ income, setIncome ] = useState('')
    const [ tripWeather, setTripWeather ] = useState('')
    // const [ vacation, setVacation ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ city, setCity ] = useState('')
    const [ country, setCountry ] = useState('')
    const [ zipcode, setZipcode ] = useState('')


    const onHandle_Name = async(event) => {setName(event.target.value); console.log('name: ', name)}
    const onHandle_Email = async(event) => {setEmail(event.target.value); console.log('email: ', email)}
    const onHandle_PhoneNum = async(event) => {setPhone(event.target.value); console.log('phone: ', phone)}
    
    const onHandle_Relation = async(event) => {setRelation(event.target.value); console.log('relation: ', relation)}
    const onHandle_Benefit = async(event) => {setBenefits(event.target.value); console.log('benefit: ', benefits)}
    const onHandle_Income = async(event) => {setIncome(event.target.value); console.log('income: ', income)}
    
    const onHandle_TripWeather = async(event) => {setTripWeather(event.target.value); console.log('weather: ', tripWeather)}
    // const onHandle_Vacation = async(event) => {setVacation(event.target.value); console.log('vacation: ', vacation)}
    const onHandle_Address = async(event) => {setAddress(event.target.value); console.log('address: ', address)}
    const onHandle_City = async(event) => {setCity(event.target.value); console.log('city: ', city)}
    const onHandle_Zipcode = async(event) => {setZipcode(event.target.value); console.log('zip: ', zipcode)}
    const onHandle_Country = async(event) => {setCountry(event.target.value); console.log('country: ', country)}

    const onHandle_EmailQuery = async() => { 
        console.log('profile data >> ', [name, address, email, city, country, zipcode, relation, income, benefits, tripWeather])
        const collectionRef = collection(getDb(), "ExclusiveMembership");

        try{

            await addDoc(collectionRef, {

                Name: name,
                Address: address,
                City: city,
                Country: country,
                Email: email,
                Mobile: phone,
                Zipcode: zipcode,
                Relationship: relation,
                IncomeLevel:income,
                TripWeather: tripWeather,
                peference: benefits,
                review: '',
                level: '1',
            })
        }catch(error){
            console.log('document status ?', error);
        }
    }

    
    return(<>
            <IconButton icon={<CardMembership></CardMembership>} onClick={onOpen} sx={{position: 'relative', top: '6pc', left: '0pc', color: 'yellow.600', bg: 'transparent'}}></IconButton>
            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                <ModalOverlay></ModalOverlay>
                <ModalContent>
                    <ModalHeader sx={{color: 'yellow.600'}}> Join Now, Unlock Potential </ModalHeader>
                    <ModalCloseButton></ModalCloseButton>
                    <ModalBody>
                        <form>
                            <FormControl>
                                <FormLabel> Your Name: </FormLabel>
                                <Input placeholder="name" type="text" focusBorderColor="yellow.600" onChange={onHandle_Name}></Input>
                                <FormLabel> Your Email: </FormLabel>
                                <Input placeholder="email" type="email" focusBorderColor="yellow.600" onChange={onHandle_Email}></Input>
                                <FormLabel> Your Address: </FormLabel>
                                <Input placeholder="address" type="text" focusBorderColor="yellow.600" onChange={onHandle_Address}></Input>
                                <FormLabel> Your City: </FormLabel>
                                <Input placeholder="city" type="text" focusBorderColor="yellow.600" onChange={onHandle_City}></Input>
                                <FormLabel> Your Country: </FormLabel>
                                <Input placeholder="country" type="text" focusBorderColor="yellow.600" onChange={onHandle_Country}></Input>
                                <FormLabel> Your Zipcode: </FormLabel>
                                <Input placeholder="zipcode" type="text" focusBorderColor="yellow.600" onChange={onHandle_Zipcode}></Input>
                                <FormLabel> Your Phone Number: </FormLabel>
                                <Input placeholder="phoneNum" type="tel" focusBorderColor="yellow.600" onChange={onHandle_PhoneNum}></Input>
                                <FormLabel> Relationship : </FormLabel>
                                <Stack spacing={2}>
                                    <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Relation}>
                                        <option> Single </option>
                                        <option> Married </option>
                                    </Select>
                                </Stack>
                                <FormLabel> Income Level : </FormLabel>
                                <Stack spacing={2}>
                                    <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Income}>
                                        <option> Centimillion </option>
                                        <option> Multimillion </option>
                                        <option> Billion </option>
                                        <option> MultiBillion </option>
                                    </Select>
                                </Stack>
                                <FormLabel> Best Weather Condition for tours : </FormLabel>
                                <Stack spacing={2}>
                                    <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_TripWeather}>
                                        <option> Winter </option>
                                        <option> Spring </option>
                                        <option> Summer </option>
                                        <option> Autumn </option>
                                    </Select>
                                </Stack>
                                <FormLabel> Exclusive benefits : </FormLabel>
                                <Stack spacing={2}>
                                    <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Benefit}>
                                        <option> Business vaction 🤝 </option>
                                        <option> Luxury vaction 🚢 </option>
                                        <option> Family vaction ‧₊˚ ⋅  𓐐𓎩 ‧₊˚ ⋅ </option>
                                    </Select>
                                </Stack>
                                <IconButton icon={<CardMembership></CardMembership>} onClick={onHandle_EmailQuery} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', left: '10pc', top: '0.5pc'}}></IconButton>
                            </FormControl>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
    </>)
}

function Gamefication_Tour() {
    
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const inital = useRef()

    const steps = [
        
        { title: 'Membership', description: 'Create or active membership' },
        { title: 'Active bitcoin account', description: 'Connect bitcoin wallet with membership account' },
        { title: 'Pay Membership', description: 'Active your account' },
        { title: 'Explore Exclusivity', description: 'Embark on Adventures, Score Deals!'},
        { title: 'Invite Pals', description: 'Spread Joy, Share with Friends & Family!'},

    ]

    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })
    
    return(<>
            <IconButton icon={<PiGlobeDuotone></PiGlobeDuotone>} variant={'none'} onClick={onOpen} sx={{color: 'green', bg: 'white', position: 'relative', top: '2pc', left: '-15pc'}}></IconButton>
            <Drawer size={'md'} isOpen={isOpen} placement='left' initialFocusRef={inital} onClose={onClose}>
                <DrawerOverlay></DrawerOverlay>
                <DrawerContent>
                    <DrawerHeader> Are You Ready for Trips </DrawerHeader>
                    <DrawerCloseButton></DrawerCloseButton>
                    <DrawerBody>
                        <Divider></Divider>
                        <Stepper size='md' colorScheme='teal' index={activeStep}  orientation='vertical' height='400px' gap='2' sx={{position: 'relative', top: '2pc'}}>
                            {steps.map((step, index) => (
                                <Step key={index}>
                                     <StepIndicator>
                                        <StepStatus  complete={`✅`} incomplete={`😅`} active={`📍`} />
                                     </StepIndicator>
                                     <Box flexShrink='0'>
                                        <StepTitle>{step.title}</StepTitle>
                                        <StepDescription>{step.description}</StepDescription>
                                     </Box>
                                    <StepSeparator />
                                </Step>))}
                        </Stepper>
                        <Tag sx={{color: 'teal', position: 'relative', top: '3pc', left: '8pc'}}> Level 1 🥇 </Tag>
                        <Membership></Membership>
                        <Connect_btc_site></Connect_btc_site>
                        <Active_Membership></Active_Membership>
                        <Exclusive></Exclusive>
                        <Entice></Entice>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
    </>)
}


function Futuristic_Deals(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [ likeable, setLikeable ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ paymentPlan, setPaymentPlan ] = useState('')
    const [ closeDeal, setCloseDeal ] = useState('')
    const [ cashflow, setCasflow] = useState(0)
    const [ verfied, setVerfied] = useState(false)
    const [ DOCID, setDOCID] = useState('')
    const [ txsStatus, setTxsStatus ] = useState('')

    const onHandle_Likeable = async() => {setLikeable(!likeable);}
    const onHandle_Email = async(event) => {setEmail(event.target.value);}
    const onHandle_Plan = async(event) => {setPaymentPlan(event.target.value);}
    const onHandle_Deal = async(event) => {setCloseDeal(event.target.value);}
    const onHandle_Cashflow = async(event) => {
        if (event.target.value < 10000){alert('Before shop it minimum balance will 10000 USD');}  
        setCasflow(event.target.value);}

    const onHandle_DataObject = async() => { 
        

        const collectionRef = collection(getDb(), "ExclusiveClientsXcafe");

        if (cashflow < 10000){alert('Before shop it minimum balance will 10000 USD');}

        try{

            await addDoc(collectionRef, {

                Email: email,
                PaymentPlan: paymentPlan,
                CloseDealDays: closeDeal,
                Favourite: likeable,
                Cashflow: cashflow,
            })

            alert('Your order deliver after 3 months, after verification your credentials');
        }catch(error){
            console.log('document status ?', error);
        }
    }

    const onHandle_EmailQuery_if_exist = async() => {

        try{

            (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                
                   if ((doc.data().Email === email)){ 
                    setDOCID(doc.id); 
                    console.log('document reference: ',DOCID); 
                    setVerfied(true);}
                    setTxsStatus(doc.data().status);
            })
        
        }catch(error){
            console.log('error', error)
        }

    }

    return(<>
            <IconButton icon={<Business></Business>} onClick={onOpen} color={'yellow.600'} bg={'transparent'}></IconButton>
            <Modal isOpen={isOpen} onClose={onClose} size={'half'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color={'yellow.600'}> Exclusiveness Allure Reality </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Card>
                            <CardContent>
                                <CardHeader> <Heading as={'h1'} color={'yellow.600'}> CafeXBOT </Heading>  </CardHeader>
                                <CardBody>
                                    <Image src="https://vendinglab.tech/wp-content/uploads/2023/10/Untitled-design-72-e1697630643535.png" alt="CafeXBOT" boxSize='400px'></Image>
                                    <AspectRatio maxW='260px' ratio={1} position={'relative'} top={'-20pc'} left={'40pc'} boxSize={'150px'} borderRadius={'2pc'} border={'black'}>
                                        <iframe width="260" height="215" src="https://www.youtube.com/embed/tX5LlvFM3mc?si=F_W2seqfJJjhTWsS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </AspectRatio>
                                    <Popover>
                                        <PopoverTrigger>
                                            <IconButton icon={<FoodBank></FoodBank>} color={'yellow.600'} bg={'transparent'} position={'relative'} top={'-20pc'} left={'30pc'}></IconButton>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <Tag color={'yellow.600'}> 🍦 Icecream </Tag>
                                            <Tag color={'yellow.600'}> ☕ Coffee </Tag>
                                            <Tag color={'yellow.600'}> 🔥 Hot chocolate </Tag>
                                            <Tag color={'yellow.600'}> 🥤 Milkshake </Tag>
                                            <Tag color={'yellow.600'}> 🍞 Cooked food </Tag>
                                            <Tag color={'yellow.600'}> 🍵 Tea </Tag>
                                        </PopoverContent>
                                    </Popover>
                                    <Box position={'relative'} top={'-20pc'} width={'25pc'} left={'40pc'}>
                                        "Indulge in the luxury of our exclusive automated Cafebot, crafting irresistible ice cream, decadent hot chocolate, rich coffee, soothing tea, and creamy milkshakes—experience comfort and delight at your fingertips."
                                    </Box>
                                    <IconButton icon={<BiLike></BiLike>} onClick={onHandle_Likeable} position={'relative'} top={'-40pc'} left={'30pc'} bg={'transparent'} color={ likeable ? 'red' : 'black' }></IconButton>
                                    <Popover>
                                        <PopoverTrigger>
                                            <IconButton icon={<BiPackage></BiPackage>} color={'yellow.600'} bg={'transparent'} position={'relative'} top={'-18pc'} left={'28pc'}></IconButton>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                           <form>
                                            <FormControl>
                                                <FormLabel> Email: </FormLabel> 
                                                <Input placeholder="email" type="email" focusBorderColor="yellow.600" onChange={onHandle_Email}></Input>
                                                <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} bg={'transparent'} color={verfied ? 'green' : 'red'} left={'17pc'}></IconButton>
                                                {verfied ? '' : <FormHelperText position={'relative'} top={'-2pc'} left={'2pc'}> Your membership is not active yet. </FormHelperText>}
                                                {verfied && txsStatus === 'verified' ? <Box>
                                                    <FormLabel> Share plan payment </FormLabel> 
                                                <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Plan}>
                                                    <option> Yes 🤝 </option>
                                                    <option> No </option>
                                                </Select>
                                                </Stack>
                                                <FormLabel> Closing deal day </FormLabel> 
                                                <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Deal}>
                                                    <option> 1 days </option>
                                                    <option> 15 days </option>
                                                    <option> 30 days </option>
                                                </Select>
                                                </Stack>
                                                <FormLabel> Cashflow: </FormLabel> 
                                                <Input placeholder="12000 USD" type="text" focusBorderColor="yellow.600" onChange={onHandle_Cashflow}></Input>
                                                {cashflow < 12000 ? <FormHelperText color={'red'}>  You have insufficent balance, for order 12000 USD </FormHelperText> : 'shop now'}
                                                <IconButton icon={<DataObject></DataObject>} onClick={onHandle_DataObject} position={'relative'} top={'-2.5pc'} bg={'transparent'} color={'yellow.600'} left={'15.2pc'}></IconButton>
                                                </Box> : ''}
                                            </FormControl> 
                                           </form>
                                        </PopoverContent>
                                    </Popover>
                                </CardBody>
                            </CardContent>
                        </Card>
                    </ModalBody>
                </ModalContent>
            </Modal>
    </>)
}

function GamesDeals(){
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [ likeable, setLikeable ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ paymentPlan, setPaymentPlan ] = useState('')
    const [ closeDeal, setCloseDeal ] = useState('')
    const [ cashflow, setCasflow] = useState(0)
    const [ verfied, setVerfied] = useState(false)
    const [ DOCID, setDOCID] = useState('')
    const [ txsStatus, setTxsStatus ] = useState('')

    
    const onHandle_Likeable = async() => {setLikeable(!likeable);}
    const onHandle_Email = async(event) => {setEmail(event.target.value);}
    const onHandle_Plan = async(event) => {setPaymentPlan(event.target.value);}
    const onHandle_Deal = async(event) => {setCloseDeal(event.target.value);}
    const onHandle_Cashflow = async(event) => {
        if (event.target.value < 180000){alert('minimum balance will be 180000 USD');}  
        setCasflow(event.target.value);}

    const onHandle_DataObject = async() => { 
        

        const collectionRef = collection(getDb(), "ExclusiveClientsWavepoint");

        if (cashflow < 150000){alert('Before shop it minimum balance will 150000 USD');}

        try{

            await addDoc(collectionRef, {

                Email: email,
                PaymentPlan: paymentPlan,
                CloseDealDays: closeDeal,
                Favourite: likeable,
                Cashflow: cashflow,
            })

            alert('Your order deliver after 3 months, after verification your credentials');
        }catch(error){
            console.log('document status ?', error);
        }
    }

    const onHandle_EmailQuery_if_exist = async() => {

        try{

            (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                
                   if ((doc.data().Email === email)){ 
                    setDOCID(doc.id); console.log('document reference: ',DOCID); 
                    setVerfied(true);
                    setTxsStatus(doc.data().status);
                }
            })
        
        }catch(error){
            console.log('error', error)
        }

    }

    return(<>
    <IconButton icon={<Games></Games>} onClick={onOpen} color={'yellow.600'} bg={'transparent'}></IconButton>
    <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color={'yellow.600'}> Exclusiveness Allure Reality </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Card>
                            <CardContent>
                                <CardHeader> <Heading as={'h1'} color={'yellow.600'}> WarPoint </Heading>  </CardHeader>
                                <CardBody>
                                    <Image src="https://static.tildacdn.com/tild6539-3466-4062-b961-383761336539/2815c343-6e01-4aa9-9.png" alt="warpoint" boxSize='400px'></Image>
                                    <AspectRatio maxW='260px' ratio={1} position={'relative'} top={'-8pc'} left={'15pc'} boxSize={'100px'} borderRadius={'12pc'} border={'black'}>
                                        <iframe width="260" height="215" src="https://www.youtube.com/embed/sWNKUVH4jHU?si=oHNQpKnvcHDUCOrd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </AspectRatio>
                                    <Popover>
                                        <PopoverTrigger>
                                            <IconButton icon={<Stadium></Stadium>} color={'yellow.600'} bg={'transparent'} position={'relative'} top={'-2pc'} left={'10pc'}></IconButton>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <Tag color={'yellow.600'}> 🕶️ VR Reality Parks </Tag>
                                            <Tag color={'yellow.600'}> 🗺️ 20 maps </Tag>
                                            <Tag color={'yellow.600'}> ⚔️ 15 weapons </Tag>
                                            <Tag color={'yellow.600'}> ⚗️ 3 mode of acade </Tag>
                                            <Tag color={'yellow.600'}> 🎊 Birthday Celebration </Tag>
                                            <Tag color={'yellow.600'}> 📡 Exclusive Player Network </Tag>
                                        </PopoverContent>
                                    </Popover>
                                    <Box position={'relative'} top={'2pc'} width={'25pc'} left={'0pc'}>
                                        "Step into the luxury of Warpoint, where exclusive multiplayer games and real-time challenges await. Experience thrilling tournaments and unparalleled excitement that captivate your senses and elevate your gaming experience."
                                    </Box>
                                    <IconButton icon={<BiLike></BiLike>} onClick={onHandle_Likeable} position={'relative'} top={'-12pc'} left={'5pc'} bg={'transparent'} color={ likeable ? 'red' : 'black' }></IconButton>
                                    <Popover size={'lg'}>
                                        <PopoverTrigger>
                                            <IconButton icon={<FaTruckPickup></FaTruckPickup>} color={'yellow.600'} bg={'transparent'} position={'relative'} top={'-12pc'} left={'14pc'}></IconButton>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                           <form>
                                            <FormControl>
                                                <FormLabel> Email: </FormLabel> 
                                                <Input placeholder="email" type="email" focusBorderColor="yellow.600" onChange={onHandle_Email}></Input>
                                                <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} bg={'transparent'} color={verfied ? 'green' : 'red'} left={'17pc'}></IconButton>
                                                {verfied ? <FormHelperText> '' </FormHelperText>: 'You membership is not active yet'}
                                                {verfied && txsStatus === 'verified' ? <Box>
                                                    <FormLabel> Share plan payment </FormLabel> 
                                                <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Plan}>
                                                    <option> Yes 🤝 </option>
                                                    <option> No </option>
                                                </Select>
                                                </Stack>
                                                <FormLabel> Closing deal day </FormLabel> 
                                                <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Deal}>
                                                    <option> 1 days </option>
                                                    <option> 15 days </option>
                                                    <option> 30 days </option>
                                                </Select>
                                                </Stack>
                                                <FormLabel> Cashflow: </FormLabel> 
                                                <Input placeholder="150000 USD" type="text" focusBorderColor="yellow.600" onChange={onHandle_Cashflow}></Input>
                                                {cashflow < 180000 ? <FormHelperText color={'red'}> Sorry you have insufficent balance for this order reuire atleast 180000 USD </FormHelperText> : 'shop now'}
                                                <IconButton icon={<DataObject></DataObject>} onClick={onHandle_DataObject} position={'relative'} top={'-2.5pc'} bg={'transparent'} color={'yellow.600'} left={'15.2pc'}></IconButton>
                                                </Box> : ''}
                                            </FormControl> 
                                           </form>
                                        </PopoverContent>
                                    </Popover>
                                </CardBody>
                            </CardContent>
                        </Card>
                    </ModalBody>
                </ModalContent>
            </Modal>
    </>)

}

function Deals() {


    const { isOpen, onOpen, onClose } = useDisclosure()
    const inital = useRef()

   
    return(<>
        <IconButton icon={<BiCrown></BiCrown>} variant={'none'} onClick={onOpen} sx={{color: 'teal', bg: 'white', position: 'relative', top: '-5pc', left: '38pc'}}></IconButton>
            <Drawer size={'md'} isOpen={isOpen} placement='right' initialFocusRef={inital} onClose={onClose}>
                <DrawerOverlay></DrawerOverlay>
                <DrawerContent>
                    <DrawerHeader> Seek Prenium Luxury Spaces </DrawerHeader>
                    <DrawerCloseButton></DrawerCloseButton>
                    <DrawerBody>
                        <Divider></Divider>
                        <Tag sx={{color: 'teal', position: 'relative', top: '3pc', left: '8pc'}}> Level 1 🥇 </Tag>
                        <Box sx={{position: 'relative', top: '10pc', width: '20pc', left: '2pc'}}>
                            Invest in stunning luxury spaces that combine aesthetics and functionality, creating a harmonious environment for relaxation and inspiration.
                            <Spaces></Spaces>
                            <Divider></Divider>
                            <Center height='300px'>
                                <Divider orientation='vertical' ></Divider>
                            </Center>
                            <Box position={'relative'} top={'-11pc'} width={'10.5pc'}>
                                <Box position={'relative'} top={'-5pc'} left={'3pc'}> <Futuristic_Deals></Futuristic_Deals> </Box>
                                "Invest in futuristic, automated solutions that elevate your prestige and redefine efficiency for a successful future."
                            </Box>
                            <Box position={'relative'} top={'-22.5pc'} width={'10.5pc'} left={'12pc'}>
                                <Box position={'relative'} top={'-5pc'} left={'3pc'}> <GamesDeals></GamesDeals> </Box>
                                "Invest in high-stakes business deals that promise substantial returns and drive your success to new heights."
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
    </>)
}

function Spaces() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [ email, setEmail ] = useState('')
    const [ dealSize, setDealSize ] = useState('')
    const [ dealDays, setDealDays ] = useState('')
    const [ dealNotification, setDealNotification ] = useState('')
    const [ verified, setVerfied ] = useState(false)
    const [ dealType, setDealType ] = useState('')
    const [ cashOnHands, setCashOnHands ] = useState('')
    const [ buyerName, setBuyerName ] = useState('')
    const [ nationality, setNationality ] = useState('')
    const [ buyerEmail, setbuyerEmail ] = useState('')
    const [ buyerPhoneNo, setBuyerPhoneNo ] = useState('')
    const [ purpose, setPurpose ] = useState('')
    const [ paymentPlan, setPaymentPlan ] = useState('')


    const [ DOCID, setDOCID ] = useState('')

    const onHandle_Email = async(event) => {setEmail(event.target.value); console.log('email:', email)}
    const onHandle_DealSize = async(event) => {setDealSize(event.target.value); console.log('Deal size:', dealSize)}
    const onHandle_DealDeays = async(event) => {setDealDays(event.target.value); console.log('days:', dealDays)}
    const onHandle_DealNotify = async(event) => {setDealNotification(event.target.value); console.log('Notification:', dealNotification)}
    const onHandle_DealType = async(event) => {setDealType(event.target.value); console.log('deal type:', dealType)}
    const onHandle_CashOnHands = async(event) => {if(cashOnHands <= 10000){alert("For National Investors atleast 10000 USD For Estate investment & for international luxury estate investors should have atleast 1M USD ")} setCashOnHands(event.target.value); console.log('cashflow:', cashOnHands)}
    const onHandle_BuyerName = async(event) => {setBuyerName(event.target.value); console.log('buyer name:', buyerName)}
    const onHandle_Natioanlity = async(event) => {setNationality(event.target.value); console.log('Nationality:', nationality)}
    const onHandle_Buyer_Email = async(event) => {setBuyerEmail(event.target.value); console.log('buyer email:', buyerEmail)}
    const onHandle_Buyer_PhoneNo = async(event) => {setBuyerPhoneNo(event.target.value); console.log('Phone num:', PhoneNum)}
    const onHandle_Purpose = async(event) => {setPurpose(event.target.value); console.log('purpose:', purpose)}
    const onHandle_Payment = async(event) => {setPaymentPlan(event.target.value); console.log('plan:', paymentPlan)}

    const onHandle_EmailQuery_if_exist = async() => {

        try{

            (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                
                   if ((doc.data().Email === email && doc.data().level >= 1)){ setDOCID(doc.id); console.log('document reference: ',DOCID); setVerfied(true);}
                   if ((doc.data().Email !== email && doc.data().level >= 1)){ alert ('No Email Register on our server')}
            })
        
        }catch(error){
            console.log('error', error)
        }

    }

    const onHandle_DataObject = async() => {

        const collectionRef = collection(getDb(), "ExclusiveInvestor");

        try{

            await addDoc(collectionRef, {

                Email: email,
                DealSize: dealSize,
                DealDays: dealDays,
                dealNotification: dealNotification,
            })

        }catch(error){
            console.log('document status ?', error);
        }
    }


    const onHandle_Buyer_Details = async() => {
        

        try{

            (await getDocs(collection(getDb(), "ExclusiveInvestor"))).forEach((doc)=>{
                
                   if ((email.length >= 1 && doc.data().Email === email)){ setDOCID(doc.id);}
            })

            console.log('reference:', DOCID)
        
        }catch(error){
            console.log('error', error)
        }
        
        const docRef = doc(getDb(), "ExclusiveInvestor",DOCID);

        await updateDoc(docRef, {
                    PeferenceDealType: dealType,
                    Cashflow: cashOnHands,
                    BuyerName: buyerName,
                    BuyerNationality: nationality,
        })
    }

    const onHandle_Buyer_LOI = async() => {
        

        try{

            (await getDocs(collection(getDb(), "ExclusiveInvestor"))).forEach((doc)=>{
                
                   if ((email.length >= 1 && doc.data().Email === email)){ setDOCID(doc.id);}
            })

            console.log('reference:', DOCID)
        
        }catch(error){
            console.log('error', error)
        }
        
        const docRef = doc(getDb(), "ExclusiveInvestor",DOCID);

        await updateDoc(docRef, {
                    BuyerEmail: buyerEmail,
                    BuyerPhoneNum: buyerPhoneNo,
                    InvestmentIntent: purpose,
                    PaymentPlan: paymentPlan,
        })
    }


    return(<>   
        <IconButton icon={<Castle></Castle>} onClick={onOpen}  sx={{position: 'relative', top: '-3pc', left: '10pc', color: 'yellow.600',bg: 'transparent'}}></IconButton>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'full'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader sx={{position: 'relative', top: '5pc', left: '30pc', color: 'yellow.600'}}> Invest in Allure, Reap Rewards 🏨 <Tag> 09 </Tag> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Tabs variant='soft-rounded' colorScheme='yellow' position={'relative'} top={'7pc'}>
                <TabList>
                <Tab> Penthouses 🏠 <Tag position={'relative'} top={'-1.5pc'} color={'yellow.600'}> 2 </Tag> </Tab>
                <Tab> Studio Apartments 🏢 <Tag position={'relative'} top={'-1.5pc'} color={'green'}> 3 </Tag> </Tab>
                <Tab> Private Spaces 🌆 </Tab>
                <Tab> Commerical Estate 🌇 </Tab>
                <Tab> Golf 🏌️ <Tag position={'relative'} top={'-1.5pc'} color={'red.600'}> 1 </Tag> </Tab>
                <Tab> Beach View ⛱️ <Tag position={'relative'} top={'-1.5pc'} color={'green'}> 2 </Tag> </Tab>
                <Tab> Ocean View 🌊 <Tag position={'relative'} top={'-1.5pc'} color={'red.600'}> 1 </Tag> </Tab>
                <Tab> Mountain View ⛰️ </Tab>
                <Tab> Hotel's 🏨 </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <Card>
                    <CardContent>
                        <CardHeader> <Heading as={'h1'} color={'yellow.600'}> Damaan city </Heading> </CardHeader>
                    </CardContent>
                    <CardBody>
                        <Text position={'relative'} top={'2pc'} left={'6pc'}> 📍 EME society, Lahore </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<TbBeach></TbBeach>} position={'relative'} top={'-0pc'} left={'20pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverBody>
                                    <Tag position={'relative'} color={'yellow.600'}> 🏥 Nearby Hospital </Tag>
                                    <Tag  position={'relative'} color={'yellow.600'} left={'1pc'}> 🚌 Nearby Public Transport </Tag>
                                    <Tag position={'relative'} color={'yellow.600'}> 🍴 Nearby Restaurants </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> 🏫 Nearby School </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> 🏬 Near Shopping Mall </Tag>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        {/* <Text position={'relative'} left={'30pc'} top={'-2.5pc'} fontSize={'lg'} color={'green'}> 📈 6% Rental Yield </Text> */}
                        <Text position={'relative'} left={'45pc'} top={'-2.2pc'} fontSize={'lg'} color={'green'}> 💰  5% Fees from each party </Text>
                        {verified ? <IconButton icon={<TbCircleCheck></TbCircleCheck>} color={'green.600'} position={'relative'} top={'-4.2pc'} left={'0pc'} bg={'transparent'}></IconButton> : <IconButton icon={<Cancel></Cancel>} color={'red.600'} position={'relative'} top={'-4.2pc'} bg={'transparent'}></IconButton> }
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BsPersonPlus></BsPersonPlus>} position={'relative'} top={'-13.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Investor Details 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Email}></Input>
                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} left={'16pc'} color={verified ? 'yellow.600' : 'red:600'} bg={'transparent'}></IconButton>
                                            {verified ? <Box>
                                                <FormLabel> Deal size:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealSize}>
                                                    <option> Deluxe Studio </option>
                                                    <option> 1 Cozy Single bedroom </option>
                                                    <option> 2 Double Comfortable bedroom </option>
                                                    <option> 3 Deluxe bedroom </option>
                                                    <option> 4 Grand Deluxe bedroom </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Close Deal Days  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealDeays}>
                                                    <option> 5 days </option>
                                                    <option> 1 week </option>
                                                    <option> 14 days </option>
                                                    <option> 30 days </option>
                                                    <option> 60 days </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Call for future investment  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealNotify}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_DataObject} position={'relative'} top={'0pc'} left={'10.5pc'} color={'yellow.600'} bg={'transparent'}></IconButton> </Box> : 'Your membership is not active yet.'}
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<Home></Home>} position={'relative'} top={'-13.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Additional 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Perference Deal type:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealType}>
                                                    <option> Tycoons Deal &#x1f988; </option>
                                                    <option> Private Deal &#129309; </option>
                                                    <option> Third party Deal &#127937; </option>
                                                    <option> Complex Deal &#127884; </option>
                                                    <option> Public Deal &#127988; </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Annual Cashflow:  </FormLabel>
                                            <Input type="number" placeholder="1000000 USD" min={100000} onChange={onHandle_CashOnHands}></Input>
                                            <FormLabel> Buyer name:  </FormLabel>
                                            <Input type="text" placeholder="Name" onChange={onHandle_BuyerName}></Input>
                                            <FormLabel> Buyer Nationality: </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Natioanlity}>
                                                    <option> National </option>
                                                    <option> Foreigner </option>
                                                    <option> Dual Nationality </option>
                                                    <option> Diplomatic </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_Buyer_Details} position={'relative'} top={'-11.5pc'} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BiCoinStack></BiCoinStack>} position={'relative'} top={'-13.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Letter of Intent 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Buyer_Email}></Input>
                                            <FormLabel> Buyer mobile  </FormLabel>
                                            <Input type="phone" placeholder="mobile" onChange={onHandle_Buyer_PhoneNo}></Input>
                                            <FormLabel> Investment purpose  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Purpose}>
                                                    <option> Living </option>
                                                    <option> Rental yield </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Share payment plan  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Payment}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<PersonPinCircle></PersonPinCircle>} position={'relative'} top={'-11.5pc'} onClick={onHandle_Buyer_LOI} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </CardBody>
                </Card>
                <Divider></Divider>
                <Card>
                    <CardContent>
                        <CardHeader> <Heading as={'h1'} color={'yellow.600'}> DAMAC </Heading> </CardHeader>
                    </CardContent>
                    <CardBody>
                        <Text position={'relative'} top={'2pc'} left={'6pc'}> 📍 Dubai </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<TbBeach></TbBeach>} position={'relative'} top={'-0pc'} left={'20pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverBody>
                                    <Tag position={'relative'} color={'yellow.600'}> 🏞️ ⛲ Aqua Dome & Wild Park </Tag>
                                    <Tag  position={'relative'} color={'yellow.600'} left={'1pc'}> 🏬 Market </Tag>
                                    <Tag position={'relative'} color={'yellow.600'}> 🚣 🦁 Jungle River </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> ♨️ Hot Springs </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> 💪 GYM </Tag>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        {/* <Text position={'relative'} left={'30pc'} top={'-2.5pc'} fontSize={'lg'} color={'green'}> 📈 6% Rental Yield </Text> */}
                        <Text position={'relative'} left={'45pc'} top={'-2.2pc'} fontSize={'lg'} color={'green'}> 💰  5% Fees from each party </Text>
                        {verified ? <IconButton icon={<TbCircleCheck></TbCircleCheck>} color={'green.600'} position={'relative'} top={'-4.2pc'} left={'0pc'} bg={'transparent'}></IconButton> : <IconButton icon={<Cancel></Cancel>} color={'red.600'} position={'relative'} top={'-4.2pc'} bg={'transparent'}></IconButton> }
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BsPersonPlus></BsPersonPlus>} position={'relative'} top={'-13.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Investor Details 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                        <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Email}></Input>
                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} left={'16pc'} color={verified ? 'yellow.600' : 'red:600'} bg={'transparent'}></IconButton>
                                            {verified ? <Box>
                                                <FormLabel> Deal size:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealSize}>
                                                    <option> 7 Bedroom Villa's, GYM & maid </option>
                                                    <option> 6 Bedroom Villa's, GYM & Maid </option>
                                                    <option> 6 Bedroom + Maid </option>
                                                    <option> 5 bedroom Townhouse + Maid </option>
                                                    <option> 4 bedroom Townhouse </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Close Deal Days  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealDeays}>
                                                    <option> 5 days </option>
                                                    <option> 1 week </option>
                                                    <option> 14 days </option>
                                                    <option> 30 days </option>
                                                    <option> 60 days </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Call for future investment  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealNotify}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_DataObject} position={'relative'} top={'0pc'} left={'10.5pc'} color={'yellow.600'} bg={'transparent'}></IconButton> </Box> : 'Your membership is not active yet.'}
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<Home></Home>} position={'relative'} top={'-13.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Additional 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Perference Deal type:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealType}>
                                                    <option> Tycoons Deal &#x1f988; </option>
                                                    <option> Private Deal &#129309; </option>
                                                    <option> Third party Deal &#127937; </option>
                                                    <option> Complex Deal &#127884; </option>
                                                    <option> Public Deal &#127988; </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Annual Cashflow:  </FormLabel>
                                            <Input type="number" placeholder="1000000" min={100000} onChange={onHandle_CashOnHands}></Input>
                                            <FormLabel> Buyer name:  </FormLabel>
                                            <Input type="text" placeholder="Name" onChange={onHandle_BuyerName}></Input>
                                            <FormLabel> Buyer Nationality: </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Natioanlity}>
                                                    <option> National </option>
                                                    <option> Foreigner </option>
                                                    <option> Dual Nationality </option>
                                                    <option> Diplomatic </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_Buyer_Details} position={'relative'} top={'-11.5pc'} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BiCoinStack></BiCoinStack>} position={'relative'} top={'-13.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Letter of Intent 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Buyer_Email}></Input>
                                            <FormLabel> Buyer mobile  </FormLabel>
                                            <Input type="phone" placeholder="mobile" onChange={onHandle_Buyer_PhoneNo}></Input>
                                            <FormLabel> Investment purpose  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Purpose}>
                                                    <option> Living </option>
                                                    <option> Rental yield </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Share payment plan  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Payment}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<PersonPinCircle></PersonPinCircle>} position={'relative'} top={'-11.5pc'} onClick={onHandle_Buyer_LOI} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </CardBody>
                </Card>
                </TabPanel>
                <TabPanel>
                <Card>
                    <CardContent>
                        <CardHeader> <Heading as={'h1'} color={'yellow.600'}> Unique Complex </Heading> </CardHeader>
                    </CardContent>
                    <CardBody>
                        <Text position={'relative'} top={'2pc'} left={'6pc'}> 📍 DHA, Lahore </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<TbBeach></TbBeach>} position={'relative'} top={'-0.5pc'} left={'20pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverBody>
                                    <Tag position={'relative'} color={'yellow.600'}> Single Cozy Room </Tag>
                                    <Tag  position={'relative'} color={'yellow.600'} left={'1pc'}> Double Comfat Room </Tag>
                                    <Tag position={'relative'} color={'yellow.600'}> Triple Pestige Room </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> 4 Deluxe Rooms </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> 🍔 Food Court </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1.5pc'}> 🏋 GYM </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'2pc'}> 🛒 Shops </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1.5pc'}> 🅿 Parking </Tag>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Text position={'relative'} left={'30pc'} top={'-2.5pc'} fontSize={'lg'} color={'green'}> 📈 6% Rental Yield </Text>
                        <Text position={'relative'} left={'45pc'} top={'-4.2pc'} fontSize={'lg'} color={'green'}> 💰  5% Fees from each party </Text>
                        {verified ? <IconButton icon={<TbCircleCheck></TbCircleCheck>} color={'green.600'} position={'relative'} top={'-6pc'} left={'0pc'} bg={'transparent'}></IconButton> : <IconButton icon={<Cancel></Cancel>} color={'red.600'} position={'relative'} top={'-6pc'} bg={'transparent'}></IconButton> }
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BsPersonPlus></BsPersonPlus>} position={'relative'} top={'-15.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Investor Details 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                        <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Email}></Input>
                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} left={'16pc'} color={verified ? 'yellow.600' : 'red:600'} bg={'transparent'}></IconButton>
                                            {verified ? <Box>
                                                <FormLabel> Deal size:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealSize}>
                                                    <option> Deluxe Studio </option>
                                                    <option> 1 Cozy Single bedroom </option>
                                                    <option> 2 Double Comfortable bedroom </option>
                                                    <option> 3 Deluxe bedroom </option>
                                                    <option> 4 Grand Deluxe bedroom </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Close Deal Days  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealDeays}>
                                                    <option> 5 days </option>
                                                    <option> 1 week </option>
                                                    <option> 14 days </option>
                                                    <option> 30 days </option>
                                                    <option> 60 days </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Call for future investment  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealNotify}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_DataObject} position={'relative'} top={'0pc'} left={'10.5pc'} color={'yellow.600'} bg={'transparent'}></IconButton> </Box> : 'Your membership is not active yet.'}
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<Home></Home>} position={'relative'} top={'-15.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Additional 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Perference Deal type:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealType}>
                                                    <option> Tycoons Deal &#x1f988; </option>
                                                    <option> Private Deal &#129309; </option>
                                                    <option> Third party Deal &#127937; </option>
                                                    <option> Complex Deal &#127884; </option>
                                                    <option> Public Deal &#127988; </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Annual Cashflow:  </FormLabel>
                                            <Input type="number" placeholder="1000000" min={100000} onChange={onHandle_CashOnHands}></Input>
                                            <FormLabel> Buyer name:  </FormLabel>
                                            <Input type="text" placeholder="Name" onChange={onHandle_BuyerName}></Input>
                                            <FormLabel> Buyer Nationality: </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Natioanlity}>
                                                    <option> National </option>
                                                    <option> Foreigner </option>
                                                    <option> Dual Nationality </option>
                                                    <option> Diplomatic </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_Buyer_Details} position={'relative'} top={'-11.5pc'} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BiCoinStack></BiCoinStack>} position={'relative'} top={'-15.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Letter of Intent 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Buyer_Email}></Input>
                                            <FormLabel> Buyer mobile  </FormLabel>
                                            <Input type="phone" placeholder="mobile" onChange={onHandle_Buyer_PhoneNo}></Input>
                                            <FormLabel> Investment purpose  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Purpose}>
                                                    <option> Living </option>
                                                    <option> Rental yield </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Share payment plan  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Payment}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<PersonPinCircle></PersonPinCircle>} position={'relative'} top={'-11.5pc'} onClick={onHandle_Buyer_LOI} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </CardBody>
                </Card>
                <Divider></Divider>
                <Card>
                    <CardContent>
                        <CardHeader> <Heading as={'h1'} color={'teal'}> Samana Resorts </Heading> </CardHeader>
                    </CardContent>
                    <CardBody>
                        <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmKUu6uWHLLjnL77mHVkbdB-VxHh_KkYwug&s'} alt='samna' width={'20pc'} borderRadius={'2pc'}></Image>
                        <Text position={'relative'} top={'-8.5pc'} left={'30pc'}> 📍 Dubai </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<TbBeach></TbBeach>} position={'relative'} top={'-10.5pc'} left={'40pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverBody>
                                    <Tag position={'relative'} color={'yellow.600'}> ⛲ Zen Park </Tag>
                                    <Tag  position={'relative'} color={'yellow.600'} left={'1pc'}> 🧸 Kids play </Tag>
                                    <Tag position={'relative'} color={'yellow.600'}> 🏊 Private pools </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> ☀️ Outdoor Cinema </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> 🍔 Roof Sun Deck </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1.5pc'}> 🏋  Open air GYM </Tag>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Text position={'relative'} left={'30pc'} top={'-5.5pc'} fontSize={'lg'} color={'teal'}> 🏢 19 Floors </Text>
                        <Text position={'relative'} left={'50pc'} top={'-14pc'} fontSize={'lg'} color={'green'}> 💰  5% Fees from each party </Text>
                        {verified ? <IconButton icon={<TbCircleCheck></TbCircleCheck>} color={'green.600'} position={'relative'} top={'-16.5pc'} bg={'transparent'} left={'22pc'}></IconButton> : <IconButton icon={<Cancel></Cancel>} color={'red.600'} position={'relative'} top={'-16.5pc'} bg={'transparent'} left={'22pc'}></IconButton> }
                        <Text position={'relative'} left={'40pc'} top={'-11.5pc'} fontSize={'lg'} color={'teal'}> ⏬🚻⏫ 3 Elevators </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BsPersonPlus></BsPersonPlus>} position={'relative'} top={'-27.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Investor Details 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                        <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Email}></Input>
                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} left={'16pc'} color={verified ? 'yellow.600' : 'red:600'} bg={'transparent'}></IconButton>
                                            {verified ? <Box>
                                                <FormLabel> Deal size:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealSize}>
                                                    <option> Deluxe Studio with Pool </option>
                                                    <option> 1 Cozy Single bedroom with Pool </option>
                                                    <option> 1 Deluxe bedroom, store & Pool </option>
                                                    <option> 1 Grand Deluxe bedroom with maid, pool </option>
                                                    <option> 2 Deluxe bedroom with Pool </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Close Deal Days  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealDeays}>
                                                    <option> 5 days </option>
                                                    <option> 1 week </option>
                                                    <option> 14 days </option>
                                                    <option> 30 days </option>
                                                    <option> 60 days </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Call for future investment  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealNotify}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_DataObject} position={'relative'} top={'0pc'} left={'10.5pc'} color={'yellow.600'} bg={'transparent'}></IconButton> </Box> : 'Your membership is not active yet.'}
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<Home></Home>} position={'relative'} top={'-27.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Additional 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Perference Deal type:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealType}>
                                                    <option> Tycoons Deal &#x1f988; </option>
                                                    <option> Private Deal &#129309; </option>
                                                    <option> Third party Deal &#127937; </option>
                                                    <option> Complex Deal &#127884; </option>
                                                    <option> Public Deal &#127988; </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Annual Cashflow:  </FormLabel>
                                            <Input type="number" placeholder="1000000" min={100000} onChange={onHandle_CashOnHands}></Input>
                                            <FormLabel> Buyer name:  </FormLabel>
                                            <Input type="text" placeholder="Name" onChange={onHandle_BuyerName}></Input>
                                            <FormLabel> Buyer Nationality: </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Natioanlity}>
                                                    <option> National </option>
                                                    <option> Foreigner </option>
                                                    <option> Dual Nationality </option>
                                                    <option> Diplomatic </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_Buyer_Details} position={'relative'} top={'-11.5pc'} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BiCoinStack></BiCoinStack>} position={'relative'} top={'-27.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Letter of Intent 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Buyer_Email}></Input>
                                            <FormLabel> Buyer mobile  </FormLabel>
                                            <Input type="phone" placeholder="mobile" onChange={onHandle_Buyer_PhoneNo}></Input>
                                            <FormLabel> Investment purpose  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Purpose}>
                                                    <option> Living </option>
                                                    <option> Rental yield </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Share payment plan  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Payment}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<PersonPinCircle></PersonPinCircle>} position={'relative'} top={'-11.5pc'} onClick={onHandle_Buyer_LOI} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </CardBody>
                </Card>
                <Divider></Divider>
                <Card>
                    <CardContent>
                        <CardHeader> <Heading as={'h1'} color={'green.600'}> Tonino Lamborghini </Heading> </CardHeader>
                    </CardContent>
                    <CardBody>
                        <Image src={'https://www.gulflandproperty.com/background/tonino-lamborghini-banner.webp'} alt='samna' width={'20pc'} borderRadius={'2pc'}></Image>
                        <Text position={'relative'} top={'-8.5pc'} left={'30pc'}> 📍 Dubai </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<TbBeach></TbBeach>} position={'relative'} top={'-10.5pc'} left={'40pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverBody>
                                    <Tag position={'relative'} color={'yellow.600'}> ⛲ Park </Tag>
                                    <Tag  position={'relative'} color={'yellow.600'} left={'1pc'}> 🧸 Kids play </Tag>
                                    <Tag position={'relative'} color={'yellow.600'}> 🏊 Private pools </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> ☀️ Outdoor Cinema </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> 🍔 Roof Sun Deck </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1.5pc'}> 🏋  Open air GYM </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1.5pc'}> &#127860;  RESTAURANTS </Tag>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Text position={'relative'} left={'30pc'} top={'-5.5pc'} fontSize={'lg'} color={'teal'}> 🏢 4 iconic building </Text>
                        <Text position={'relative'} left={'50pc'} top={'-14pc'} fontSize={'lg'} color={'green'}> 💰  5% Fees from each party </Text>
                        {verified ? <IconButton icon={<TbCircleCheck></TbCircleCheck>} color={'green.600'} top={'-16.5pc'} left={'22pc'}  bg={'transparent'}></IconButton> : <IconButton icon={<Cancel></Cancel>} color={'red.600'} position={'relative'} top={'-16.5pc'} bg={'transparent'} left={'22pc'}></IconButton> }
                        <Text position={'relative'} left={'40pc'} top={'-11.5pc'} fontSize={'lg'} color={'teal'}> 🛌 541 units </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BsPersonPlus></BsPersonPlus>} position={'relative'} top={'-27.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Investor Details 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                        <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Email}></Input>
                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} left={'16pc'} color={verified ? 'yellow.600' : 'red:600'} bg={'transparent'}></IconButton>
                                            {verified ? <Box>
                                                <FormLabel> Deal size:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealSize}>
                                                    <option> 1 Cozy Single bedroom </option>
                                                    <option> 2 Double Comfortable bedroom </option>
                                                    <option> 3 Deluxe bedroom </option>
                                                    <option> 4 Grand Deluxe bedroom </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Close Deal Days  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealDeays}>
                                                    <option> 5 days </option>
                                                    <option> 1 week </option>
                                                    <option> 14 days </option>
                                                    <option> 30 days </option>
                                                    <option> 60 days </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Call for future investment  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealNotify}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_DataObject} position={'relative'} top={'0pc'} left={'10.5pc'} color={'yellow.600'} bg={'transparent'}></IconButton> </Box> : 'Your membership is not active yet.'}
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<Home></Home>} position={'relative'} top={'-27.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Additional 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Perference Deal type:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealType}>
                                                    <option> Tycoons Deal &#x1f988; </option>
                                                    <option> Private Deal &#129309; </option>
                                                    <option> Third party Deal &#127937; </option>
                                                    <option> Complex Deal &#127884; </option>
                                                    <option> Public Deal &#127988; </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Annual Cashflow:  </FormLabel>
                                            <Input type="number" placeholder="1000000" min={100000} onChange={onHandle_CashOnHands}></Input>
                                            <FormLabel> Buyer name:  </FormLabel>
                                            <Input type="text" placeholder="Name" onChange={onHandle_BuyerName}></Input>
                                            <FormLabel> Buyer Nationality: </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Natioanlity}>
                                                    <option> National </option>
                                                    <option> Foreigner </option>
                                                    <option> Dual Nationality </option>
                                                    <option> Diplomatic </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_Buyer_Details} position={'relative'} top={'-11.5pc'} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BiCoinStack></BiCoinStack>} position={'relative'} top={'-27.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Letter of Intent 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Buyer_Email}></Input>
                                            <FormLabel> Buyer mobile  </FormLabel>
                                            <Input type="phone" placeholder="mobile" onChange={onHandle_Buyer_PhoneNo}></Input>
                                            <FormLabel> Investment purpose  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Purpose}>
                                                    <option> Living </option>
                                                    <option> Rental yield </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Share payment plan  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Payment}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<PersonPinCircle></PersonPinCircle>} position={'relative'} top={'-11.5pc'} onClick={onHandle_Buyer_LOI} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </CardBody>
                </Card>
                </TabPanel>
                <TabPanel>
                    <Card>
                        <CardContent>
                            <CardHeader> <Heading as={'h1'} color={'yellow.600'} width={'30pc'} position={'relative'} left={'10pc'}> Sorry Man ! We can't allure your senses in this category </Heading> </CardHeader>
                        </CardContent>
                    </Card>
                </TabPanel>
                <TabPanel>
                     <Card>
                        <CardContent>
                            <CardHeader> <Heading as={'h1'} color={'yellow.600'} width={'30pc'} position={'relative'} left={'10pc'}> Sorry Man ! We can't allure your senses in this category </Heading> </CardHeader>
                        </CardContent>
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card>
                    <CardContent>
                        <CardHeader> <Heading as={'h1'} color={'blue.600'}> Emaar </Heading> </CardHeader>
                    </CardContent>
                    <CardBody>
                        <Image src={'https://cdn.properties.emaar.com/wp-content/uploads/2020/05/cam-1-20171103-EDIT-1620x832.jpg'} alt='emaar' width={'20pc'} borderRadius={'2pc'}></Image>
                        <Text position={'relative'} top={'-8.5pc'} left={'30pc'}> 📍 Dubai </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<TbBeach></TbBeach>} position={'relative'} top={'-10.5pc'} left={'40pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverBody>
                                    <Tag position={'relative'} color={'yellow.600'}> ⛲ Park </Tag>
                                    <Tag  position={'relative'} color={'yellow.600'} left={'1pc'}> ⛳ 18 Golf Championship </Tag>
                                    {/* <Tag position={'relative'} color={'yellow.600'}> 🏊 Private pools </Tag> */}
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> ✈️ NearBy World Largest Airport </Tag>
                                    {/* <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> 🍔 Roof Sun Deck </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1.5pc'}> 🏋  Open air GYM </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1.5pc'}> &#127860;  RESTAURANTS </Tag> */}
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Text position={'relative'} left={'30pc'} top={'-5.5pc'} fontSize={'lg'} color={'teal'}> 🏢 Exclusive Investment </Text>
                        <Text position={'relative'} left={'50pc'} top={'-14pc'} fontSize={'lg'} color={'green'}> 💰  5% Fees from each party </Text>
                        {verified ? <IconButton icon={<TbCircleCheck></TbCircleCheck>} color={'green.600'} top={'-16.5pc'} left={'22pc'}  bg={'transparent'}></IconButton> : <IconButton icon={<Cancel></Cancel>} color={'red.600'} position={'relative'} top={'-16.5pc'} bg={'transparent'} left={'22pc'}></IconButton> }
                        {/* <Text position={'relative'} left={'40pc'} top={'-11.5pc'} fontSize={'lg'} color={'teal'}> 🛌 541 units </Text> */}
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BsPersonPlus></BsPersonPlus>} position={'relative'} top={'-24.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Investor Details 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                        <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Email}></Input>
                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} left={'16pc'} color={verified ? 'yellow.600' : 'red:600'} bg={'transparent'}></IconButton>
                                            {verified ? <Box>
                                                <FormLabel> Deal size:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealSize}>
                                                    <option> 1 Cozy Single bedroom </option>
                                                    <option> 2 Double Comfortable bedroom </option>
                                                    <option> 3 Deluxe bedroom </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Close Deal Days  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealDeays}>
                                                    <option> 5 days </option>
                                                    <option> 1 week </option>
                                                    <option> 14 days </option>
                                                    <option> 30 days </option>
                                                    <option> 60 days </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Call for future investment  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealNotify}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_DataObject} position={'relative'} top={'0pc'} left={'10.5pc'} color={'yellow.600'} bg={'transparent'}></IconButton> </Box> : 'Your membership is not active yet.'}
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<Home></Home>} position={'relative'} top={'-22.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Additional 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Perference Deal type:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealType}>
                                                    <option> Tycoons Deal &#x1f988; </option>
                                                    <option> Private Deal &#129309; </option>
                                                    <option> Third party Deal &#127937; </option>
                                                    <option> Complex Deal &#127884; </option>
                                                    <option> Public Deal &#127988; </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Annual Cashflow:  </FormLabel>
                                            <Input type="number" placeholder="1000000" min={100000} onChange={onHandle_CashOnHands}></Input>
                                            <FormLabel> Buyer name:  </FormLabel>
                                            <Input type="text" placeholder="Name" onChange={onHandle_BuyerName}></Input>
                                            <FormLabel> Buyer Nationality: </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Natioanlity}>
                                                    <option> National </option>
                                                    <option> Foreigner </option>
                                                    <option> Dual Nationality </option>
                                                    <option> Diplomatic </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_Buyer_Details} position={'relative'} top={'-11.5pc'} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BiCoinStack></BiCoinStack>} position={'relative'} top={'-22.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Letter of Intent 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Buyer_Email}></Input>
                                            <FormLabel> Buyer mobile  </FormLabel>
                                            <Input type="phone" placeholder="mobile" onChange={onHandle_Buyer_PhoneNo}></Input>
                                            <FormLabel> Investment purpose  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Purpose}>
                                                    <option> Living </option>
                                                    <option> Rental yield </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Share payment plan  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Payment}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<PersonPinCircle></PersonPinCircle>} position={'relative'} top={'-11.5pc'} onClick={onHandle_Buyer_LOI} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </CardBody>
                </Card>
                </TabPanel>
                <TabPanel>
                <Card>
                    <CardContent>
                        <CardHeader> <Heading as={'h1'} color={'teal'}> The Perigon </Heading> </CardHeader>
                    </CardContent>
                    <CardBody>
                        <Image src={'https://www.miamiluxuryhomes.com/wp-content/uploads/2022/03/Rendering-of-Perigon-Miami-Beach-Condos-and-Garden-Path.jpg'} alt='samna' width={'20pc'} borderRadius={'2pc'}></Image>
                        <Text position={'relative'} top={'-8.5pc'} left={'30pc'}> 📍 Mami Beach, USA </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<TbBeach></TbBeach>} position={'relative'} top={'-10.5pc'} left={'44pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverBody>
                                    <Tag position={'relative'} color={'yellow.600'}> 🏖️ Beach </Tag>
                                    <Tag  position={'relative'} color={'yellow.600'} left={'1pc'}> 🧸 Kids Room </Tag>
                                    <Tag position={'relative'} color={'yellow.600'}> 🏊 SPA </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> 🌟 5 Star Hotel </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> 🍔 Restaurant </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1.5pc'}> 🏋  Open air GYM </Tag>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Text position={'relative'} left={'30pc'} top={'-5.5pc'} fontSize={'lg'} color={'teal'}> 🏢 18 Stories + 73 units  </Text>
                        <Text position={'relative'} left={'50pc'} top={'-14.2pc'} fontSize={'lg'} color={'green'}> 💰  5% Fees from each party </Text>
                        {verified ? <IconButton icon={<TbCircleCheck></TbCircleCheck>} color={'green.600'} position={'relative'} top={'-16.5pc'} bg={'transparent'} left={'22pc'}></IconButton> : <IconButton icon={<Cancel></Cancel>} color={'red.600'} position={'relative'} top={'-16.5pc'} bg={'transparent'} left={'22pc'}></IconButton> }
                        <Text position={'relative'} left={'44pc'} top={'-11.5pc'} fontSize={'lg'} color={'teal'}> 🛏️ 10 guests </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BsPersonPlus></BsPersonPlus>} position={'relative'} top={'-31.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Investor Details 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                        <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Email}></Input>
                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} left={'16pc'} color={verified ? 'yellow.600' : 'red:600'} bg={'transparent'}></IconButton>
                                            {verified ? <Box>
                                                <FormLabel> Deal size:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealSize}>
                                                   <option> Majesty Suite [ 4 Bedroom's, 5 Bathroom, Powder Room, Den, Direct East Exposure ] </option>
                                                    <option> Queen Suite [ 3 Bedroom's, 3 Bathroom, Powder Room, S, SW, SE Exposure] </option>
                                                    <option> Prince Suite [ 2 Bedroom's, 2 Bathroom, Powder Room, N, NW, NE Exposure] </option>
                                                    <option> Princess Suite [ 2 Bedroom's, 2 Bathroom, Powder Room, S, SW, SE Exposure] </option>
                                                    <option> Royal Friend Suite [ 4 Bedroom's, 5 Bathroom, Powder Room, Bay & Ocean View ] </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Close Deal Days  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealDeays}>
                                                    <option> 5 days </option>
                                                    <option> 1 week </option>
                                                    <option> 14 days </option>
                                                    <option> 30 days </option>
                                                    <option> 60 days </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Call for future investment  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealNotify}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_DataObject} position={'relative'} top={'0pc'} left={'10.5pc'} color={'yellow.600'} bg={'transparent'}></IconButton> </Box> : 'Your membership is not active yet.'}
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<Home></Home>} position={'relative'} top={'-31.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Additional 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Perference Deal type:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealType}>
                                                    <option> Tycoons Deal &#x1f988; </option>
                                                    <option> Private Deal &#129309; </option>
                                                    <option> Third party Deal &#127937; </option>
                                                    <option> Complex Deal &#127884; </option>
                                                    <option> Public Deal &#127988; </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Annual Cashflow:  </FormLabel>
                                            <Input type="number" placeholder="1000000" min={100000} onChange={onHandle_CashOnHands}></Input>
                                            <FormLabel> Buyer name:  </FormLabel>
                                            <Input type="text" placeholder="Name" onChange={onHandle_BuyerName}></Input>
                                            <FormLabel> Buyer Nationality: </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Natioanlity}>
                                                    <option> National </option>
                                                    <option> Foreigner </option>
                                                    <option> Dual Nationality </option>
                                                    <option> Diplomatic </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_Buyer_Details} position={'relative'} top={'-11.5pc'} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BiCoinStack></BiCoinStack>} position={'relative'} top={'-31.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Letter of Intent 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Buyer_Email}></Input>
                                            <FormLabel> Buyer mobile  </FormLabel>
                                            <Input type="phone" placeholder="mobile" onChange={onHandle_Buyer_PhoneNo}></Input>
                                            <FormLabel> Investment purpose  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Purpose}>
                                                    <option> Living </option>
                                                    <option> Rental yield </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Share payment plan  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Payment}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<PersonPinCircle></PersonPinCircle>} position={'relative'} top={'-11.5pc'} onClick={onHandle_Buyer_LOI} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </CardBody>
                </Card>
                <Divider></Divider>
                <Card>
                    <CardContent>
                        <CardHeader> <Heading as={'h1'} color={'teal'}> Ritz Carlton Sunny Isles Beach </Heading> </CardHeader>
                    </CardContent>
                    <CardBody>
                        <Image src={'https://www.thorntontomasetti.com/sites/default/files/styles/paragraph_slideshow/public/ritz-3.jpg?itok=K3t0blkB'} alt='samna' width={'20pc'} borderRadius={'2pc'}></Image>
                        <Text position={'relative'} top={'-13.5pc'} left={'30pc'}> 📍 Atlantic Ocean, USA </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<TbBeach></TbBeach>} position={'relative'} top={'-15.5pc'} left={'44pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverBody>
                                <Tag position={'relative'} color={'yellow.600'}> 🏖️ Beach </Tag>
                                    <Tag  position={'relative'} color={'yellow.600'} left={'1pc'}> 🍴 Luxury Restaurant </Tag>
                                    <Tag position={'relative'} color={'yellow.600'}> ♨️ Hot Springs </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> 🛏️ Rooms </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1.5pc'}> 🏋 Duluxe GYM </Tag>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Text position={'relative'} left={'40pc'} top={'-10.5pc'} fontSize={'lg'} color={'teal'}> 🏢 43 Stories  </Text>
                        <Text position={'relative'} left={'50pc'} top={'-19.5pc'} fontSize={'lg'} color={'green'}> 💰  5% Fees from each party </Text>
                        {verified ? <IconButton icon={<TbCircleCheck></TbCircleCheck>} color={'green.600'} position={'relative'} top={'-20.5pc'} bg={'transparent'} left={'21.5pc'}></IconButton> : <IconButton icon={<Cancel></Cancel>} color={'red.600'} position={'relative'} top={'-21.5pc'} bg={'transparent'} left={'22pc'}></IconButton> }
                        {/* <Text position={'relative'} left={'44pc'} top={'-11.5pc'} fontSize={'lg'} color={'teal'}> 🛏️ 10 guests </Text> */}
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BsPersonPlus></BsPersonPlus>} position={'relative'} top={'-31.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Investor Details 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                        <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Email}></Input>
                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} left={'16pc'} color={verified ? 'yellow.600' : 'red:600'} bg={'transparent'}></IconButton>
                                            {verified ? <Box>
                                                <FormLabel> Deal size:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealSize}>
                                                    <option> 2 Grand Duplex Luxury Bedroom with aesthetic italian furniture & masterpiece artwork </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Close Deal Days  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealDeays}>
                                                    <option> 5 days </option>
                                                    <option> 1 week </option>
                                                    <option> 14 days </option>
                                                    <option> 30 days </option>
                                                    <option> 60 days </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Call for future investment  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealNotify}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_DataObject} position={'relative'} top={'0pc'} left={'10.5pc'} color={'yellow.600'} bg={'transparent'}></IconButton> </Box> : 'Your membership is not active yet.'}
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<Home></Home>} position={'relative'} top={'-31.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Additional 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Perference Deal type:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealType}>
                                                    <option> Tycoons Deal &#x1f988; </option>
                                                    <option> Private Deal &#129309; </option>
                                                    <option> Third party Deal &#127937; </option>
                                                    <option> Complex Deal &#127884; </option>
                                                    <option> Public Deal &#127988; </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Annual Cashflow:  </FormLabel>
                                            <Input type="number" placeholder="1000000" min={100000} onChange={onHandle_CashOnHands}></Input>
                                            <FormLabel> Buyer name:  </FormLabel>
                                            <Input type="text" placeholder="Name" onChange={onHandle_BuyerName}></Input>
                                            <FormLabel> Buyer Nationality: </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Natioanlity}>
                                                    <option> National </option>
                                                    <option> Foreigner </option>
                                                    <option> Dual Nationality </option>
                                                    <option> Diplomatic </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_Buyer_Details} position={'relative'} top={'-11.5pc'} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BiCoinStack></BiCoinStack>} position={'relative'} top={'-31.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Letter of Intent 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Buyer_Email}></Input>
                                            <FormLabel> Buyer mobile  </FormLabel>
                                            <Input type="phone" placeholder="mobile" onChange={onHandle_Buyer_PhoneNo}></Input>
                                            <FormLabel> Investment purpose  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Purpose}>
                                                    <option> Living </option>
                                                    <option> Rental yield </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Share payment plan  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Payment}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<PersonPinCircle></PersonPinCircle>} position={'relative'} top={'-11.5pc'} onClick={onHandle_Buyer_LOI} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </CardBody>
                </Card>
                </TabPanel>
                <TabPanel>
                    <Card>
                    <CardContent>
                        <CardHeader> <Heading as={'h1'} color={'teal'}> Aston Martin Residences </Heading> </CardHeader>
                    </CardContent>
                    <CardBody>
                        <Image src={'https://floridayimby.com/wp-content/uploads/2021/12/https___hypebeast.com_image_2021_07_aston-martin-residences-miami-inside-look-reveal-001.jpg'} alt='samna' width={'20pc'} borderRadius={'2pc'}></Image>
                        <Text position={'relative'} top={'-8.5pc'} left={'30pc'}> 📍 Mami Beach, USA </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<TbBeach></TbBeach>} position={'relative'} top={'-10.5pc'} left={'44pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverBody>
                                <Tag position={'relative'} color={'yellow.600'}> 🏖️ Prestige Pool </Tag>
                                    <Tag  position={'relative'} color={'yellow.600'} left={'1pc'}> Luxury Yacht Marina </Tag>
                                    <Tag position={'relative'} color={'yellow.600'}> 🏊 SPA </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1pc'}> 🎞️ Aesthetic Cinema </Tag>
                                    <Tag position={'relative'} color={'yellow.600'} left={'1.5pc'}> 🏋 Duluxe GYM </Tag>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Text position={'relative'} left={'30pc'} top={'-5.5pc'} fontSize={'lg'} color={'teal'}> 🏢 18 Stories + 73 units  </Text>
                        <Text position={'relative'} left={'50pc'} top={'-14.2pc'} fontSize={'lg'} color={'green'}> 💰  5% Fees from each party </Text>
                        {verified ? <IconButton icon={<TbCircleCheck></TbCircleCheck>} color={'green.600'} position={'relative'} top={'-16.5pc'} bg={'transparent'} left={'22pc'}></IconButton> : <IconButton icon={<Cancel></Cancel>} color={'red.600'} position={'relative'} top={'-16.5pc'} bg={'transparent'} left={'22pc'}></IconButton> }
                        <Text position={'relative'} left={'44pc'} top={'-11.5pc'} fontSize={'lg'} color={'teal'}> 🛏️ 10 guests </Text>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BsPersonPlus></BsPersonPlus>} position={'relative'} top={'-31.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Investor Details 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                        <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Email}></Input>
                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} left={'16pc'} color={verified ? 'yellow.600' : 'red:600'} bg={'transparent'}></IconButton>
                                            {verified ? <Box>
                                                <FormLabel> Deal size:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealSize}>
                                                    <option> Majesty Residence [4 Comfortable Bedroom, 6 Bathroom's, Family Room, Den, Staff Quaters] </option>
                                                    <option> Majesty Family Residence [ 5 Duplux Bedroom's, 5.5 Bathroom's] </option>
                                                    <option> Queen Residence [3 Duluxe Bedroom, 5.5 Bathroom's, Den, Staff Quaters ] </option>
                                                    <option> Princess Residence [ 5 Comfortable Bedroom's, 7 Bathroom's] </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Close Deal Days  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealDeays}>
                                                    <option> 5 days </option>
                                                    <option> 1 week </option>
                                                    <option> 14 days </option>
                                                    <option> 30 days </option>
                                                    <option> 60 days </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Call for future investment  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealNotify}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_DataObject} position={'relative'} top={'0pc'} left={'10.5pc'} color={'yellow.600'} bg={'transparent'}></IconButton> </Box> : 'Your membership is not active yet.'}
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<Home></Home>} position={'relative'} top={'-31.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Additional 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Perference Deal type:  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_DealType}>
                                                    <option> Tycoons Deal &#x1f988; </option>
                                                    <option> Private Deal &#129309; </option>
                                                    <option> Third party Deal &#127937; </option>
                                                    <option> Complex Deal &#127884; </option>
                                                    <option> Public Deal &#127988; </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Annual Cashflow:  </FormLabel>
                                            <Input type="number" placeholder="1000000" min={100000} onChange={onHandle_CashOnHands}></Input>
                                            <FormLabel> Buyer name:  </FormLabel>
                                            <Input type="text" placeholder="Name" onChange={onHandle_BuyerName}></Input>
                                            <FormLabel> Buyer Nationality: </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Natioanlity}>
                                                    <option> National </option>
                                                    <option> Foreigner </option>
                                                    <option> Dual Nationality </option>
                                                    <option> Diplomatic </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={onHandle_Buyer_Details} position={'relative'} top={'-11.5pc'} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton icon={<BiCoinStack></BiCoinStack>} position={'relative'} top={'-31.5pc'} left={'50pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader> Letter of Intent 🕴️ </PopoverHeader>
                                <PopoverCloseButton></PopoverCloseButton>
                                <PopoverBody>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Email:  </FormLabel>
                                            <Input type="email" placeholder="Email" onChange={onHandle_Buyer_Email}></Input>
                                            <FormLabel> Buyer mobile  </FormLabel>
                                            <Input type="phone" placeholder="mobile" onChange={onHandle_Buyer_PhoneNo}></Input>
                                            <FormLabel> Investment purpose  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Purpose}>
                                                    <option> Living </option>
                                                    <option> Rental yield </option>
                                                </Select>
                                            </Stack>
                                            <FormLabel> Share payment plan  </FormLabel>
                                            <Stack spacing={2}>
                                                <Select variant={'filled'} placeholder="Select" onChange={onHandle_Payment}>
                                                    <option> Yes </option>
                                                    <option> No </option>
                                                </Select>
                                            </Stack>
                                            <IconButton icon={<PersonPinCircle></PersonPinCircle>} position={'relative'} top={'-11.5pc'} onClick={onHandle_Buyer_LOI} left={'16pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                                        </FormControl>
                                    </form>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </CardBody>
                     </Card>
                </TabPanel>
                <TabPanel>
                    <Card>
                        <CardContent>
                            <CardHeader> <Heading as={'h1'} color={'yellow.600'} width={'30pc'} position={'relative'} left={'10pc'}> Sorry Man ! We can't allure your senses in this category </Heading> </CardHeader>
                        </CardContent>
                    </Card>
                </TabPanel>
                <TabPanel>
                <Card>
                        <CardContent>
                            <CardHeader> <Heading as={'h1'} color={'yellow.600'} width={'30pc'} position={'relative'} left={'10pc'}> Sorry Man ! We can't allure your senses in this category </Heading> </CardHeader>
                        </CardContent>
                </Card>
                </TabPanel>
            </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>)
}

export default function Merchandise () {
    
    const {isOpen, onOpen, onClose} = useDisclosure();
    const size = useState('full');
    

    return(
        <>
            <Box sx={{position: 'relative', top: '140pc', left: '5pc'}}>
                <Box sx={{width: '30pc', height: '20pc', color: 'yellow.600'}}>
                    Discover the elegance of Royal Merchandise, where luxury meets legacy. Each piece tells a story of grandeur, crafted with precision and care. From exclusive collectibles to timeless fashion, our collection embodies royal heritage. Elevate your style and make a statement worthy of royalty. Experience the essence of sophistication today!
                    <Box sx={{position: 'relative', top: '2pc'}}>
                        <Image src="https://img.freepik.com/premium-photo/beautifully-crafted-stone-fountain-center-mughal-garden-surrounded-lush-plant-meticulously_1266280-92174.jpg" alt="fountain" sx={{borderRadius: '20pc'}}></Image>
                    </Box>
                    <Box sx={{position:'relative', top: '3pc', fontSize: 'x-large', color: 'gold', left: '5pc', font: 'bold', fontFamily: 'La Belle Aurore'}}> Aesthetic Luxury Unveile! </Box>
                </Box>
                <IconButton onClick={onOpen} icon={<ShoppingCart></ShoppingCart>} sx={{color: 'brown', bg: 'white', position: 'relative', top: '15pc', left: '40pc', font: 'large'}}></IconButton>
                <Modal onClose={onClose} size={size} isOpen={isOpen}>
                    <ModalOverlay>
                        <ModalContent>
                            <ModalHeader> Merchandise  </ModalHeader>
                            <ModalCloseButton></ModalCloseButton>
                            <ModalBody>
                                <Image src={Breguet} width={100} height={100} alt="Breguet" sx={{borderRadius: "20pc", position: 'relative', top: "0pc", left: "7pc"}}></Image>
                                <Text sx={{position: 'relative', top: '0.5pc', left: '9pc'}}> Watch </Text>
                                <Image src={VintagePen} width={100} height={100} alt="Pen" sx={{borderRadius: "20pc", position: 'relative', top: "-10pc", left: "25pc"}}></Image>
                                <Text sx={{position: 'relative', top: '-10pc', left: '23.5pc'}}> Limied Editions Pens </Text>
                                <Image src={CaronsPoivre} width={100} height={100} alt="parfum" sx={{borderRadius: "20pc", position: 'relative', top: "-18pc", left: "45pc"}}></Image>
                                <Text sx={{position: 'relative', top: '-18pc', left: '46pc'}}> Parfum's </Text>
                                <Image src={SexyCars} width={100} height={100} alt="cars" sx={{borderRadius: "20pc", position: 'relative', top: "-24pc", left: "59pc"}}></Image>
                                <Text sx={{position: 'relative', top: '-24pc', left: '58pc'}}> Luxury & Sports Cars </Text>
                                <Alliance></Alliance>
                                <Windowframe></Windowframe>
                                <LimitedEditionPen></LimitedEditionPen>
                                <Fragance></Fragance>
                                <Cars></Cars>
                            </ModalBody>
                        </ModalContent>
                    </ModalOverlay>
                </Modal>
                <Deals></Deals>
                <Gamefication_Tour></Gamefication_Tour>
            </Box>
        </>
    )
}

function Alliance(){

    const {isOpen, onOpen, onClose} = useDisclosure();
    return(<>
         <IconButton icon={<Handshake></Handshake>} onClick={onOpen} variant={'none'} sx={{position: 'relative', top: "-9.5pc", left: "40pc", color:"black", bg: "transparent"}}></IconButton>
         <Modal isOpen={isOpen} onClose={onClose} size={'lg'} height={'50pc'}>
            <ModalOverlay></ModalOverlay>
            <ModalContent>
                <ModalHeader> ♚ Strategic Alliance ♕ </ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                <ModalBody>
                    <Box>
                        <Text width={'10pc'} position={'relative'} left={'5pc'}> Fusion of Ideas: Alliances that Ignite </Text>
                        <Coterie></Coterie>
                        <Text width={'10pc'} position={'relative'} left={'15pc'}> Voices Unplugged: Insights That Inspire </Text>
                        <Canvass></Canvass>
                    </Box>
                </ModalBody>
            </ModalContent>
         </Modal> 
    </>)
}

function Canvass(){

    const {isOpen, onOpen, onClose} = useDisclosure();

    const [ consigliereEmail, setConsiglierEmail] = useState('')
    const [ consigliereFirst, setConsiglierFirst] = useState('')
    const [ consigliereLast, setConsiglierLast] = useState('')

    const [ guestEmail, setGuestEmail] = useState('')
    const [ guestName, setGuestName] = useState('')

    const [ topic, setTopic] = useState('')
    const [ monetize, setMonetize] = useState('')

    const [ budget, setBudget] = useState('')
    const [ lengthContent, setLengthContent] = useState('')
    const [ payment, setPayment] = useState('')



    const onHandle_CEmail = (event) => {setConsiglierEmail(event.target.value); }
    const onHandle_CFirst = (event) => {setConsiglierFirst(event.target.value); }
    const onHandle_CLast = (event) => {setConsiglierLast(event.target.value); }

    const onHandle_Email = (event) => {setGuestEmail(event.target.value); }
    const onHandle_Name = (event) => {setGuestName(event.target.value); }

    const onHandle_OnAir_Topic = (event) => {setTopic(event.target.value); }
    const onHandle_Monetize_Scheme = (event) => {setMonetize(event.target.value); }

    const onHandle_Budget = (event) => {setBudget(event.target.value); }
    const onHandle_Length_Content = (event) => {setLengthContent(event.target.value); }
    const onHandle_Payment = (event) => {setPayment(event.target.value); }


    const onHandle_Recognition = async() => {

        const collectionRef = collection(getDb(), "EnigmaVoiceLibrary");
                
                    try{
                        await addDoc(collectionRef, {
                        
                           Consigliere_Email: consigliereEmail,
                           consigliere_First: consigliereFirst,
                           consigliere_Last: consigliereLast,

                           Guest_Email: guestEmail,
                           Guest_Name: guestName,

                           OnAir: topic,
                           Monetize: monetize,
                           Budget: budget,
                           Content_Availability: lengthContent,

                           PaymentMode: payment,
                        })

                        alert('We will schedule interview very soon... Please check your email')
                    }catch(error){
                        console.log("Error:", error)
                    }
        }
    

    return(<>
        <IconButton icon={<FaChessKing></FaChessKing>} onClick={onOpen} bg={'transparent'} position={'relative'} top={'0.5pc'} left={'18pc'}></IconButton>    
        <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
            <ModalOverlay></ModalOverlay>
            <ModalContent>
                <ModalHeader> Your Voice, your story  </ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                <ModalBody>
                    <form>
                        <FormControl>
                            <FormLabel> Consigliere Email: </FormLabel>
                            <Input placeholder="Email" type="email" onChange={onHandle_CEmail} focusBorderColor="yellow.600"></Input>
                            <FormLabel> Consigliere First Name: </FormLabel>
                            <Input placeholder="Name" type="text" onChange={onHandle_CFirst} focusBorderColor="yellow.600"></Input>
                            <FormLabel> Consigliere Last Name: </FormLabel>
                            <Input placeholder="Last Name" type="text" onChange={onHandle_CLast} focusBorderColor="yellow.600"></Input>
                            <FormLabel> Guest Name: </FormLabel>
                            <Input placeholder="Name" type="text" onChange={onHandle_Email} focusBorderColor="yellow.600"></Input>
                            <FormLabel> Guest Email: </FormLabel>
                            <Input placeholder="Email" type="email" onChange={onHandle_Name} focusBorderColor="yellow.600"></Input>
                            <FormLabel> Choose your topic </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_OnAir_Topic} focusBorderColor="yellow.600">
                                    <option> General </option> 
                                    <option> Innovation </option>
                                    <option> Business </option>
                                    <option> Politics </option>
                                    <option> Economics & consumer behaviour </option>
                                    <option> Blockchain & Bitcoin </option>
                                    <option> AI </option>
                                    <option> Chess </option>
                                    <option> Luxury Market </option>
                                    <option> Psychology </option>
                                    <option> Philosphy </option>
                                    <option> Real Estate </option>
                                </Select>
                             </Stack>
                             <FormLabel> Choose your Monetize </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_Monetize_Scheme} focusBorderColor="yellow.600">
                                    <option> Finanical Sponsorship </option> 
                                    <option> In Kind Sponsorship </option>
                                    <option> Media Sponsorship </option>
                                    <option> Promotional Sponsorship </option>
                                    <option> Public Relation </option>
                                    <option> Events </option>
                                    <option> Advertistment </option>
                                    <option> Competition </option>
                                    <option> Brand partnerhip </option>
                                    <option> Philanthropy </option>
                                </Select>
                             </Stack>
                             <FormLabel> Budget: </FormLabel>
                             <Input placeholder="Budget" type="number" onChange={onHandle_Budget} focusBorderColor="yellow.600"></Input>
                             <FormLabel> Choose Length of your content  </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_Length_Content} focusBorderColor="yellow.600">
                                    <option> 12 hours </option> 
                                    <option> 3 days </option>
                                    <option> 1 week </option>
                                    <option> 14 days </option>
                                </Select>
                             </Stack>
                             <FormLabel> Choose payment method  </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_Payment} focusBorderColor="yellow.600">
                                    <option> Bitcoin </option> 
                                    <option> Bank wire </option>
                                    <option> Ethereum </option>
                                </Select>
                             </Stack>
                             <IconButton icon={<FaMicrophone></FaMicrophone>} onClick={onHandle_Recognition} bg={'transparent'} color={'yellow.600'} position={'relative'} left={'15pc'}></IconButton>
                        </FormControl>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>)
}

function Coterie(){

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [ consigliereEmail, setConsiglierEmail] = useState('')
    const [ consigliereFirst, setConsiglierFirst] = useState('')
    const [ consigliereLast, setConsiglierLast] = useState('')

    const [ founderEmail, setFounderEmail] = useState('')
    const [ founderName, setFounderName] = useState('')
    const [ directors, setDirectors] = useState(0)


    const [ companyName, setCompanyName] = useState('')
    const [ revenue, setReveune] = useState('')
    const [ synergy, setSynergy] = useState('')

    const [ mergerType, setMergerType] = useState('')
    const [ cStructure, setCStructure] = useState('')
    const [ plan, setPlan] = useState('')

    const [ tatics, setTatics] = useState('')


    const onHandle_CEmail = (event) => {setConsiglierEmail(event.target.value); }
    const onHandle_CFirst = (event) => {setConsiglierFirst(event.target.value); }
    const onHandle_CLast = (event) => {setConsiglierLast(event.target.value); }

    const onHandle_Email = (event) => {setFounderEmail(event.target.value); }
    const onHandle_Name = (event) => {setFounderName(event.target.value); }

    const onHandle_Board_Members = (event) => {setDirectors(event.target.value); }
    const onHandle_Company_Name = (event) => {setCompanyName(event.target.value); }
    const onHandle_Revenue = (event) => {setReveune(event.target.value); }

    const onHandle_Synergy = (event) => {setSynergy(event.target.value); }
    const onHandle_MergerType = (event) => {setMergerType(event.target.value); }

    const onHandle_Coporate_Structure = (event) => {setCStructure(event.target.value); }
    const onHandle_Plan = (event) => {setPlan(event.target.value); }
    const onHandle_MA_Tactics = (event) => {setTatics(event.target.value); }

    const onHandle_RealChess = async() => {
    
            const collectionRef = collection(getDb(), "EnigmaMABoard");
                
                    try{
                        await addDoc(collectionRef, {
                        
                           Consigliere_Email: consigliereEmail,
                           consigliere_First: consigliereFirst,
                           consigliere_Last: consigliereLast,

                           Founder_Email: founderEmail,
                           Founder_Name: founderName,

                           Directors: directors,
                           CompnyName: companyName,
                           Revenue: revenue,
                           Synergy: synergy,

                           Merger: mergerType,
                           Structure: cStructure,
                           Plan: plan,
                           Tatics: tatics,
                        })

                        alert('We will schedule interview very soon... Please check your email')
                    }catch(error){
                        console.log("Error:", error)
                    }
        }

    return(<>
         <IconButton icon={<FaChessQueen></FaChessQueen>} onClick={onOpen} bg={'transparent'} position={'relative'} top={'0.5pc'} left={'8pc'}></IconButton>
         <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
            <ModalOverlay></ModalOverlay>
            <ModalContent>
                <ModalHeader position={'relative'} top={'1pc'}> ♜ Coterie: Uniting Voices, Empowering Leaders ♔ </ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                <ModalBody>
                    <form>
                        <FormControl>
                            <FormLabel> Consigliere Email: </FormLabel>
                            <Input placeholder="Email" type="email" onChange={onHandle_CEmail}  focusBorderColor="yellow.600"></Input>
                            <FormLabel> Consigliere First Name: </FormLabel>
                            <Input placeholder="Name" type="text" onChange={onHandle_CFirst} focusBorderColor="yellow.600"></Input>
                            <FormLabel> Consigliere Last Name: </FormLabel>
                            <Input placeholder="Last Name" type="text" onChange={onHandle_CLast} focusBorderColor="yellow.600"></Input>
                            <FormLabel> Founder Name: </FormLabel>
                            <Input placeholder="Name" type="text" onChange={onHandle_Name} focusBorderColor="yellow.600"></Input>
                            <FormLabel> Founder Email: </FormLabel>
                            <Input placeholder="Email" type="email" onChange={onHandle_Email} focusBorderColor="yellow.600"></Input>
                            <FormLabel> Board of Directors: </FormLabel>
                            <Input placeholder="2" type="number" onChange={onHandle_Board_Members} focusBorderColor="yellow.600"></Input>
                            <FormLabel> Company Name </FormLabel>
                            <Input placeholder="Company Name" type="text" onChange={onHandle_Company_Name} focusBorderColor="yellow.600"></Input>
                            <FormLabel> Yearly Revenue in Profit </FormLabel>
                            <Input placeholder="revenue" type="number" onChange={onHandle_Revenue} focusBorderColor="yellow.600"></Input>
                            <FormLabel> Choose your synergy based on your need or challenge ?  </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_Synergy} focusBorderColor="yellow.600">
                                    <option> Finanical Synergy </option> 
                                    <option> Operation Synergy </option>
                                </Select>
                             </Stack>
                             <FormLabel> Choose your merger type?  </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_MergerType} focusBorderColor="yellow.600">
                                    <option> Horizontal </option> 
                                    <option> Vertical </option>
                                    <option> Market-extension </option> 
                                    <option> Product-extension </option>
                                    <option> Conglomerate </option>
                                </Select>
                             </Stack>
                             <FormLabel> Choose your current structure?  </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_Coporate_Structure} focusBorderColor="yellow.600">
                                    <option> Private Limited / LLC [Private] </option> 
                                    <option> LLP [Partnership] </option>
                                    <option> S-Coporation [Managing Director] </option> 
                                    <option> C-Coporation [Board of Directors] </option>
                                </Select>
                             </Stack>
                             <FormLabel> Choose your 5 year plan?  </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_Plan} focusBorderColor="yellow.600">
                                    <option> IPO </option> 
                                    <option> LBO </option>
                                    <option> sell at Private Equity  </option> 
                                    <option> Reserve IPO </option>
                                </Select>
                             </Stack>
                             <FormLabel> Why your choose company M&A?   </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_MA_Tactics} focusBorderColor="yellow.600">
                                    <option> Activist </option> 
                                    <option> Another Company Bid offer </option>
                                    <option> Restructuring  </option> 
                                    <option> Our Company offer Bid </option>
                                    <option> None </option>
                                </Select>
                             </Stack>
                             <IconButton icon={<FaChessBoard></FaChessBoard>} onClick={onHandle_RealChess} position={'relative'} top={'0.2pc'} left={'13pc'} color={'yellow.600'} bg={'transparent'}></IconButton>
                        </FormControl>
                    </form>
                </ModalBody>
            </ModalContent>
         </Modal>
    </>)
}