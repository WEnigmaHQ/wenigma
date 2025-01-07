import { Fade,Heading, IconButton, useDisclosure, AspectRatio, Card, CardBody, Box, Text, FormControl, FormLabel, Input, FormHelperText, Stack, Select, Image, Popover, PopoverTrigger, PopoverContent, PopoverBody } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { PiCar, PiCurrencyCircleDollar, PiInvoice, PiSteeringWheel } from "react-icons/pi";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { VerifiedUser, CarRental } from "@mui/icons-material";
import getDb from "./FirestoreSDK";
import { addDoc, collection, getDocs,doc, updateDoc } from "firebase/firestore";
import { BsDatabaseAdd, BsDatabaseFillAdd } from "react-icons/bs";
export default function Cars(){

    const { isOpen, onToggle } = useDisclosure();

    return(<>
        <IconButton icon={<CarRental></CarRental>} onClick={onToggle} variant={'none'} sx={{position: 'relative', top: "-475.5pc", left: "35pc", color:"black", bg: "transparent"}}></IconButton>
        <Fade in={isOpen}>
                    <Box p='40px' color='white' mt='4' bg='teal.500' rounded='md' shadow='md' sx={{position: 'relative', top: '-468pc', height: 'auto', borderRadius: '2pc'}}>
                        <Add_Bad_Boys></Add_Bad_Boys>
                        <Checkout></Checkout>
                    </Box>
        </Fade>
    </>)
}

function Add_Bad_Boys(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [ email, setEmail] = useState('')
    const [ company, setCompany] = useState('')
    const [ product, setProduct] = useState('')
    const [ engine, setEngine] = useState('')
    const [ hp, setHP] = useState(0)
    const [ displacement, setDisplacement] = useState(0)
    const [ torque, setTorque] = useState(0)
    const [ sec, setSec] = useState(0)
    const [ speed, setSpeed] = useState(0)
    const [ transmission, setTransmission] = useState('')
    const [ exterior, setExterior] = useState('')
    const [ interior, setInterior] = useState('')
    const [ picture, setPicture] = useState('')
    const [ price, setPrice] = useState(0)
    const [ saftey, setSaftey] = useState('')
    const [ sales, setSales] = useState('')
    const [ rarity, setRarity] = useState('')
    const [ verfied, setVerfied] = useState(false)
    const [ DOCID, setDOCID] = useState('')
    const [ txsStatus, setTxsStatus ] = useState('')
    const [ cardholderHistory, setCardHolderHistory] = useState([])


    const onHandle_Email = (event) => {setEmail(event.target.value); }
    const onHandle_Company = (event) => {setCompany(event.target.value); }
    const onHandle_Product = (event) => {setProduct(event.target.value); }
    const onHandle_Engine = (event) => {setEngine(event.target.value); }

    const onHandle_HP = (event) => {setHP(event.target.value); }
    const onHandle_Torque = (event) => {setTorque(event.target.value); }
    const onHandle_Seconds = (event) => {setSec(event.target.value); }
    const onHandle_Speed = (event) => {setSpeed(event.target.value); }
    
    const onHandle_Transmission = (event) => {setTransmission(event.target.value); }
    const onHandle_Exterior = (event) => {setExterior(event.target.value); }
    const onHandle_Interior = (event) => {setInterior(event.target.value); }
    const onHandle_Picture = (event) => {setPicture(event.target.value); }

    const onHandle_Price = (event) => {setPrice(event.target.value); }
    const onHandle_Saftey = (event) => {setSaftey(event.target.value); }
    const onHandle_Rare = (event) => {setRarity(event.target.value); }
    const onHandle_SalesType = (event) => {setSales(event.target.value); }
    const onHandle_Displacement = (event) => {setDisplacement(event.target.value); }

    const onHandle_EmailQuery_if_exist = async() => {
    
            try{
    
                (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                    
                    console.log('Email : ',doc.data().Email, email); 
                       if ((doc.data().Email === email)){ setDOCID(doc.id); console.log('document reference: ',DOCID); setVerfied(true); setTxsStatus(doc.data().status);  console.log('status: ',txsStatus);  }
                })
            
            }catch(error){
                console.log('error', error)
            }
    
    }

    const Sale_Car_Specs = async() => { 
            
            const collectionRef = collection(getDb(), "ExclusiveCars");
    
            try{
    
                await addDoc(collectionRef, {
    
                    CompanyName: company,
                    ProductName: product,
                    Engine: engine,
                    HP: hp,
                    Displacement: displacement,
                    Torque: torque,
                    mph: sec,
                    Price:price,
                    Exterior: exterior,
                    Interior: interior,
                    Picture_url: picture,
                    TopNotchSpeed: speed,
                    SalesType: sales,
                    Specaility: rarity,
                    Safety: saftey,
                    Transmission: transmission
                })
                alert('Your Exclusive car added in our record. Soon you will get profit on your car ')
            }catch(error){
                console.log('document status ?', error);
            }
    
            cardholderHistory.push({ItemName: name, Rare: rarity , Price: price, Sales: sales})
            setCardHolderHistory(cardholderHistory)
    
            const docRef = doc(getDb(), "ExclusiveMembership",DOCID);
                
                await updateDoc(docRef, {
    
                    TransactionHistory: cardholderHistory,
                })
    }
        
    

    return(<>
        <IconButton icon={<CarRental></CarRental>} onClick={onOpen} position={'relative'} left={'20pc'} bg={'transparent'} color={'white'}></IconButton>
        <Text position={'relative'} left={'25pc'} top={'-1.8pc'}> "Unleash Your Inner Bad Boy."</Text>
        <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
            <ModalOverlay></ModalOverlay>
            <ModalContent>
                <ModalHeader color={'yellow.600'}> Make good profit on your bad boys ` $ 🏎️ </ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                <ModalBody>
                    <form>
                        <FormControl>
                            <FormLabel> Your email </FormLabel>
                            <Input placeholder="Email" type="email" focusBorderColor="yellow.600" onChange={onHandle_Email}></Input>
                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} left={'26.5pc'} color={ verfied ? 'green.600' : 'red.600'} bg={'transparent'}></IconButton>
                            { txsStatus === 'verified' ? '' : <FormHelperText> Your membership is not active yet </FormHelperText>}
                            { txsStatus === 'verified' ? <Box position={'relative'} top={'-1pc'}> 
                            <FormLabel> Choose your bad boys </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_Company} focusBorderColor="yellow.600">
                                    <option> Rolls-Royce </option> 
                                    <option> Audi </option>
                                    <option> Porsche </option>
                                    <option> Bentley </option>
                                    <option> Ferrari </option>
                                    <option> Lamborghini </option>
                                    <option> Aston Martin </option>
                                    <option> Jaguar </option>
                                    <option> Maserati </option>
                                    <option> Pagani </option>
                                    <option> Koenigsegg </option>
                                    <option> Tesla </option>
                                    <option> Bugatti </option>
                                    <option> Alfa Romeo </option>
                                    <option> Maybach </option>
                                    <option> McLaren </option>
                                </Select>
                             </Stack>
                             <FormLabel> Product name </FormLabel>
                             <Input placeholder="Ghost" type="text" onChange={onHandle_Product} focusBorderColor="yellow.600"></Input>
                             <FormLabel> Choose Engine </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_Engine} focusBorderColor="yellow.600">
                                    <option> V6 </option> 
                                    <option> V8 </option>
                                    <option> V12 </option>
                                    <option> Turbo charge </option>
                                    <option> Electric </option>
                                    <option> Performance-tuned </option>
                                </Select>
                             </Stack>
                             <FormLabel> Add Horsepower </FormLabel>
                             <Input placeholder="200hp" type="number" onChange={onHandle_HP} focusBorderColor="yellow.600"></Input>
                             <FormLabel> Add Displacement </FormLabel>
                             <Input placeholder="2.0 Litre" type="number" onChange={onHandle_Displacement} focusBorderColor="yellow.600"></Input>
                             <FormLabel> Add torque </FormLabel>
                             <Input placeholder="400 lb-ft" type="number" onChange={onHandle_Torque} focusBorderColor="yellow.600"></Input>
                             <FormLabel> Add 0-60mph </FormLabel>
                             <Input placeholder="4.2 sec" type="text" onChange={onHandle_Seconds} focusBorderColor="yellow.600"></Input>
                             <FormLabel> Choose Top Speed </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_Speed} focusBorderColor="yellow.600">
                                    <option> 220 </option> 
                                    <option> 250 </option>
                                    <option> 275 </option>
                                    <option> 300 </option>
                                    <option> 320 </option>
                                    <option> 350 </option>
                                    <option> 375 </option>
                                    <option> 400 </option>
                                    <option> 422 </option>
                                </Select>
                             </Stack>
                             <FormLabel> Choose Transmission Type </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_Transmission} focusBorderColor="yellow.600">
                                    <option> Automatic AT </option> 
                                    <option> Manual </option>
                                    <option> Dual cutch DCT </option>
                                    <option> Continously Variable CVT </option>
                                    <option> Semi automatic SAT </option>
                                    <option> Tiptronic TT </option>
                                    <option>Light speed Transmission LST </option>
                                </Select>
                             </Stack>
                             <FormLabel> Add Car Exterior Video </FormLabel>
                             <Input placeholder="exterior url" type="url" onChange={onHandle_Exterior} focusBorderColor="yellow.600"></Input>
                             <FormLabel> Add Car Interior Video </FormLabel>
                             <Input placeholder="interior url" type="url" onChange={onHandle_Interior} focusBorderColor="yellow.600"></Input>
                             <FormLabel> Add Car Picture </FormLabel>
                             <Input placeholder=" picture url" type="url" onChange={onHandle_Picture} focusBorderColor="yellow.600"></Input>
                             <FormLabel> Add Saftey Mechanism </FormLabel>
                             <Input placeholder="saftey" type="text" onChange={onHandle_Saftey} focusBorderColor="yellow.600"></Input>
                             <FormLabel> Price </FormLabel>
                             <Input placeholder="2000000" type="number" onChange={onHandle_Price} focusBorderColor="yellow.600"></Input>
                             <FormLabel> Choose Sales Type </FormLabel>
                             <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_SalesType} focusBorderColor="yellow.600">
                                    <option> Private Sales </option> 
                                    <option> Auction </option>
                                    <option> Exchange </option>
                                </Select>
                             </Stack>
                             <FormLabel> Add Speciality </FormLabel>
                                <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_Rare} focusBorderColor="yellow.600">
                                    <option> Limited Edition  </option> 
                                    <option> Celebrity Ownership </option>
                                    <option> Restoration Quality </option>
                                    <option> Signature Models </option>
                                    <option> Unique Color Options </option>
                                    <option> Historical Significance </option>
                                    <option> Provenance Documentation </option>
                                    <option> Rare Features and Options </option>
                                </Select>
                                </Stack>
                             <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={Sale_Car_Specs} color={'green.600'} position={'relative'} top={'0.5pc'} left={'10pc'} bg={'transparent'}></IconButton>
                            </Box>: ''}
                        </FormControl>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>)
    
}

function Checkout(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ exclusiveCar, setExclusiveCar ] = useState([])
    const [ SEARCHQUERY, setSEARCHQUERY ] = useState('')
    const [ SEARCHBRANDQUERY, setSEARCHBRANDQUERY ] = useState('')
    const [ SEARCHADDITIONALQUERY, setSEARCHADDITIONALQUERY ] = useState('')

    useEffect(() => {
    
            const Discover_Exclusive_cars = async() =>{
    
                try{
    
                    (await getDocs(collection(getDb(), "ExclusiveCars"))).forEach((doc)=>{
                        
                           if (doc.data().CompanyName !== '' && exclusiveCar.length <= doc.data.length){ 
                                exclusiveCar.push(doc.data()); 
                                
                                console.log("Car :",exclusiveCar.length, doc.data.length)
                                 setSEARCHQUERY(doc.data().ProductName); 
                                 setSEARCHADDITIONALQUERY(doc.data().Specaility);
                                 setSEARCHBRANDQUERY(doc.data().CompanyName);
                                 console.log('Brand > :', SEARCHQUERY, SEARCHADDITIONALQUERY, SEARCHBRANDQUERY)
                           }

                           if (exclusiveCar.length <= doc.data.length) {

                            setExclusiveCar(exclusiveCar);
                            console.log('Brand >> :', SEARCHQUERY, SEARCHADDITIONALQUERY)
                           }
                    })
                
                }catch(error){
                    console.log('error', error)
                }
            }
            
            Discover_Exclusive_cars();
        }, [])

    return(<>
        <IconButton icon={<PiCurrencyCircleDollar></PiCurrencyCircleDollar>} onClick={onOpen} position={'relative'} left={'20pc'} bg={'transparent'} color={'white'}></IconButton>
        <Text position={'relative'} left={'25pc'} top={'-1.8pc'}> "Power in exclusivness "</Text>
        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
            <ModalOverlay></ModalOverlay>
            <ModalContent>
                <ModalHeader color={'yellow.600'}>
                    <Heading color={'yellow.600'} as={'h1'} position={'relative'} left={'22pc'}> Allure your Power </Heading> <Image src="https://i0.wp.com/www.thegodjourney.com/wp-content/uploads/2017/10/power.jpg?fit=900%2C471&ssl=1" alt="allurethepower" blockSize={'200px'} position={'relative'} left={'20pc'} top={'2pc'} borderRadius={'2pc'}></Image>
                    <Text width={'20pc'}> WHERE THE WILLINGNESS IS GREAT, DIFFCULTIES CANNOT BE GREAT </Text>
                    <Text width={'20pc'} position={'relative'} left={'50pc'} top={'-5pc'}> Niccolo Machiavelli </Text>
                </ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                <ModalBody>
                    { exclusiveCar.map((car, index) => (
                        <Card>
                            <CardBody>
                                <Text key={index}> Brand : {car.CompanyName} </Text>
                                <Text key={index} position={'relative'} top={'-1.5pc'} left={'12pc'}> Model: {car.ProductName} </Text>
                                <Text key={index} position={'relative'} top={'-3pc'} left={'25pc'}> Engine: {car.Engine} </Text>
                                <Text key={index} position={'relative'} top={'-4.5pc'} left={'40pc'}> HorsePower: {car.HP} </Text>
                                
                                <Text key={index} position={'relative'} top={'-6pc'} left={'52pc'}> SaleType: {car.SalesType} </Text>
                                <Text key={index} position={'relative'} top={'0pc'} left={'0pc'}> Saftey: {car.Safety} </Text>
                                <Text key={index} position={'relative'} top={'-1.5pc'} left={'25pc'}> Price: {car.Price} </Text>
                                <Text key={index} position={'relative'} top={'-3pc'} left={'40pc'}> Liter: {car.Displacement} </Text>
                                {/* <Text key={index} position={'relative'} top={'-4.5pc'} left={'52pc'}> SaleType: {car.Torque} </Text> */}

                                <Text key={index} position={'relative'} top={'0pc'} left={'0pc'}> Rare: {car.Specaility} </Text>
                                <Text key={index} position={'relative'} top={'-1.5pc'} left={'15pc'}> Top Speed: {car.TopNotchSpeed} </Text>
                                <Text key={index} position={'relative'} top={'-3pc'} left={'25pc'}> Torque : {car.Torque} </Text>
                                <Text key={index} position={'relative'} top={'-4.5pc'} left={'40pc'}> Transmission: {car.Transmission} </Text>
                                <Text key={index} position={'relative'} top={'-6pc'} left={'65pc'}> 0-60mph: {car.mph} </Text>
                                <Popover>
                                    <PopoverTrigger>
                                        <IconButton icon={<PiCar></PiCar>}bg={'transparent'} position={'relative'} top={'-20pc'} color={'yellow.600'} left={'62pc'}></IconButton>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverBody>
                                            <AspectRatio maxW='560px' ratio={1}>
                                                <iframe  width="560" height="315" title='exterior video' src={car.Exterior} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen />
                                            </AspectRatio>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                 <Popover>
                                    <PopoverTrigger>
                                        <IconButton icon={<PiSteeringWheel></PiSteeringWheel>}bg={'transparent'} position={'relative'} top={'-20pc'} color={'yellow.600'} left={'66pc'}></IconButton>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverBody>
                                            <AspectRatio maxW='560px' ratio={1}>
                                                <iframe width="560" height="315" title='interior video' src={car.Interior} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen />
                                            </AspectRatio>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                <Complete_Checkout product={SEARCHQUERY} company={SEARCHBRANDQUERY} rare={SEARCHADDITIONALQUERY}></Complete_Checkout>
                            </CardBody>
                        </Card>
                    ))}
                </ModalBody>
            </ModalContent>
        </Modal>
    </>)
}

function Complete_Checkout({product,company, rare}){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ email, setEmail] = useState('')
    const [ verfied, setVerfied] = useState(false)
    const [ DOCID, setDOCID] = useState('')
    const [ txsStatus, setTxsStatus ] = useState('')
    const [ transactionHistory, setTransactionHistory ] = useState([])


     const onHandle_Email = (event) => {setEmail(event.target.value); }
     const onHandle_EmailQuery_if_exist = async() => {

    
            try{
    
                (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                    
                    console.log('Email : ',doc.data().Email, email); 
                       if ((doc.data().Email === email)){ setDOCID(doc.id); console.log('document reference: ',DOCID); setVerfied(true); setTxsStatus(doc.data().status);  console.log('status: ',txsStatus);  }
                })
            
            }catch(error){
                console.log('error', error)
            }
    
    }

    const onHandle_Checkout = async() => {

        console.log('Product :', product, company,  rare)

        try{
        
                     (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                    
                        if (doc.data().Email === email){
                           setDOCID(doc.id);
                        }
                        if ((doc.data().Email !== email)){ alert('Sorry! This Email is not recognize')}
                    })

                    transactionHistory.push({Role: 'buyer',Item: 'car', CompanyName: company, Model: product, Rare: rare});
                    setTransactionHistory(transactionHistory);
        
                    console.log('history:', transactionHistory);
                    const docRef = doc(getDb(), "ExclusiveMembership",DOCID);
                                
                    await updateDoc(docRef, {
                                        
                           TransactionHistory: transactionHistory,
                    })
                    alert('Checkout complete.. Check your Email')
            }catch(error){
                console.log("Error :", error);
            }
    }
    return(<>
        <IconButton onClick={onOpen} icon={<PiInvoice></PiInvoice>} bg={'transparent'} color={'green'} position={'relative'} top={'-12.5pc'} left={'57pc'}></IconButton>
        <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
            <ModalOverlay></ModalOverlay>
            <ModalContent>
                <ModalBody>
                    <form>
                        <FormControl>
                        <FormLabel> Email For Verification </FormLabel>
                        <Input placeholder="Email" type="email" focusBorderColor="yellow.600" onChange={onHandle_Email}></Input>
                        <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} position={'relative'} top={'-2.5pc'} left={'26.5pc'} color={ verfied ? 'green.600' : 'red.600'} bg={'transparent'}></IconButton>
                            { txsStatus === 'verified' ? <IconButton onClick={onHandle_Checkout} icon={<BsDatabaseFillAdd></BsDatabaseFillAdd>} bg={'transparent'} color={'yellow.600'} position={'relative'} top={'-2.5pc'} left={'21.5pc'}></IconButton> : <FormHelperText> Your membership is not active yet </FormHelperText>}
                        </FormControl>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>)
}