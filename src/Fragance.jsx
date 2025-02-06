import { Fade,Heading, IconButton, useDisclosure, Tag ,Card, CardBody, Box, Text, FormControl, FormLabel, Input, FormHelperText, Stack, Select, RadioGroup, Radio, Image } from "@chakra-ui/react";
import { TbPerfume } from "react-icons/tb";
import { useState, useEffect } from "react";
import { PiPlusCircle, PiUserCircle } from "react-icons/pi";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { Shop, ShoppingBag, VerifiedUser } from "@mui/icons-material";
import getDb from "./FirestoreSDK";
import { addDoc, collection, getDocs,doc, updateDoc } from "firebase/firestore";
import { BsDatabaseFillAdd } from "react-icons/bs";


export default function Fragance(){

    const {isOpen, onOpen, onClose} = useDisclosure();

    return(<>
        <IconButton icon={<TbPerfume></TbPerfume>} onClick={onOpen} variant={'none'} sx={{position: 'relative', top: "-9.5pc", left: "20pc", color:"brown", bg: "transparent"}}></IconButton> 
        <Modal isOpen={isOpen} onClose={onClose} size={'md'} height={'50pc'}>
            <ModalOverlay></ModalOverlay>
            <ModalContent>
                <ModalHeader color={'yellow.600'}> Limited Edition Fragances  </ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                <ModalBody>
                        <NewArrivalFragancee></NewArrivalFragancee>
                        <FraganceMarketplace></FraganceMarketplace>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>)
}

function NewArrivalFragancee(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [ email, setEmail] = useState('')
    const [ bottleSize, setBottleSize] = useState('')
    const [ aroma, setAroma] = useState('')
    const [ picture, setPicture] = useState('')
    const [ name, setName] = useState('')
    const [ price, setPrice] = useState(0)
    const [ barcode, setBarcode] = useState(0)
    const [ brand, setBrand] = useState('')
    const [ prepare, setPrepare] = useState('')
    const [ payment, setPayment] = useState('')
    const [ deliver, setDeliver] = useState('')
    const [ notes, setNotes] = useState('')
    const [ quantity, setQuantity] = useState('')
    const [ verfied, setVerfied] = useState(false)
    const [ DOCID, setDOCID] = useState('')
    const [ fees, setFees] = useState(false)
    const [ txsStatus, setTxsStatus ] = useState('')
    const [ cardholderHistory, setCardHolderHistory] = useState([])

    const onHandle_EmailQuery_if_exist = async() => {

        try{

            (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                
                   if ((doc.data().Email === email)){ 
                    setDOCID(doc.id); 
                    console.log('document reference: ',DOCID); 
                    setVerfied(true); 
                    setTxsStatus(doc.data().status);  console.log('status: ',txsStatus);  }
            })
        
        }catch(error){
            console.log('error', error)
        }

    }

    const onHandle_Email = (event) => {setEmail(event.target.value); }
    const onHandle_Size = (event) => {setBottleSize(event.target.value); }
    const onHandle_Aroma = (event) => {setAroma(event.target.value); }
    const onHandle_Picture = (event) => {setPicture(event.target.value); }
    const onHandle_Name = (event) => {setName(event.target.value); }
    const onHandle_Price = (event) => {setPrice(event.target.value); }
    const onHandle_Brand = (event) => {setBrand(event.target.value); }
    const onHandle_Barcode = (event) => {setBarcode(event.target.value); }
    const onHandle_Payment = (event) => {setPayment(event.target.value); }
    const onHandle_Prepare = (event) => {setPrepare(event.target.value); }
    const onHandle_Deliver = (event) => {setDeliver(event.target.value); }
    const onHandle_Notes = (event) => {setNotes(event.target.value); }
    const onHandle_Quantity = (event) => {setQuantity(event.target.value); }
    const onHandle_Fees = (fees) => {setFees(fees); }


    const Add_Fragance_Bottle = async() => { 
        
        const collectionRef = collection(getDb(), "ExclusivePerfums");

        try{

            await addDoc(collectionRef, {

                FraganceName: name,
                Quanlity: quantity,
                Bottle: bottleSize,
                Aroma: aroma,
                Brand_name: brand,
                Barcode: barcode,
                Price: price,
                Fees: fees,
                Notes:notes,
                Deliver_Days: deliver,
                Prepare_BY: prepare,
                Picture_url: picture,
            })
            alert('Perfume added in our record ')
        }catch(error){
            console.log('document status ?', error);
        }

        cardholderHistory.push({ItemName: name, Quantity: quantity, Price: price})
        setCardHolderHistory(cardholderHistory)

        const docRef = doc(getDb(), "ExclusiveMembership",DOCID);
            
            await updateDoc(docRef, {

                TransactionHistory: cardholderHistory,
            })
    }
    

    return(<>
        <Text position={'relative'} top={'2pc'} left={'6pc'} > Discover Allure in Every Drop </Text>
        <IconButton icon={<PiPlusCircle></PiPlusCircle>} onClick={onOpen} bg={'transparent'} position={'relative'} left={'2pc'} top={'0pc'} color={'blue'}></IconButton>
        <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> <Heading as={'h3'} color={'yellow.600'}> Discover Allure in Every Drop </Heading> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
                <FormControl>
                    <FormLabel> Your Email: </FormLabel>
                    <Input placeholder="Email" type="email" focusBorderColor="yellow.600" onChange={onHandle_Email}></Input>
                    <IconButton icon={<VerifiedUser></VerifiedUser>} position={'relative'} top={'-2.5pc'} left={'26.5pc'} color={ verfied ? 'green.600' : 'red.600'} bg={'transparent'} onClick={onHandle_EmailQuery_if_exist}></IconButton>
                    { txsStatus === 'verified' ? '' : <FormHelperText> Your membership is not active yet </FormHelperText>}
                    { txsStatus === 'verified' ?  <Box position={'relative'} top={'-1pc'}> <FormLabel> Bottle Size </FormLabel>
                        <Stack spacing={2}>
                            <Select variant={'filled'} placeholder="Select " onChange={onHandle_Size} focusBorderColor="yellow.600">
                                <option> 10ml </option>
                                <option> 15ml </option>
                                <option> 20ml </option>
                                <option> 50ml </option>
                                <option> 100ml </option>
                                <option> 150ml </option>
                                <option> 200ml </option>
                                <option> gift </option>
                            </Select>
                        </Stack>
                        <FormLabel> Aroma </FormLabel>
                        <Stack spacing={2}>
                            <Select variant={'filled'} placeholder="Select " onChange={onHandle_Aroma}  focusBorderColor="yellow.600">
                                <option> Floral [Rose, Jasmine, Lilly, Peony] Romance </option>
                                <option> Fruity [Apple, Peach, Berry] Vibrant </option>
                                <option> Citius [Lemon, Orange, Bergamot, Grapefruit] Refreshing </option>
                                <option> Woody  [Sandalwood, Cedar, Vetiver, Patchouli] Warm </option>
                                <option> Oriental [Vanilla, Amber, Spices, Resins] Sexy </option>
                                <option> Gourmand [Chocolate, Caramel, Vanilla, Coffee] Comfort </option>
                                <option> Green  [Grass, Leaves, Herbs, Tea] Natural </option>
                                <option> Aquatic [Sea breeze, Water lily, Cucumber] Fresh </option>
                                <option> Spicy [Cinnamon, Nutmeg, Cardamom, Pepper] Warm </option>
                                <option> Chypre [Oakmoss, Bergamot, Patchouli, Labdanum] Earth </option>
                            </Select>
                        </Stack>
                        <FormLabel> Picture: </FormLabel>
                        <Input placeholder="picture url" type="url" focusBorderColor="yellow.600" onChange={onHandle_Picture}></Input>
                        <FormLabel> Fragance Name : </FormLabel>
                        <Input placeholder="name" type="text" focusBorderColor="yellow.600" onChange={onHandle_Name}></Input>
                        <FormLabel> Price: </FormLabel>
                        <Input placeholder="1000 USD" type="number" focusBorderColor="yellow.600" onChange={onHandle_Price}></Input>
                        <FormLabel> Barcode Number: </FormLabel>
                        <Input placeholder="0512345678900" type="number" focusBorderColor="yellow.600" onChange={onHandle_Barcode}></Input>
                        <FormLabel> Brand Name: </FormLabel>
                        <Input placeholder="Dior" type="text" focusBorderColor="yellow.600" onChange={onHandle_Brand}></Input>
                        <FormLabel> Quantity </FormLabel>
                        <Input placeholder="1" type="number" focusBorderColor="yellow.600" onChange={onHandle_Quantity}></Input>
                        <FormLabel> Prepared by </FormLabel>
                        <Stack spacing={2}>
                            <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Prepare}>
                                <option> Local </option>
                                <option> International </option>
                            </Select>
                        </Stack>
                        <FormLabel> Payment accepted </FormLabel>
                        <Stack spacing={2}>
                            <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Payment}>
                                <option> Bitcoin </option>
                                <option> Bank </option>
                                <option> Ethereum </option>
                            </Select>
                        </Stack>
                        <FormLabel> Deliver </FormLabel>
                        <Stack spacing={2}>
                            <Select variant={'filled'} placeholder="Select " focusBorderColor="yellow.600" onChange={onHandle_Deliver}>
                                <option> within a day </option>
                                <option> 5 days </option>
                                <option> 8 days </option>
                                <option> 14 days </option>
                                <option> 30 days </option>
                            </Select>
                        </Stack>
                        <FormLabel> Notes: </FormLabel>
                        <Input placeholder="notes" type="text" onChange={onHandle_Notes}></Input>
                        <FormLabel position={'relative'} top={'0.5pc'}> We collect 10% fees if you want to use our marketplace </FormLabel>
                            <RadioGroup value={fees} onChange={onHandle_Fees}>
                                <Stack direction='row'>
                                    <Radio value='true'> Yes </Radio><br></br>
                                    <Radio value='false'> No </Radio>
                                </Stack></RadioGroup> 
                                <IconButton icon={<BsDatabaseFillAdd></BsDatabaseFillAdd>} color={'teal'} bg={'transparent'} position={'relative'} left={'8pc'} onClick={Add_Fragance_Bottle}></IconButton>
                            </Box> : ''}
                </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>)
}

function FraganceMarketplace(){

    const [ fragance, setFragance ] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ count, setCount ] = useState(0)
    const [ SEARCHFRAGRANCEQUERY, setSEARCHFRAGRANCEQUERY ] = useState('')
    const [ SEARCHFRAGRANCEBOTTLEQUERY, setSEARCHFRAGRANCEBOTTLEQUERY ] = useState('')

    let drop = [];

    useEffect(() => {

        const Discover_Drops = async() =>{

            try{

                (await getDocs(collection(getDb(), "ExclusivePerfums"))).forEach((doc)=>{
                    
                       if (doc.data().FraganceName !== ''){ drop.push(doc.data()); setCount(count+1); setSEARCHFRAGRANCEQUERY(doc.data().FraganceName); setSEARCHFRAGRANCEBOTTLEQUERY(doc.data().Bottle); }
                })

                setFragance(drop)
            
            }catch(error){
                console.log('error', error)
            }
        }
        
        Discover_Drops();
    }, [count])
    return(<>
        <IconButton icon={<Shop></Shop>} onClick={onOpen} position={'relative'} left={'20pc'} bg={'transparent'} top={'1.8pc'} color={'blue'}></IconButton>
        <Text position={'relative'} left={'5pc'} top={'0pc'}> Discover Drops, Curate Your Collection </Text>
        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Exclusivness Aroma </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {fragance.length >= 1 ? 
            <Card>
                <CardBody>
                    {fragance.map((drop, index) => ( <Text key={index}> {drop.FraganceName} </Text>))}
                    {fragance.map((drop, index) => ( <Text key={index} position={'relative'} top={'-1.5pc'} left={'8pc'}> {drop.Price} </Text>))}
                    {fragance.map((drop, index) => ( <Text key={index} position={'relative'} top={'-3pc'} left={'12pc'}> {drop.Bottle} </Text>))}
                    {fragance.map((drop, index) => ( <Text key={index} position={'relative'} top={'-4.5pc'} left={'16pc'}> {drop.Quanlity} </Text>))}
                    {fragance.map((drop, index) => ( <Text key={index} position={'relative'} top={'-6pc'} left={'20pc'}> {drop.Aroma} </Text>))}
                    {fragance.map((drop, index) => ( <Box key={index} position={'relative'} top={'-3.5pc'} left={'20pc'} width={'5pc'} height={'5pc'}> <Image src={drop.Picture_url} alt={drop.FraganceName}></Image> </Box>))}
                    {fragance.map((drop, index) => ( <Text key={index} position={'relative'} top={'-12.5pc'} left={'42pc'}> {drop.Prepare_BY} </Text>))}
                    <Membership_Validation name={SEARCHFRAGRANCEQUERY} size={SEARCHFRAGRANCEBOTTLEQUERY}></Membership_Validation>
                </CardBody>
            </Card>
            : <Card>
                <CardBody color={'yellow.600'}>
                       Fragance's out of stock 
                </CardBody>
              </Card>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>)
}

function Membership_Validation({name, size}){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ email, setEmail ] = useState('')
    const [ DOCID, setDOCID ] = useState('')
    const [ verified, setVerfied ] = useState(false)
    const [ cardholderHistory, setCardHolderHistory] = useState([])
    const [ members, setMembers ] = useState([])
    const [ txsStatus, setTxsStatus ] = useState('')
    

    const onHandle_Email = async(event) => {setEmail(event.target.value);}
    const onHandle_EmailQuery_if_exist = async() => {

        let member = [];
        try{

            (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                
                   if ((doc.data().Email === email && doc.data().level >= 1)){ setDOCID(doc.id); 
                    console.log('document reference: ',DOCID); 
                    setVerfied(true); 
                    member.push(doc.data());
                    setTxsStatus(doc.data().status);
                    console.log('status: ',txsStatus); 
                }
            })

            setMembers(member)
        
        }catch(error){
            console.log('error', error)
        }

    }

    const UpdateHistory = async() => {

       console.log("Query:", name, size)

        try{

             (await getDocs(collection(getDb(), "ExclusivePerfums"))).forEach((doc)=>{
            
                if (doc.data().FraganceName === name && doc.data().Bottle === size){
                   setDOCID(doc.id);
                }
                if ((doc.data().Email !== sellerMail)){ alert('Sorry! This Email is not recognize')}
            })

            const docRef = doc(getDb(), "ExclusivePerfums",DOCID);
                        
            await updateDoc(docRef, {
                                
                    status: 'sold',
                    Email: email,
            })

            alert('Excellent your order place, soon you we will update you')
        }catch(error){
            console.log('error', error)
        }
    }

    return(<>
        <IconButton icon={<PiUserCircle></PiUserCircle>} onClick={onOpen} position={'relative'} top={'-14.5pc'} left={'50pc'} color={'teal'} bg={'transparent'}></IconButton>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
                <FormControl>
                    <FormLabel> Your Email </FormLabel>
                    <Input placeholder="email" type="email" onChange={onHandle_Email}></Input>
                    <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} left={'22.5pc'} bg={'transparent'} color={verified ? 'green.600' :'red.600'}></IconButton>
                    {txsStatus === 'verified' ? '' : <FormHelperText> 'Your member account has not yet active' </FormHelperText>}
                    {txsStatus === 'verified' ? <Box>
                        <Card>
                            <CardBody>
                            {members.map((person, index) => ( <Text key={index}> {person.Name} </Text>))}
                            {members.map((person, index) => ( <Text key={index} position={'relative'} top={'-1.5pc'} left={'7pc'}> {person.Email} </Text>))}
                            {members.map((person, index) => ( <Text key={index} position={'relative'} top={'-3pc'} left={'18pc'}> {person.BitcoinAddress.length >= 26 && person.BitcoinAddress.length < 63  ? <Tag color={'green'}> Bitcoin </Tag> : person.Cardholder ? <Tag> Card Holder </Tag> : 'unknown'} </Text>))}
                            <IconButton onClick={UpdateHistory} icon={<ShoppingBag></ShoppingBag>} position={'relative'} bg={'transparent'} color={'teal'} left={'7pc'}></IconButton>
                            </CardBody>
                        </Card>
                    </Box>: ''}
                </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>)
}