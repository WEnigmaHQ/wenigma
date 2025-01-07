import { Box, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Text, Fade, FormControl, FormLabel, Input, Stack, Select, NumberInputField, NumberInput, NumberIncrementStepper, NumberInputStepper, NumberDecrementStepper, Radio, ModalFooter, FormHelperText, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, PopoverHeader, Popover, RadioGroup, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Spinner, HStack, PinInput, PinInputField, Tabs, TabList, Tab, TabPanels, TabPanel, Skeleton, Card ,CardBody,Tag, Button, CardHeader, Center, Divider, CardFooter, Heading } from "@chakra-ui/react"
import { AddCard, AddShoppingCart, Cancel, CancelOutlined, CheckCircle, Computer, GavelRounded, Preview, Restore, ReviewsTwoTone, Search, Sell, Shop2, ShoppingBagRounded, Timelapse, TimelapseOutlined, VerifiedUser} from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";
import { PiPen, PiSpinnerDuotone } from "react-icons/pi";
import { TbServerBolt, TbTruckReturn } from "react-icons/tb";
import { ethers } from 'ethers';
import { Sha256 } from "@web5/crypto";
import { BsBank, BsDatabaseAdd } from "react-icons/bs";
import { CardContent } from "@mui/material";
import { BiAngry, BiBitcoin, BiLogoBitcoin, BiPlusCircle } from "react-icons/bi";
import { FaEthereum, FaSadCry, FaSadTear, FaSmileBeam, FaSmileWink, FaTruckLoading, FaTruckMoving, FaTruckPickup } from "react-icons/fa";
import axios from "axios";
import getDb from "./FirestoreSDK";
import { addDoc, collection, getDocs,doc, updateDoc } from "firebase/firestore";
import { CheckCircleIcon, ViewIcon } from "@chakra-ui/icons";
import { Shippo } from "shippo";
import { DistanceUnitEnum, WeightUnitEnum } from "shippo";
import * as  EmailValidator  from 'email-validator';

export default function LimitedEditionPen(){

    const { isOpen, onToggle } = useDisclosure();

    return(<> 
            <IconButton icon={<PiPen></PiPen>} variant={'none'} sx={{position: 'relative', top: "-436.9pc", left: "25pc", color:"darkslategrey", bg: "transparent"}} onClick={onToggle}></IconButton>
            <Fade in={isOpen}>
                    <Box p='40px' color='white' mt='4' bg='red.500' rounded='md' shadow='md' sx={{position: 'relative', top: '-430pc', height: 'auto', borderRadius: '2pc'}}>
                        <Create_Contract></Create_Contract>
                    </Box>
            </Fade>
           </>);
}

function Create_Contract(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = useState('')
    const [Pay, setPay] = useState('false')
    const [boast, setBoast] = useState('true')
    const [selectOpt, setSelectedOpt] = useState('')
    const [quanlity, setQuality] = useState(10)
    const [price, setPrice] = useState(1000)
    const [shipment, setShipment] = useState(100)
    const [gdriveUrl, setGDriveUrl] = useState('')
    const [sellerName, setSellerName] = useState('')
    const [sellerAddress, setSellerAddress] = useState('')
    const [sellerCountry, setSellerCountry] = useState('')
    const [sellerMobile, setSellerMobile] = useState('')
    const [sellerMail, setSellerMail] = useState('')
    const [sellerBtcAddress, setSellerBtcAddress] = useState('')
    const [haveMetamask, sethaveMetamask] = useState(true);
    const [isConnected, setIsConnected] = useState(false);
    const [pendingTx, setPendingTx] = useState(1.0);
    const [accountAddress, setAccountAddress] = useState('');
    const [accountBalance, setAccountBalance] = useState(false);
    const [signPetition, setSignPetition] = useState('');
    const [fCollector, setFCollector] = useState('');
    const [isfCollecttxs, setIsFCollectTxs] = useState(false);
    const [isBoasttxs, setIsBoastTxs] = useState(false);
    const [paymentMode, setPaymentMode] = useState('');
    const [txsStatus, setTxsStatus] = useState('');
    const [NewbtcPrice, setNewBtcPrice] = useState(0);
    const [Loading, setLoading] = useState(false);
    const [isRecord, setIsRecord] = useState(false);

       

    const handleValidURL = (event) => {setGDriveUrl(event.target.value); }
    const handleChangeOption = (event) =>{ setSelectedOpt(event.target.value);}
    const handleSellerBitcoinAddress = (event) =>{ setSellerBtcAddress(event.target.value);}
    const handleQuality = (quanlity) => {setQuality(quanlity)}
    const handlePrice = (price) => {setPrice(price);}
    const handleShipment = (shipment) => {setShipment(shipment)}
    const handleName = (event) => {setSellerName(event.target.value)}
    const handleAddress = (event) => {setSellerAddress(event.target.value)}
    const handleCountry = (event) => {setSellerCountry(event.target.value)}
    const handleMobile = (event) => {setSellerMobile(event.target.value)}
    const handleMail = (event) => {setSellerMail(event.target.value)}
    const handleFullSet = (value) => {setValue(value)}
    const handleActive = (Pay) => {setPay(Pay)}
    const handleBoast = (boast) => {setBoast(boast)}

     useEffect(() => {

        const {ethereum} = window;
      
        const checkMetamaskAvailability = async () => {
            if (ethereum) {
              sethaveMetamask(true);
            }else{
              sethaveMetamask(false);
            }
            
          };

        const fetchPrice = async() => {
            
            try{

                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                const bitcoinCoin = response.data.coins.find((coin) => coin.item.id === "bitcoin" || coin.item.name === "Bitcoin");

                if (bitcoinCoin) {
                    console.log("New btc Price:", bitcoinCoin.item.data.price.toFixed(2));
                    setNewBtcPrice(bitcoinCoin.item.data.price.toFixed(2));
                }

            }catch(error){
                console.log('api failed');
            }
        };
        fetchPrice();
          checkMetamaskAvailability();
        }, []);

        useEffect(() => {

            const default_btc = 87420;
            if (NewbtcPrice == 0) {
                setNewBtcPrice (default_btc);
            }

        }, [NewbtcPrice]);


        const onHandleBtcSubmission = async () => {
    
            setLoading(true);

            try {
                    
                    if (Pay && !boast) {
                         
                        await without_boast_btc();
        
                    } else if (Pay && boast) {

                        await with_boast_btc();

                    } else {
                        alert("No option selected");
                    }
                }catch (error) {
                    console.error('Error report', error);
                } finally {
                        setLoading(false);
                }
    
        }
        


        const connectMetamaskHandle = async() => {
            
            try{

                const providers = new ethers.providers.Web3Provider(window.ethereum);

                if (!ethereum) { sethaveMetamask(false); return; }

                const accounts = await ethereum.request({ method: 'eth_requestAccounts', });
                setAccountAddress(accounts[0]);
                setIsConnected(true);

                let balance = await providers.getBalance(accounts[0]);
                let etherBal = await ethers.utils.formatEther(balance);

                let pending_txs = await ethers.utils.formatEther("1000000000000000000");
                const remain = ((pending_txs / 2451.82) * (price * quanlity) + (pending_txs/2451.82) * 300) ;
            
            
                setPendingTx(remain);
                setAccountBalance(etherBal);
            
                const message = [
                    "Please confirm my authentication. As a seller, I fully accept the platform's terms and commit to maintaining client confidentiality and secure transactions. Thank you for your attention.",
                ].join("\n\n");

                const sign = await ethereum.request({method: 'personal_sign', params: [message, accounts[0]]});
                setSignPetition(sign);
                console.log("Invoice : ", remain , "eth");
            
            
                if (selectOpt === '' && (gdriveUrl === '') && (sellerName === '') && (sellerAddress === '') && (sellerCountry === '') && (sellerMail === '') && (sellerMobile === '') &&  !!Pay){
                    alert("Check your credentials && ensure collecting option should be choose :_ ");
                    return;
                }

                if(etherBal == 0.0){
                    alert("You have insufficent balance. Request it from exchange ");
                    return;
                }

                if (Pay && etherBal >= remain ){
                    const tx ={
                        from: '0x55057eb78fDbF783C961b4AAd6A5f8BC60cab44B',
                        to:  accounts[0],
                        value:(remain * 0.1),
                        gasPrice:0x5208
                    };
    
                    const txs = await ethereum.request({method: 'eth_sendTransaction', params: [tx]});
                    console.log("Invoice : ", remain , "eth");
                    console.log('Transaction complete without boast :', txs);
                    setFCollector(txs);
                    setIsFCollectTxs(true);
                    setIsBoastTxs(false);
                    setTxsStatus("accept");
                    setPaymentMode("ethereum");
                    console.log("Data : ", [sellerName, sellerAddress, sellerCountry, sellerMail, sellerMobile, selectOpt, quanlity, price, shipment, value, isBoasttxs, fCollector, pending_txs]); 
                    await create_record();
                }


                    if (Pay && boast && etherBal >= remain ){
                        
                        const tx ={
                            from: '0x55057eb78fDbF783C961b4AAd6A5f8BC60cab44B',
                            to:  accounts[0],
                            value:(remain * 0.2),
                            gasPrice:0x5208
                        };
        
                        const txs = await ethereum.request({method: 'eth_sendTransaction', params: [tx]});
                        console.log("Invoice : ", remain , "eth");
                        console.log('Transaction complete with boast :', txs);
                        setFCollector(txs);
                        setIsBoastTxs(true);
                        isfCollecttxs(true);
                        setTxsStatus("accept");
                        setPaymentMode("ethereum");
                         console.log("Data : ", [sellerName, sellerAddress, sellerCountry, sellerMail, sellerMobile, selectOpt, quanlity, price, shipment, value, isBoasttxs, fCollector, pending_txs]);
                         await create_record();
                    }
            

            }catch(error){
                setIsConnected(false);
            }
        }

        const without_boast_btc = async() =>{  

            const collectionRef = collection(getDb(), "limitedEditionPen");
        
            try{
                await addDoc(collectionRef, {
                
                    listedTYpe: selectOpt,
                    sellerName: sellerName,
                    sellerAddress: sellerAddress,
                    sellerCountry: sellerCountry,
                    sellerMail: sellerMail,
                    sellerMobile: sellerMobile,
                    quanlity: quanlity, 
                    shipment: shipment, 
                    fullSet: value, 
                    Boast: boast, 
                    fees: (price / NewbtcPrice) * quanlity * 0.1, 
                    nonce: (price / NewbtcPrice) * quanlity,
                    bitcoinAddr : sellerBtcAddress,
                    trackerCode: '',
                    trackerExpectedDeliverTime:'',
                    trackerWeight: '',
                    trackerDeliveredState: false,
                    review: '',
                    uplaodLink: gdriveUrl,
                    paymentMode: "btc",
                    txsStatus: "pending",
                    reciptantAddress: 'bc1qn4mes7vrt6gvhhj3l6ldht8cjevvt93uey8zxn',
                })
                setIsRecord(true);
                alert("Transaction complete !");
        
            }catch(error){
            
                console.log('document is not exist?');
            }
        }

        const delay = async (ms) => {
            return new Promise((resolve) => 
            setTimeout(resolve, ms));
        };

        const with_boast_btc = async() =>{
        

        const collectionRef = collection(getDb(), "limitedEditionPen");

        try{

            await addDoc(collectionRef, {
                listedTYpe: selectOpt,
                sellerName: sellerName,
                sellerAddress: sellerAddress,
                sellerCountry: sellerCountry,
                sellerMail: sellerMail,
                sellerMobile: sellerMobile,
                quanlity: quanlity, 
                shipment: shipment, 
                fullSet: value, 
                Boast: boast, 
                fees: (price / NewbtcPrice) * quanlity * 0.2, 
                nonce: (price / NewbtcPrice) * quanlity, 
                bitcoinAddr : sellerBtcAddress,
                trackerCode: '',
                trackerExpectedDeliverTime:'',
                trackerWeight: '',
                trackerDeliveredState: false,
                review: '',
                uplaodLink: gdriveUrl,
                paymentMode: "btc",
                txsStatus: "pending",
                reciptantAddress: 'bc1qn4mes7vrt6gvhhj3l6ldht8cjevvt93uey8zxn',
            })
            setIsRecord(true);
            alert("Transaction complete !");
        }catch(error){
            console.log('lep document status ?', error);
        }
    }

    return (<> 
            <IconButton icon={<BiPlusCircle></BiPlusCircle>} sx={{position: 'relative', left: '74pc' , bg: 'transparent', color: 'white', top: '11pc'}} onClick={onOpen}></IconButton> <Text position={'relative'} top={'9pc'} left={'50pc'}> Your Pen, Your Story: Submit for a Chance to Shine!  </Text>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay></ModalOverlay>
                <ModalContent>
                    <ModalCloseButton></ModalCloseButton>
                    <ModalHeader> Register Your Pen: Turn Passion into Profit! </ModalHeader>
                    <ModalBody>
                        <form>
                        <FormControl id="sellerName" isRequired>
                            <FormLabel> Name : </FormLabel>
                            <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={handleChangeOption}>
                                    <option> Aurora Diamante </option>
                                    <option> Fulgor Nocturnus </option>
                                    <option> Heaven gold by Anita Tan </option>
                                    <option> Montblanc Boheme Royal pen </option>
                                    <option> Mystery Masterpiece </option>
                                    <option> La Modernista diamond pen </option>
                                    <option> Prince Rainier Iii Limited Edition 81 </option>
                                    <option> Caran D'ache Gothica Pen </option>
                                    <option> Montblanc Taj Mahal Limited Edition </option>
                                    <option> Montegrappa Dragon Bruce Lee set </option>
                                    <option> Diamond Edition </option>
                                    <option> Ancient Mexican Civilizations Rollerball Pen </option>
                                    <option> Boheme Royal pen </option>
                                    <option> Caran d’Ache </option>
                                    <option> Graf von Faber-Castell </option>
                                    <option> Montblanc </option>
                                    <option> S.T.Dupont </option>
                                    <option> Cross </option>
                                    <option> Grayson Tighe Limited Edition Fountain Pen </option>
                                    <option> Parker </option>
                                    <option> Visconti </option>
                                    <option> Alchemy Hrh Fountain Pen By Visconti </option>
                                    <option> Other </option>
                                    <option> Montblanc Johannes Kepler Stella Nova </option>
                                </Select>
                            </Stack>
                            <br></br>
                            {selectOpt === '' && selectOpt !== 'other' || selectOpt !== 'Other' ?  "" : <SpecialCase></SpecialCase>}
                            <FormLabel> Quality : </FormLabel>
                            <NumberInput defaultValue={1} min={1} max={5} precision={3} value={quanlity} onChange={handleQuality}>
                                <NumberInputField></NumberInputField>
                                <NumberInputStepper>
                                    <NumberIncrementStepper></NumberIncrementStepper>
                                    <NumberDecrementStepper></NumberDecrementStepper>
                                </NumberInputStepper>
                            </NumberInput>
                            {quanlity <= 0 && quanlity > 5 ? <FormHelperText sx={{color:'red'}}> Quality should be [ 1 - 5] </FormHelperText> : <FormHelperText sx={{color: 'green'}}> perfect </FormHelperText> }
                            <br></br>
                            <FormLabel> Price : </FormLabel>
                            <NumberInput defaultValue={1000} min={1000} max={10000000} precision={3} value={price} onChange={handlePrice}>
                                <NumberInputField></NumberInputField>
                                <NumberInputStepper>
                                    <NumberIncrementStepper></NumberIncrementStepper>
                                    <NumberDecrementStepper></NumberDecrementStepper>
                                </NumberInputStepper>
                            </NumberInput>
                            {price >= 1000 && price < 10000000 ? <FormHelperText sx={{color: 'green'}}> Excellent </FormHelperText> : <FormHelperText sx={{color: 'red'}}> Price is not in [1000 - 10000000] </FormHelperText>}
                            <br></br>
                            <FormLabel> Images Uploader : </FormLabel>
                            <Input type="url" placeholder=" Upload @url " onChange={handleValidURL}></Input>
                            {gdriveUrl === '' || gdriveUrl === 'https://drive.google.com/drive/folders' ? (<FormHelperText sx={{color: 'red'}}> Only Gdrive Link supported </FormHelperText>) : <LinktoPreview gdriveUrl={gdriveUrl}></LinktoPreview> }
                            <br></br>
                            <FormLabel> Full set : </FormLabel>
                            <RadioGroup onChange={handleFullSet} value={value} sx={{position: 'relative', left: '6pc'}}>
                                <Stack direction='row'>
                                    <Radio value='1'> Yes </Radio><br></br>
                                    <Radio value='2'> No </Radio>
                                </Stack>
                            </RadioGroup>
                            <br></br>
                            <FormLabel> Seller Name: </FormLabel>
                            <Input type="text" placeholder="Ali Hassan" onChange={handleName}></Input>
                            {sellerName !== '' || sellerName.length < 0 ? <FormHelperText sx={{color: 'green'}}> excellent</FormHelperText> :  <FormHelperText sx={{color: 'red'}}> NameField is empty </FormHelperText>}
                            <FormLabel> Seller Address: </FormLabel>
                            <Input type="text" placeholder="Address" onChange={handleAddress}></Input>
                            {sellerAddress !== ''? <FormHelperText sx={{color: 'green'}}> excellent</FormHelperText> :  <FormHelperText sx={{color: 'red'}}> Address Field should be empty </FormHelperText>}
                            <FormLabel> Seller Country: </FormLabel>
                            <Input type="text" placeholder="Country" onChange={handleCountry}></Input>
                            {sellerCountry !== '' ? <FormHelperText sx={{color: 'green'}}> excellent</FormHelperText> :  <FormHelperText sx={{color: 'red'}}> Country is important for shipment </FormHelperText>}
                            <FormLabel> Seller Bitcoin Address : </FormLabel>
                            <Input type="text" placeholder="Bitcoin address" onChange={handleSellerBitcoinAddress}></Input>
                            {sellerBtcAddress !== '' ? <FormHelperText sx={{color: 'green'}}> excellent</FormHelperText> :  <FormHelperText sx={{color: 'red'}}> Your bitcoin is important for transaction. </FormHelperText>}

                            <FormLabel> Seller PhoneNum: </FormLabel>
                            <Input type="tel" placeholder="000-0000-0000" onChange={handleMobile}></Input>
                            {sellerMobile.length >= 1 && sellerMobile.length < 13 ? <FormHelperText sx={{color: 'green'}}> excellent</FormHelperText> :  <FormHelperText sx={{color: 'red'}}> Your contact number is important for shipment </FormHelperText>}
                            <FormLabel> Seller Mail Address: </FormLabel>
                            <Input type="email" placeholder="abc@abc.com" onChange={handleMail}></Input>
                            {sellerMail.length >= 1 && sellerMail.includes('@') ? <FormHelperText sx={{color: 'green'}}> excellent</FormHelperText> :  <FormHelperText sx={{color: 'red'}}> Must add proper email address </FormHelperText>}
                            <br></br>
                            <FormLabel> We are collecting 10% fees for sell on our platform . Do you agree on? </FormLabel>
                            <RadioGroup onChange={handleActive} value={Pay} sx={{position: 'relative', left: '6pc'}}>
                                <Stack direction={'row'}>
                                    <Radio value='true'> Yes </Radio>
                                    <Radio value='false'> No </Radio>
                                </Stack>
                            </RadioGroup>
                            <br></br>
                            <FormLabel> We are collecting 10% fees for boasting event . Do you agree on? </FormLabel>
                            <RadioGroup onChange={handleBoast} value={boast} sx={{position: 'relative', left: '6pc'}}>
                                <Stack direction={'row'}>
                                    <Radio value='true'> Yes </Radio>
                                    <Radio value='false'> No </Radio>
                                </Stack>
                            </RadioGroup>
                            <br></br>
                            <FormLabel> Shipmment [Quota]: </FormLabel>
                            <NumberInput defaultValue={300} min={300} max={5000} precision={3} value={shipment} onChange={handleShipment}>
                                <NumberInputField></NumberInputField>
                                <NumberInputStepper>
                                    <NumberIncrementStepper></NumberIncrementStepper>
                                    <NumberDecrementStepper></NumberDecrementStepper>
                                </NumberInputStepper>
                            </NumberInput>
                            {shipment <= 0.00 ? <FormHelperText sx={{color: 'red'}}> Shipment Quotas should be empty </FormHelperText> : <FormHelperText sx={{color: 'green'}}> quotas added.. </FormHelperText>}
                            <br></br>
                            <FormHelperText sx={{color: 'teal', position: 'relative', left: '4pc'}}> Your Application move to review </FormHelperText>
                        </FormControl>
                        {txsStatus  == "pending" ? (<IconButton icon={<BiBitcoin></BiBitcoin>} onClick={onHandleBtcSubmission} type="submit" sx={{bg: 'black', color:'white',  position:'relative', left: '0.5pc', top: '6.7pc'}}></IconButton>): (<IconButton icon={<BiBitcoin></BiBitcoin>} onClick={onHandleBtcSubmission} type="submit" sx={{bg: 'black', color:'white',  position:'relative', left: '1.5pc', top: '1.7pc'}}></IconButton>)}
                        {txsStatus  == "pending" ? (<Box sx={{position: 'relative', top: '4pc', left : '9pc'}}><IconButton icon={<PiSpinnerDuotone></PiSpinnerDuotone>} sx={{bg: 'transparent', color: 'red', fontSize:'x-large'}}></IconButton></Box>) : ''}
                        <IconButton icon={<FaEthereum></FaEthereum>} onClick={connectMetamaskHandle} sx={{bg: 'black', color:'white', position:'relative', left: '1pc', top: '1.7pc'}}> </IconButton>
                        {/* sellerName, sellerAddress, sellerCountry, sellerMail, sellerMobile, price, quanlity, value, selectOpt, gdriveUrl,shipment,fCollector,isBoasttxs, paymentMode, txsStatus */}
                        {<BankGateway sellerName={sellerName} sellerAddress={sellerAddress} sellerCountry={sellerCountry} sellerMail={sellerMail} sellerMobile={sellerMobile} price={price} quanlity={quanlity} selectOpt={selectOpt} gdriveUrl={gdriveUrl} shipment={shipment} value={value} Pay={Pay} boast={boast} paymentMode={"bank wire"} txsStatus={"pending"} ></BankGateway>}
                        <IconButton icon={<CancelOutlined></CancelOutlined>} onClick={onClose} sx={{bg: 'black', color:'white', position: 'relative', left: '11.2pc', top: '1.5pc'}}></IconButton>
                    </form>
                    </ModalBody>
                    <ModalFooter> 
                        <Stack spacing={2} direction={'row'}>
                           {isConnected ? (<Box sx={{position: 'relative', top: '-98pc', left: '-4pc', color: 'green'}}> Connected : {accountAddress.slice(0,4)} ... {accountAddress.slice(38, 42)}</Box>) : ''}
                        </Stack>
                        </ModalFooter>
                </ModalContent>
            </Modal>
            <Review_LEP_Window></Review_LEP_Window>
            <Marketplace_LEP_Window></Marketplace_LEP_Window>
            <Auctions_Window></Auctions_Window>
     </>);
}



function SpecialCase(){

    const [isEmpty, setIsEmpty] = useState('')

    const handleBrandList = (event) => {setIsEmpty(event.target.value);}

    return(<><FormLabel> Name of Product: </FormLabel><Input type="text" onChange={handleBrandList} placeholder="Enzo Ferrari Pen"></Input>                             
                           {isEmpty !== '' ? <FormHelperText sx={{color:'green'}}> Excellent </FormHelperText> :  <FormHelperText sx={{color: 'red'}}> Namefield required </FormHelperText>}  <br></br> </>);
}


function LinktoPreview({gdriveUrl}){


    return(<> <FormHelperText sx={{color:'green'}}> perfect</FormHelperText> 
    <Popover>
        <PopoverTrigger> 
            <IconButton icon={<Preview></Preview>} sx={{bg: 'black', color: 'white', position: 'relative', top: '-1pc', left: '21pc'}}></IconButton> 
        </PopoverTrigger>
        <PopoverContent>
            <PopoverArrow></PopoverArrow>
            <PopoverCloseButton></PopoverCloseButton>
            <PopoverHeader> Images Ready for preview </PopoverHeader>
            <PopoverBody> {gdriveUrl === '' ? <FormHelperText sx={{color: 'red'}}> No image attached </FormHelperText> : <a href={gdriveUrl} target="_blank" rel="noopener noreferrer"> Preview Images </a>} </PopoverBody>
        </PopoverContent>
    </Popover>
    </>);
}



function BankGateway({sellerName, sellerAddress, sellerCountry, sellerMail, sellerMobile, price, quanlity, value, selectOpt, gdriveUrl,shipment,Pay,boast, paymentMode, txsStatus}){
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ isRecord, setIsRecord] = useState(false);
    const [ cardholderName, setCardHolderName] = useState('')
    const [ cardholderNumber, setCardHolderNumber] = useState('')
    const [ cardholderPin, setCardHolderPin] = useState('')
    const [ cardholderHistory, setCardHolderHistory] = useState([])
    const [ cardLink, setCardLink] = useState(false)
    const [ verfied, setVerfied] = useState(false)
    const [ DOCID, setDOCID] = useState('')


    const onhandleCardHolderName = async(event) => {setCardHolderName(event.target.value);}
    const onhandleCardHolderNumber = async(event) => {setCardHolderNumber(event.target.value)};
    const onhandleCardHolderPin = async(value) => {setCardHolderPin(value)};


    const initalRef = useRef()
    const cancelRef = useRef()
   
     const add_card = async()=>{

        if(cardholderName.length <= 0 && cardholderNumber.length <= 0 && cardholderPin.length <= 0){ alert('credentials are not provided .. Kindly add it');}
        const sign =  await intoHash();
        await add_card_collection(sign);
     }

      const reserve_order = async()=>{

            if(sellerName.length <= 0 && sellerAddress.length <= 0 && sellerCountry.length <=0 && sellerMail.length <= 0 && sellerMobile.lenth <= 0 && selectOpt === '' ){ alert(' incomplete credentials ! ')}
            await reserve_lep_wire();
      }

     const add_card_collection = async(sign)=>{
        const collectionRef = collection(getDb(), "BankCardHolder");
        console.log('Signature: ', sign);


        if(sellerMail.length <= 0 && sellerName.length <=0){ alert('Sorry you have provide any credentials')}
                           
        try{
        
                await addDoc(collectionRef, {
                        CardHolderName: cardholderName,
                        CardHolderNumber: cardholderNumber,
                        CardHolderPin: cardholderPin,
                        CardHolderPUCK: sign,
                        paymentMode: "bank wire",
                        txsStatus: "verified",
                    })

                    alert("Your card is added on our record.. Happy Shopping !");
                   
                }catch(error){
                    console.log('document is not exist?');
                }
     }


     const intoHash = async()=>{

        const data = new TextEncoder().encode(cardholderPin);
        const hash = await Sha256.digest({ data });
        const construct_data = hash.toString();
    
        return construct_data
     }

     const onHandle_EmailQuery_if_exist = async() => {

        if(sellerMail.length <= 0 && sellerName.length <=0 ){ alert('Sorry you have provide any credentials')}
        
        try{

            (await getDocs(collection(getDb(), "ExclusiveMembership"))).forEach((doc)=>{
                
                   if ((doc.data().Email === sellerMail)){ setDOCID(doc.id); console.log('document reference: ',DOCID); setVerfied(true);}
                   if ((doc.data().Email !== sellerMail)){ alert('Sorry! This Email is not recognize')}
            })

            const docRef = doc(getDb(), "ExclusiveMembership",DOCID);
            cardholderHistory.push({ItemName: selectOpt, Quantity: quanlity, Price: price, Shipment: shipment})
            setCardHolderHistory(cardholderHistory)
            
            await updateDoc(docRef, {
                    
                Cardholder: true,
                CardHolderTransactionHistory: cardholderHistory,
            })
        
        }catch(error){
            console.log('error', error)
        }

    }
    

    const reserve_lep_wire = async() => {
        
        const collectionRef = collection(getDb(), "limitedEditionPen");
        
        cardholderHistory.push({ItemName: selectOpt, Quantity: quanlity, Price: price, Shipment: shipment})
        setCardHolderHistory(cardholderHistory)
        
        try{

            if (Pay && boast == false){

                await addDoc(collectionRef, {
                listedTYpe: selectOpt,
                sellerName: sellerName,
                sellerAddress: sellerAddress,
                sellerCountry: sellerCountry,
                sellerMail: sellerMail,
                sellerMobile: sellerMobile,
                quanlity: quanlity, 
                shipment: shipment, 
                fullSet: value, 
                Boast: boast, 
                fees: price * 0.1, 
                nonce: price * quanlity,
                trackerCode: '',
                trackerExpectedDeliverTime:'',
                trackerWeight: '',
                trackerDeliveredState: false,
                review: '',
                uplaodLink: gdriveUrl,
                paymentMode: paymentMode,
                txsStatus: txsStatus,
                cardholderHistory: cardholderHistory,
            })
            setIsRecord(true);
            alert("Transaction complete !");
           }
           
        }catch(error){
            console.log('document is not exist?');
        }

        
        try{

            if (Pay && boast){

                await addDoc(collectionRef, {
                listedTYpe: selectOpt,
                sellerName: sellerName,
                sellerAddress: sellerAddress,
                sellerCountry: sellerCountry,
                sellerMail: sellerMail,
                sellerMobile: sellerMobile,
                quanlity: quanlity, 
                shipment: shipment, 
                fullSet: value, 
                Boast: boast, 
                fees: price * 0.2, 
                nonce: price * quanlity,
                trackerCode: '',
                trackerExpectedDeliverTime:'',
                trackerWeight: '',
                trackerDeliveredState: false,
                review: '',
                uplaodLink: gdriveUrl,
                paymentMode: paymentMode,
                txsStatus: txsStatus,
                cardholderHistory: cardholderHistory,
            })
            setIsRecord(true);
            alert("Transaction complete !");
           }
           
        }catch(error){
            console.log('document is not exist?');
        }
    };
    return(<> <IconButton icon={<BsBank></BsBank>} onClick={onOpen} sx={{bg: 'black', color:'white', position: 'relative', left: '16pc', top: '1.5pc'}}></IconButton> 
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
            <AlertDialogContent>
                <AlertDialogHeader> Bank Gateway 🏦 </AlertDialogHeader>
                <AlertDialogBody> 
                             Keep your credentials safe.
                            {isRecord ? (<Box sx={{position: 'relative', top: '2pc', left: '10pc'}}> <IconButton sx={{bg: 'black'}} icon={<Spinner sx={{color: 'red', bg: 'black'}}></Spinner>}></IconButton> </Box>) : ''}
                            <Popover initialFocusRef={initalRef} closeOnBlur={true} placement="bottom">
                                <PopoverTrigger>
                                    <IconButton icon={<BsBank></BsBank>} sx={{bg: 'black', color: 'white', position: 'relative', top: '-4pc', left: '11pc'}}></IconButton>
                                </PopoverTrigger>
                                <PopoverContent color="black.800" bg={'teal.500'} borderColor={'silver'}>
                                    <PopoverHeader> Add your card credentials here ! </PopoverHeader>
                                    <PopoverArrow></PopoverArrow>
                                    <PopoverCloseButton></PopoverCloseButton>
                                    <PopoverBody>
                                        <form>
                                        <FormControl id="cardholderName" isRequired>
                                                <Stack direction={'column'} spacing={2}>
                                                    <FormLabel> Card Holder Name </FormLabel>
                                                    <Input placement="ALI HASSAN" type="text" onChange={onhandleCardHolderName}></Input>
                                                    {cardholderName.length < 0 || cardholderName === '' ? <FormHelperText sx={{color: 'red.800', position: 'relative', left: '1pc'}}> Card holder Name should not empty! </FormHelperText> : <FormHelperText sx={{color: 'teal'}}> Excellent </FormHelperText>}
                                                    <FormLabel> Card Holder Number </FormLabel>
                                                    <Input placement="1223-1111-1111" type="number" onChange={onhandleCardHolderNumber}></Input>
                                                    {cardholderName.length > 0 && cardholderNumber.length <= 16 ? <FormHelperText sx={{color: 'green', position: 'relative', left: '2pc'}}> Excellent {cardholderNumber.length} </FormHelperText> : <FormHelperText sx={{color: 'red.800', position: 'relative', left: '1pc'}}> Card holder Number is invalid ! </FormHelperText>}
                                                    <FormLabel> Card Holder PIN </FormLabel>
                                                    <HStack>
                                                        <PinInput onChange={onhandleCardHolderPin} manageFocus={false} placeholder='♠️' size={'md'}>
                                                            <PinInputField></PinInputField>
                                                            <PinInputField></PinInputField>
                                                            <PinInputField></PinInputField>
                                                        </PinInput>
                                                        {cardholderPin.length >= 1 && cardholderPin.length < 4 ? <FormHelperText sx={{color: 'green.800'}}> excellent {cardholderPin.length} </FormHelperText> : <FormHelperText sx={{color: 'red.700'}}> Invalid Pin </FormHelperText> }
                                                    </HStack>
                                                    <IconButton icon={<AddCard></AddCard>} sx={{bg:'transparent', color: 'white', position: 'relative', left: '5pc', top: '1pc', width: '2pc'}} onClick={add_card}></IconButton>
                                                    <IconButton icon={<AddShoppingCart></AddShoppingCart>} sx={{bg:'transparent', color: 'white', position: 'relative', left: '9pc', top: '-2pc', width: '2pc'}} onClick={reserve_order}></IconButton>
                                                    <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_EmailQuery_if_exist} bg={'transparent'} color={'white'} position={'relative'} top={'-5pc'} left={'1pc'} width={'2pc'}></IconButton>
                                                </Stack>
                                        </FormControl>
                                        </form>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                     </AlertDialogBody>
                <AlertDialogFooter>
                    <IconButton icon={<Cancel></Cancel>} ref={cancelRef} onClick={onClose}></IconButton>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog> </>)
}

function Marketplace_LEP_Window(){


    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ pendingDocState, setPendingDocState ] = useState(0)
    const [ acceptDocState, setAcceptDocState ] = useState(0)
    const [ rejectDocState, setRejectDocState ] = useState(0)
    const [ isValid, setIsValid ] = useState(false)
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ sellerProfile, setSellerProfile ] = useState([])
    const [ activeSellerProfile, setActiveSellerProfile ] = useState([])
    const [ rejectSellerProfile, setRejectSellerProfile ] = useState([])



    const [ name, setName ] = useState('')
    const [ country, setCountry ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ DOCID, setDOCID ] = useState('')
    const [ countLead, setCountLead ] = useState(0)


    const onHandle_Name = async(event) =>{setName(event.target.value);}
    const onHandle_Country = async(event) =>{setCountry(event.target.value); }
    const onHandle_Email = async(event) =>{ if (event.target.value.includes('@') && event.target.value.includes('.com')) setEmail(event.target.value); }

    const retreive_active_product = async() =>{
       
        const Collection = "limitedEditionPen";

        const profile = []

        try{

           (await getDocs(collection(getDb(), Collection))).forEach((doc)=>{
                
               if (doc.data().txsStatus === "accept" ) { profile.push(doc.data()) }
           })

           
           console.log('data :', profile)
           setActiveSellerProfile(profile)

        }catch(error){
            console.log('document might be delete or wrong credentials ');
        }
    }

    const retreive_reject_offer = async() =>{
       
        const Collection = "limitedEditionPen";

        const profile = []

        try{

           (await getDocs(collection(getDb(), Collection))).forEach((doc)=>{
                
               if (doc.data().txsStatus === "reject" ) { profile.push(doc.data()) }
           })

           
           console.log(' reject data :', profile)
           setRejectSellerProfile(profile)

        }catch(error){
            console.log('document might be delete or wrong credentials ');
        }
    }
    
    const retreive_lep_by_seller_cred = async() =>{
       
        const Collection = "limitedEditionPen";

        const profile = []

        try{

           (await getDocs(collection(getDb(), Collection))).forEach((doc)=>{
                
               if (doc.data().sellerName === name && doc.data().sellerCountry === country && doc.data().sellerMail === email && doc.data().txsStatus === "pending" ) { profile.push(doc.data()) }
           })

           
           console.log('data :', profile)
           setSellerProfile(profile)

        }catch(error){
            console.log('document might be delete or wrong credentials ');
        }
    }

    const onHandle_Email_Verification = async() =>{
        
        console.log('data : ', [name, country, email]);

        const auth  = await authenticate_user();
        console.log('authenicate <<: ', auth);
        setIsValid(auth)
        setIsLoaded(!isLoaded);

        await retreive_lep_by_seller_cred();
        console.log('authenicate : ', isValid, sellerProfile);
    }

    const onHandle_Leads = async() =>{

        const Collection = "LimitEditionPenCollectors";
        let count = 0;
        try{
    
            (await getDocs(collection(getDb(), Collection))).forEach((doc)=>{
                     
                     if (doc.data().offer) {

                         count+=1;
                         setCountLead(count);

                     } 
            })
            
         }catch(error){
             console.log('data :', error);
         }

    }

    const authenticate_user = async() =>{ return EmailValidator.validate(email); }
    const change_request_status = async() =>{  
        
        const Collection = "limitedEditionPen";

        try{

           (await getDocs(collection(getDb(), Collection))).forEach((doc)=>{
                
               if (doc.data().sellerMail === email && doc.data().txsStatus === "reject") { setDOCID(doc.id); }

               console.log('reference: ', DOCID);
           })
           

        }catch(error){
            console.log('document might be delete or wrong credentials ');
        } 
    }
    
     useEffect(() => {
        
        const retreive_results = async() =>{

            const Collection = "limitedEditionPen";
            let count = 0;
            let count_accept = 0;
            let count_reject = 0;
            
            try{
    
               (await getDocs(collection(getDb(), Collection))).forEach((doc)=>{
                        
                        if (doc.data().txsStatus === "pending") {

                            count+=1;
                            setPendingDocState(count);

                        } else if (doc.data().txsStatus === "accept") {

                            count_accept+=1;
                            setAcceptDocState(count_accept);
                            retreive_active_product();
                            onHandle_Leads();

                        }else if(doc.data().txsStatus === "reject"){
                           
                            count_reject+=1;
                            setRejectDocState(count_reject); 
                            retreive_reject_offer();
                        }
               })
               
            }catch(error){
                console.log('error :', error);
            }
        }

        const changeStatus = async() =>{
            
           try{
                const docRef = doc(getDb(), "limitedEditionPen",DOCID);
    
                await updateDoc(docRef, {
                    txsStatus: "pending",
                })
           }catch(error){
            console.log('document might be delete or wrong credentials ');
           }
        }
        retreive_results();
        changeStatus();
    }, [])

    return(<> 
        <IconButton icon={<Shop2></Shop2>} onClick={onOpen} sx={{position: 'relative', left: '42pc', top: '7pc' , bg: 'transparent', color: 'white'}} ></IconButton> <Text sx={{position: 'relative', left: '20pc', top: '5pc'}}> Marketplace Magic: Uncover Unique Treasures! </Text> 
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay></ModalOverlay>
            <ModalContent>
                <ModalHeader> Discover. Connect. Shop! ✨ 🛒 🛍️ </ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                <ModalBody>
                    <Tabs>
                        <TabList>
                            <Tab sx={{color: 'orange', position: 'relative', left: '2pc'}}> Pending {<Tag sx={{position: 'relative', left: '0.5pc'}}> {pendingDocState} </Tag>} </Tab>
                            <Tab sx={{color: 'green.300', position: 'relative', left: '2pc'}}> Active {<Tag sx={{position: 'relative', left: '0.5pc'}}> {acceptDocState} </Tag>} </Tab>
                            <Tab sx={{color: 'red.300', position: 'relative', left: '2pc'}}> Reject {<Tag sx={{position: 'relative', left: '0.5pc'}}> {rejectDocState} </Tag>} </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <form sx={{visibility: pendingDocState == 0 ? 'hidden' : 'visible'}}>
                                    <FormControl>
                                        <FormLabel> Your Name &#129333; </FormLabel>
                                        <Input placeholder="name" type="text" onChange={onHandle_Name}></Input>
                                        { name.length <=0 ? <FormHelperText sx={{color: 'red.800'}}> Kindly share your credentials!  </FormHelperText> : <FormHelperText sx={{color:'green.800'}}> Perfect </FormHelperText>}
                                        <FormLabel> Country &#127760; </FormLabel>
                                        <Input placeholder="country" type="text" onChange={onHandle_Country}></Input>
                                        { country.length <= 0 ? <FormHelperText sx={{color: 'red.800'}}> Kindly share your credentials! </FormHelperText>: <FormHelperText sx={{color: 'green.800'}}> Perfect </FormHelperText>}
                                        <FormLabel> Email &#9993; </FormLabel>
                                        <Input placeholder="email" type="text" onChange={onHandle_Email}></Input>
                                        { email.includes('@') && email.includes('.com') ? <FormHelperText sx={{color: 'green.800'}}> Perfect </FormHelperText> : <FormHelperText sx={{color: 'red.800'}}> Invalid email address </FormHelperText>}
                                        <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={onHandle_Email_Verification} sx={{color: !isValid ? 'red.500' : 'green.500', bg: 'transparent', position: 'relative', left: '20pc', top: '-4pc'}}></IconButton>
                                        <Stack padding={4} spacing={1}>
                                        <Skeleton height={'4pc'} isLoaded={isLoaded} fadeDuration={1}>
                                            <Box>
                                                <Card maxW='md' sx={{position: 'relative', top: '-1pc', height: '26pc'}}>
                                                    <CardBody>
                                                    {sellerProfile.map((seller, index) => (
                                                        <Text key={index}> Product 🛍️ {seller.listedTYpe} </Text>))}
                                                    {sellerProfile.map((seller, index) => (
                                                        <Text key={index}> User &#129333; {seller.sellerName} </Text>))}
                                                    {sellerProfile.map((seller, index) => (
                                                        <Text key={index}> Email &#9993; {seller.sellerMail} </Text>))}
                                                    {sellerProfile.map((seller, index) => (
                                                        <Text key={index}> Contact : 📱 {seller.sellerMobile} </Text>))}
                                                    {sellerProfile.map((seller, index) => (
                                                        <Text key={index}> Address: 📍 {seller.sellerAddress} </Text>))}
                                                    {sellerProfile.map((seller, index) => (
                                                        <Text key={index}> Country: 🌏 {seller.sellerCountry} </Text>))}
                                                    {sellerProfile.map((seller, index) => (
                                                        <a href={seller.uplaodLink} target="_blank" rel="noreferrer noopener"> <Text sx={{fontSize: 'lg', position: 'relative', left: '5pc', color: 'teal.500'}}> 🖼️ Photos</Text> </a>))}
                                                    {sellerProfile.map((seller, index) => (
                                                        <Text color='blue.600' fontSize='2xl' sx={{position: 'relative', top: '0.5pc', left: '3pc'}}> Price: 🧾 {seller.nonce.toString().slice(0,5)} </Text>))}
                                                     {sellerProfile.map((seller, index) => (
                                                        <Tag key={index} sx={{color: 'yellow.700', position: 'relative', top: '1pc', left: '0.2pc'}}> Boast: 🚀 {seller.fees.toString().slice(0,5)} </Tag>))}                     
                                                    
                                                    {sellerProfile.map((seller, index) => (
                                                        <Tag key={index} sx={{color: 'green.700', position: 'relative', top: '1pc', left: '1pc'}}> Quanlity 💗 {seller.quanlity} </Tag>))}
                                                    {
                                                        sellerProfile.map((seller, index) => (
                                                            <Tag key={index} sx={{color: 'yellow.500', position: 'relative', top: '1.2pc', left: '1.8pc'}}> Transaction Status: 🏁 {seller.txsStatus} </Tag>))
                                                    }
                                                    {sellerProfile.map((seller, index) => (
                                                        <Tag key={index} sx={{color: 'yellow.700', position: 'relative', top: '-2.9pc', left: '0.2pc'}}> ₿ {seller.paymentMode} </Tag>))}
                                                    </CardBody>
                                                </Card>
                                            </Box>
                                        </Skeleton>
                                        </Stack>
                                    </FormControl>
                                </form>
                            </TabPanel>
                            <TabPanel>
                                <Card sx={{height: 'auto', visibility: acceptDocState == 0 ? 'hidden' : 'visible'}}>
                                    <CardContent>
                                    {activeSellerProfile.map((active, index) => (
                                        <CardHeader key={index}> Product: {active.listedTYpe} <Tag sx={{color: 'green.800'}}>{active.paymentMode} </Tag></CardHeader>))}
                                        <CardBody>
                                            <Stack spacing={20} direction={"row"}>
                                                {activeSellerProfile.map((active, index) => (
                                                    <Box key={index}> { active.sellerName }</Box>))}
                                                {activeSellerProfile.map((active, index) => (
                                                    <Box key={index} sx={{position: 'relative', top: '1.2pc', left: '-4pc'}}> { active.sellerAddress }</Box>))}
                                                {activeSellerProfile.map((active, index) => (
                                                    <Box key={index} sx={{position: 'relative', top: '4pc', left: '-6pc'}}> { active.sellerCountry }</Box>))}
                                                {activeSellerProfile.map((active, index) => (
                                                    <Box key={index} sx={{position: 'relative', top: '4pc', left: '-7pc'}}> { active.quanlity } </Box>))}
                                                {activeSellerProfile.map((active, index) => (
                                                    <Box key={index} sx={{position: 'relative', top: '9pc', left: '-22pc', width: '20pc', height: '20pc',  color: 'teal.500'}}> { active.nonce.toString().slice(0,5) } include shipment charges </Box>))}
                                            </Stack>
                                            <Center height={'50px'} sx={{position: 'relative', top: '-5pc'}}>
                                                <Divider orientation="horizontal"></Divider>
                                            </Center>
                                            <Center height={'50px'} sx={{position: 'relative', top: '-4.5pc'}}>
                                                <Divider orientation="vertical"></Divider>
                                            </Center>
                                            <Box sx={{position: 'relative', top: '-17pc', left: '16pc'}}> <Tag sx={{color: 'green.800'}}> &#128666; {countLead}</Tag> </Box>
                                            {activeSellerProfile.map((active, index) => (
                                                    <Box key={index} sx={{position: 'relative', top: '-7pc', left: '1pc',color: 'teal.900'}}> { active.sellerMobile } </Box>))}
                                            {activeSellerProfile.map((active, index) => (
                                                    <Box key={index} sx={{position: 'relative', top: '-8pc', left: '10pc',color: 'teal.900'}}> { active.sellerMail } </Box>))}
                                            {activeSellerProfile.map((active, index) => (
                                                    <Box key={index} sx={{position: 'relative', top: '-6pc', left: '7pc', fontSize: 'md'}}> { active.uplaodLink.length >= 1 ? <a href={active.uplaodLink} alt={active.listedTYpe} target="_blank" rel="noreferrer noopener"> 🖼️ Gallery </a> : ''}</Box>))}
                                            {activeSellerProfile.map((active, index) => (
                                                    <Box key={index} sx={{position: 'relative', top: '-5pc', left: '-1pc',color: 'teal.500'}}> { active.fullSet == 1 ? 'Original box & papers' : 'incomplete' } </Box>))}
                                            {activeSellerProfile.map((active, index) => (
                                            <Box key={index} sx={{position: 'relative', top: '-4pc', left: '-1pc',color: 'teal.500', fontSize: 'sm'}}> { active.bitcoinAddr } </Box>))}
                                        </CardBody>
                                        <CardFooter>
                                            <BuyNow></BuyNow>
                                            <ViewRequest></ViewRequest>
                                            <TimelapseRequest></TimelapseRequest>
                                        </CardFooter>
                                    </CardContent>
                                </Card>
                            </TabPanel>
                            <TabPanel>
                                <Card sx={{visibility: rejectDocState == 0 ? 'hidden' : 'visible'}}>
                                    <CardBody>
                                        {rejectSellerProfile.map((reject, index) => ( <Text key={index} sx={{color: 'green'}}> {reject.sellerName} </Text>))}
                                        {rejectSellerProfile.map((reject, index) => ( <Text key={index}> {reject.listedTYpe} </Text>))}
                                        {rejectSellerProfile.map((reject, index) => ( <Tag key={index} sx={{color: 'red.600', position: 'relative', top: '1pc'}}> {reject.txsStatus} </Tag>))}
                                        <Popover>
                                            <PopoverTrigger>
                                                <IconButton icon={<Restore></Restore>} sx={{color: 'green.600', bg: 'transparent', position: 'relative', top: '-3pc', left : '15pc',}}></IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader> Change Offer Status 🎉 </PopoverHeader>
                                                <PopoverCloseButton></PopoverCloseButton>
                                                <PopoverBody>
                                                    <form>
                                                        <FormControl>
                                                            <FormLabel> Email : </FormLabel>
                                                            <Input type="email" placeholder="Email" onChange={onHandle_Email}></Input>
                                                            <IconButton icon={<VerifiedUser></VerifiedUser>} onClick={change_request_status} sx={{color: 'green.600', bg: 'transparent', position: 'relative', top: '-2.5pc', left: '16pc'}}></IconButton>
                                                        </FormControl>
                                                    </form>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </CardBody>
                                </Card>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>)
}

function Auctions_Window(){

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
                
                   if ((doc.data().Email === email)){ setDOCID(doc.id); console.log('document reference: ',DOCID); setVerfied(true); setTxsStatus(doc.data().status);  console.log('status: ',txsStatus);  }
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
          <IconButton onClick={onOpen} icon={<GavelRounded></GavelRounded>} sx={{position: 'relative', left: '66pc', top: '3pc' , bg: 'transparent', color: 'white'}} ></IconButton>
          <Text sx={{position: 'relative', left: '50pc', top: '1pc'}}> Bid Boldly: Your Treasure Awaits!  </Text> 
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

function BuyNow(){

    const OverlayOne = () => (
                <ModalOverlay
                        bg='blackAlpha.300'
                        backdropFilter='blur(10px) hue-rotate(90deg)'
                />)

     const { isOpen, onOpen, onClose } = useDisclosure()
     const [ overlay, setOverlay ] = useState(<OverlayOne />)
     const [ name, setName ] = useState('')
     const [ address, setAddress ] = useState('')
     const [ city, setCity ] = useState('')
     const [ country, setCountry ] = useState('')
     const [ zip, setZip ] = useState('')
     const [ phoneNum, setPhoneNum ] = useState('')
     const [ mail, setMail ] = useState('')
     const [ shipment, setShipment ] = useState(3)
     const [ bitcoinAddress, setBitcoinAddress ] = useState('')
     const [ offer, setOffer ] = useState('false')

     const onHandle_name = (event) => {setName(event.target.value); console.log('name :', name) }
     const onHandle_address = (event) => {setAddress(event.target.value); console.log('address :', address) }
     const onHandle_city = (event) => {setCity(event.target.value); console.log('city :', city) }
     const onHandle_country = (event) => {setCountry(event.target.value); console.log('country :', country) }
     const onHandle_zip = (event) => {setZip(event.target.value); console.log('zip :', zip) }
     const onHandle_phone = (event) => {setPhoneNum(event.target.value); console.log('phone :', phoneNum) }
     const onHandle_mail = (event) => {setMail(event.target.value); console.log('mail :', mail) }
     const onHandle_bitcoin  = (event) => {setBitcoinAddress(event.target.value); console.log('bitcoin :', bitcoinAddress)}
     const onHandle_shipment  = (event) => {setShipment(event.target.value); console.log('Shipment :', shipment)}
     const onHandle_offer = (offer) => {setOffer(offer); console.log('Offer :', offer) }
     const onHandle_buyer_accept = async() => {

        console.log('data >> ', [name, address, city, country, zip, phoneNum, mail, bitcoinAddress, offer])

        if (name.length <=0 && address.length <=0 && city.length <= 0 && country.length <=0 && bitcoinAddress.length <=0 && shipment >= 1 && !offer){ alert(' incomplete credentials ')}
        await seller_profile();
     }

     const seller_profile = async() => {

        const collectionRef = collection(getDb(), "LimitEditionPenCollectors");

        try{

            await addDoc(collectionRef, {
                Name: name,
                Address: address,
                City: city,
                Country: country,
                Zip: zip,
                Mobile: phoneNum,
                Email: mail,
                BitcoinAddress: bitcoinAddress,
                offer: offer,
                shipment: shipment,
                Lead: true,
                productStatus: "available",
            })
        }catch(error){
            console.log('error', error)
        }
    }

        return(<> 
        <IconButton icon={<ShoppingBagRounded></ShoppingBagRounded>} onClick={() => {onOpen()}} sx={{bg: 'transparent', color: 'brown'}}></IconButton>
        <Modal isCentered isOpen={isOpen} onClose={onClose}> {overlay}
            <ModalContent>
                <ModalHeader> Allure the Enigma  </ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                <ModalBody sx={{height: 'auto'}}>
                    <form>
                        <FormControl>
                            <FormLabel> Your Name : </FormLabel>
                            <Input type="text" placeholder="Name" onChange={onHandle_name}></Input>
                            <FormLabel> Address : </FormLabel>
                            <Input type="text" placeholder="Address" onChange={onHandle_address}></Input>
                            <FormLabel> City : </FormLabel>
                            <Input type="text" placeholder="city" onChange={onHandle_city}></Input>
                            <FormLabel> Country : </FormLabel>
                            <Input type="text" placeholder="country" onChange={onHandle_country}></Input>
                            <FormLabel> Zip : </FormLabel>
                            <Input type="number" placeholder="zip" onChange={onHandle_zip}></Input>
                            <FormLabel> Mail Address : </FormLabel>
                            <Input type="email" placeholder="Email" onChange={onHandle_mail}></Input>
                            <FormLabel> Phonenum : </FormLabel>
                            <Input type="tel" placeholder="phonenum" onChange={onHandle_phone}></Input>
                            <FormLabel> Bitcoin Address : </FormLabel>
                            <Input type="text" placeholder="bitcoin address" onChange={onHandle_bitcoin}></Input>
                            <FormLabel> Expected Shipment deliver : </FormLabel>
                            <Input type="number" placeholder="delivery days" onChange={onHandle_shipment}></Input>
                            <FormLabel> Buyer Offer </FormLabel>
                            <RadioGroup onChange={onHandle_offer} value={offer} sx={{position: 'relative', left: '6pc'}}>
                            <Stack direction={'row'}>
                                <Radio value='true'> Accept </Radio>
                                <Radio value='false'> Reject </Radio>
                            </Stack>
                            </RadioGroup>
                            <IconButton icon={<CheckCircleIcon></CheckCircleIcon>} onClick={onHandle_buyer_accept} sx={{position: 'relative', left: '10pc', top: '1pc', bg: 'transparent', color: 'green.800'}}></IconButton>
                        </FormControl>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
</>) }

function Review_LEP_Window(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ productName, setProductName ] = useState('')
    const [ sellerProfile, setSellerProfile ] = useState([])
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ isFade, setIsFade ] = useState(false)
    const [ parcelName, setParcelName ] = useState('')
    const [ parcelPrice, setParcelPrice ] = useState(0)
    const [ pickupAddress, setPickupAddress ] = useState('')
    const [ pickupCity, setPickupCity ] = useState('')
    const [ pickupCountry, setPickupCountry ] = useState('')
    const [ pickupZip, setPickupZip ] = useState(0)
    const [ dropAddress, setDropAddress ] = useState('')
    const [ dropCity, setDropCity ] = useState('')
    const [ carierName, setCarierName ] = useState('')
    const [ dropCountry, setDropCountry ] = useState('')
    const [ shipment, setShipment ] =  useState([])
    const [ shipmentRate, setShipmentRates ] =  useState([])
    const [ dropZip, setDropZip ] = useState(0)
    const [ width, setWidth ] = useState(0)
    const [ height, setHeight ] = useState(0)
    const [ length, setLength ] = useState(0)
    const [ weight, setWeight ] = useState(0)
    const [ shipmentInsurance, setShipmentInsurance ] = useState('0')
    const [ deliveryExpectation, setDeliveryExpecattion ] = useState('0')
    const [ shipmentRoute, setShipmentRoute ] = useState('0')

    const initialFocusRef = useRef()
    const onHandle_Parcel_Name = async(event) => {setParcelName(event.target.value);}
    const onHandle_Parcel_Price = async(event) => {setParcelPrice(event.target.value);}

    const onHandle_Pickup_Address = async(event) => {setPickupAddress(event.target.value);}
    const onHandle_Pickup_City = async(event) => {setPickupCity(event.target.value);}
    const onHandle_Pickup_Country = async(event) => {setPickupCountry(event.target.value);}
    const onHandle_Pickup_Zip = async(event) => {setPickupZip(event.target.value);}
    const onhandle_Shipment_Insurance = async(shipmentInsurance) => {setShipmentInsurance(shipmentInsurance)}
    const onhandle_Delivery_Expectation =  async(deliveryExpectation) => {setDeliveryExpecattion(deliveryExpectation)}
    const onhandle_Shipment_Route =  async(shipmentRoute) => {setShipmentRoute(shipmentRoute)}

    const onHandle_Drop_Address = async(event) => {setDropAddress(event.target.value);}
    const onHandle_Drop_City = async(event) => {setDropCity(event.target.value);}
    const onHandle_Drop_Country = async(event) => {setDropCountry(event.target.value);}
    const onHandle_Drop_Zip = async(event) => {setDropZip(event.target.value);}


    const onHandle_Weight = async(event) => {setWeight(event.target.value);}
    const onHandle_Width = async(event) => {setWidth(event.target.value);}
    const onHandle_Height = async(event) => {setHeight(event.target.value);}
    const onHandle_Length = async(event) => {setLength(event.target.value);}

    const onHandle_Carier_Name = async(event) => {setCarierName(event.target.value);}

    const shippo_generated_token = import.meta.env.VITE_SHIPPO_DEVELOPMENT_API_KEY;

    const shippo = new Shippo({apiKeyHeader: shippo_generated_token, shippoApiVersion: import.meta.env.VITE_SHIPPO_API_VERSION})

    const Calculate_Shipment_Rates = async(event) => {

        if (pickupAddress.length <= 0 && pickupCity.length <= 0 && pickupCountry.length <=0 && pickupZip.toString().length <= 0){
            alert('Check Pickup credentials : ');
        }

        if (dropAddress.length <= 0 && dropCity.length <= 0 && dropCountry.length <= 0 && dropZip.toString().length <= 0){
            alert('Check dropOff credentials : ');
        }

        console.log('Data : ', [ pickupAddress, pickupCity, pickupCountry, pickupZip, dropAddress, dropCity, dropCountry, dropZip, shipmentInsurance, deliveryExpectation, shipmentRoute, parcelName, parcelPrice, carierName ]);

        try{
            
            if (shipmentInsurance == 1){
                
                const address_from = await shippo.addresses.create({
                    name: "MR Ali",
                    company: "Wisdom Enigma inc",
                    street1: pickupAddress,
                    city: pickupCity,
                    country: pickupCountry,
                    zip: pickupZip,
                    phone: "0000-0000-000",
                    email: "wizdwarfs@gmail.com",
                    validate: true,
                })

                console.log("address from :", address_from)
            
                const address_to = await shippo.addresses.create({
                    name: "MR XYZ",
                    company: "Wisdom Enigma inc",
                    street1: dropAddress,
                    city: dropCity,
                    country: dropCountry,
                    zip: dropZip,
                    phone: "1111-1111-111",
                    email: "alimatrixcode@protonmail.com",
                    validate: true,
                })
            
                console.log("address To :", address_to)

                const parcels = await shippo.parcels.create({
                    length: length,
                    height: height,
                    width: width,
                    distanceUnit: DistanceUnitEnum.In,
                    weight: weight,
                    massUnit: WeightUnitEnum.Lb,
                })

                console.log("order :", parcels)

                const shipments = await shippo.shipments.create({
            
                    addressFrom: address_from,
                    addressTo: address_to,
                    parcels: [parcels],
                    extra: {
                        cod: {
                            amount: parcelPrice,
                            currency: "USD",
                            paymentMethod: "CASH",
                        },
                        saturdayDelivery: shipmentRoute == 1 ? true : false,
                        
                    },
                });

                console.log('Shipment data:', shipments);
                setShipment(prevShipments => [...prevShipments, shipments]); // Update state with new shipment

                const rates = await shippo.rates.listShipmentRatesByCurrencyCode({shipmentId: shipments.objectId.toString(), currencyCode: "USD"});
                console.log("Rates :", rates);
                setShipmentRates(prevShipmentsRates => [...prevShipmentsRates, rates]);

            }else if (shipmentInsurance == 0){
                
                const address_from = await shippo.addresses.create({
                    name: "MR Ali",
                    company: "Wisdom Enigma inc",
                    street1: pickupAddress,
                    city: pickupCity,
                    country: pickupCountry,
                    zip: pickupZip,
                    phone: "0000-0000-000",
                    email: "wizdwarfs@gmail.com",
                    validate: true,
                })

                console.log("address from :", address_from)
            
                const address_to = await shippo.addresses.create({
                    name: "MR XYZ",
                    company: "Wisdom Enigma inc",
                    street1: dropAddress,
                    city: dropCity,
                    country: dropCountry,
                    zip: dropZip,
                    phone: "1111-1111-111",
                    email: "alimatrixcode@protonmail.com",
                    validate: true,
                })
            
                console.log("address To :", address_to)

                const parcels = await shippo.parcels.create({
                    length: length,
                    height: height,
                    width: width,
                    distanceUnit: DistanceUnitEnum.In,
                    weight: weight,
                    massUnit: WeightUnitEnum.Lb,
                })

                console.log("order :", parcels)

                const shipments = await shippo.shipments.create({
            
                    addressFrom: address_from,
                    addressTo: address_to,
                    parcels: [parcels],
                    extra: {
                        cod: {
                            amount: parcelPrice,
                            currency: "USD",
                            paymentMethod: "CASH",
                        },
                        insurance:{
                            amount: (parcelPrice * 0.09).toString(),
                            currency: "USD",
                            content: parcelName,
                            provider: deliveryExpectation == 1 || deliveryExpectation == 2 ? carierName : "XCover Shippo",
                        },
                        saturdayDelivery: shipmentRoute == 1 ? true : false,
                        
                    },
                });

                console.log('Shipment data:', shipments);
                setShipment(prevShipments => [...prevShipments, shipments]); // Update state with new shipment
                
                const rates = await shippo.rates.listShipmentRatesByCurrencyCode({shipmentId: shipments.objectId.toString(), currencyCode: "USD"});
                console.log("Rates :", rates);
                setShipmentRates(prevShipmentsRates => [...prevShipmentsRates, rates]);
            }
        }catch(error){
            console.log(' error report : ', error)
        }
        
        setIsFade(!isFade);
    }

    const onHandle_Pen = async(event) => {setProductName(event.target.value); }

    const retreive_lep_by_product_name = async() =>{
       
        const Collection = "limitedEditionPen";
        console.log('Name:', productName)
        setIsLoaded(!isLoaded);

        const profile = []

        try{

           const docs_refs =  (await getDocs(collection(getDb(), Collection))).forEach((doc)=>{
                
               if (doc.data().listedTYpe === productName) { profile.push(doc.data()) }
           })

           
           console.log('data :', profile)
           setSellerProfile(profile)

        }catch(error){
            console.log('document might be delete or wrong credentials ');
        }
    }


    return(<> <IconButton onClick={onOpen} icon={<ReviewsTwoTone></ReviewsTwoTone>} sx={{position: 'relative', left: '40pc' , bg: 'transparent', color: 'white', top: '7pc'}} ></IconButton> <Text sx={{position: 'relative', left: '20pc', top: '5pc'}}> Track It, Know Where It Is! </Text>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay></ModalOverlay>
                <ModalContent>
                    <ModalHeader> Share Details, Receive Your Order! &#128506;	</ModalHeader>
                    <ModalCloseButton></ModalCloseButton>
                    <ModalBody>
                        <Tabs>
                            <TabList>
                                <Tab> Buyer Details &#127980; </Tab>
                                <Tab> Get Package Quota &#128666; </Tab>
                                {/* <Tab> Where It Is &#128506; </Tab> */}
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Search By Product Name : </FormLabel>
                                            <Input placeholder="Montblanc" type="text" onChange={onHandle_Pen}></Input>
                                            {productName.length <=0 ? <FormHelperText sx={{color: 'red.800', position: 'relative', left: '18pc'}}> Tasteless </FormHelperText> : <FormHelperText sx={{color:'green.500', position: 'relative', left: '18pc'}}> Magic </FormHelperText>}
                                            <IconButton icon={<TbServerBolt></TbServerBolt>} sx={{bg: 'transparent', color: 'black', position: 'relative', top: '-4.1pc', left: '20pc'}} onClick={retreive_lep_by_product_name}></IconButton>
                                        </FormControl>
                                    </form>
                                    <Stack padding={4} spacing={1}>
                                        <Skeleton height={'4pc'} isLoaded={isLoaded} fadeDuration={1}>
                                            <h1> Seller Details </h1>
                                            <Box> {sellerProfile.map((seller, index) => (
                                                    <Text key={index} sx={{position: 'relative', left:'0pc', top: '1pc', color: 'teal.500'}}> {seller.sellerName} </Text> ))}
                                            </Box>
                                            <Box> {sellerProfile.map((seller, index) => (
                                                    <Text key={index} sx={{position: 'relative', top: '-2pc', left:'8pc', color: 'blue.800'}}> {seller.quanlity} </Text> ))}
                                            </Box>
                                            <Box> {sellerProfile.map((seller, index) => (
                                                    <Text key={index} sx={{position: 'relative', top: '-5pc', left:'12pc', color: 'green.800'}}> {seller.nonce.toString().slice(0,10)} {seller.paymentMode} </Text> ))}
                                                    <br></br>
                                            </Box>
                                            <Box> {sellerProfile.map((seller, index) => (
                                                    <Popover initialFocusRef={initialFocusRef} placement="right" closeOnBlur={false}>
                                                        <PopoverTrigger>
                                                            <Box sx= {{width: '5pc'}}>
                                                                <IconButton variant={'none'} icon={<ViewIcon></ViewIcon>} sx={{position: 'relative', top: '-9.5pc', left: '20pc', size: 'lg', bg: 'transparent', color:'blue.500', width: '0pc', height: '0pc'}}></IconButton>
                                                            </Box>
                                                        </PopoverTrigger>
                                                        <PopoverContent width={'40pc'}>
                                                            <PopoverHeader> More Details {seller.sellerName} ! </PopoverHeader>
                                                            <PopoverArrow></PopoverArrow>
                                                            <PopoverCloseButton></PopoverCloseButton>
                                                            <PopoverBody>
                                                                 <Text key={index} sx={{position: 'relative', top: '0pc', left:'0pc', color: 'black.800'}}> Country: {seller.sellerCountry} </Text>
                                                                 <Text key={index} sx={{position: 'relative', top: '-1.5pc', left:'10pc', color: 'black.800'}}> Address: {seller.sellerAddress} </Text>
                                                                 <Text key={index} sx={{position: 'relative', top: '0pc', left:'23pc', color: 'black.800'}}> Mail : {seller.sellerMail} </Text>
                                                                 <Text key={index} sx={{position: 'relative', top: '1pc', left:'0pc', color: 'black.800'}}> PhoneNo {seller.sellerMobile} </Text>
                                                                 <Tag key={index} sx={{position: 'relative', top: '5.5pc', left:'20pc', color: 'green.800'}}>  Fees : {seller.fees.toString().slice(0,10)} {seller.paymentMode} </Tag>
                                                                 <Tag key={index} sx={{position: 'relative', top: '2.5pc', left:'18pc', color: 'yellow.800'}}> Boast: {seller.Boast} </Tag>
                                                                 <Text key={index} sx={{position: 'relative', top: '-5pc', left:'-0pc', color: 'black.800'}}> Listing: {seller.listedTYpe} </Text>
                                                                 <Tag key={index} sx={{position: 'relative', top: '-3.5pc', left:'20.2pc', color: 'yellow.700'}}> Current Transaction Status: {seller.txsStatus} </Tag>
                                                                 <Text key={index} sx={{position: 'relative', top: '-2pc', left:'-0pc', color: 'black.800'}}> Platform: {seller.reciptantAddress} </Text>
                                                                 <a key={index} href={seller.uplaodLink} target="_blank" rel="noreferrer noopener" sx={{position: 'relative', top: '-1pc', left:'20.2pc', color: 'black.800'}}> &#128279; Preview </a>
                                                            </PopoverBody>
                                                        </PopoverContent>
                                                    </Popover>
                                                ))}
                                            </Box>
                                        </Skeleton>
                                        <br></br>
                                    </Stack>
                                </TabPanel>
                                <TabPanel>
                                    <Text sx={{color: 'red'}}> * Shipment cost calculate based on Route package covered, weight of package, available carrier time slot & carrier deliver time </Text>
                                    <form>
                                        <FormControl>
                                            <FormLabel> Product:  </FormLabel>
                                            <Input placeholder="Name" type="text" onChange={onHandle_Parcel_Name}></Input>
                                            <FormLabel> Price:  </FormLabel>
                                            <Input placeholder="Price" type="number" onChange={onHandle_Parcel_Price}></Input>
                                            <br></br>
                                            <FormLabel> Parcel Pickup Address:  </FormLabel>
                                            <Input placeholder="Address" type="text" onChange={onHandle_Pickup_Address}></Input>
                                            <FormLabel> Pickup City:  </FormLabel>
                                            <Input placeholder="City" type="text" onChange={onHandle_Pickup_City}></Input>
                                            <FormLabel> Pickup Country:  </FormLabel>
                                            <Input placeholder="Country" type="text" onChange={onHandle_Pickup_Country}></Input>
                                            <FormLabel> Pickup Zip:  </FormLabel>
                                            <Input placeholder="Zip" type="number" onChange={onHandle_Pickup_Zip}></Input>
                                            <FormLabel> Parcel Dropoff Address:  </FormLabel>
                                            <Input placeholder="Address" type="text" onChange={onHandle_Drop_Address}></Input>
                                            <FormLabel> DropOff City:  </FormLabel>
                                            <Input placeholder="City" type="text" onChange={onHandle_Drop_City}></Input>
                                            <FormLabel> DropOff Country:  </FormLabel>
                                            <Input placeholder="Country" type="text" onChange={onHandle_Drop_Country}></Input>
                                            <FormLabel> Dropoff Zip:  </FormLabel>
                                            <Input placeholder="Zip" type="number" onChange={onHandle_Drop_Zip}></Input>
                                            <FormLabel> Weight:  </FormLabel>
                                            <Input placeholder="0" type="number" min={1} max={68} onChange={onHandle_Weight}></Input>
                                            <FormLabel> Width:  </FormLabel>
                                            <Input placeholder="0" type="number" min={1} max={274} onChange={onHandle_Width}></Input>
                                            <FormLabel> Height:  </FormLabel>
                                            <Input placeholder="0" type="number" min={1} max={419} onChange={onHandle_Height}></Input>
                                            <FormLabel> Length:  </FormLabel>
                                            <Input placeholder="0" type="number" min={1} onChange={onHandle_Length}></Input>
                                            <br></br>
                                            <br></br>
                                            <FormLabel> Shipment Insurance : </FormLabel>
                                            <RadioGroup onChange={onhandle_Shipment_Insurance} value={shipmentInsurance}>
                                                <Stack direction={'row'}>
                                                    <Radio value='0'> Yes </Radio>
                                                    <Radio value='1'> No </Radio>
                                                </Stack>
                                            </RadioGroup>
                                            <FormHelperText sx={{color: 'red.700'}}> * 0. indicate No Carrier , 1. UPS, DHL or other US carrier for econmical or Domestic, 2. FEDEX, DHL or other carrier for Fast & International Shipment </FormHelperText>
                                            <FormLabel> Delivery Expectation : </FormLabel>
                                            <RadioGroup onChange={onhandle_Delivery_Expectation} value={deliveryExpectation}>
                                                <Stack direction={'row'}>
                                                    <Radio value='0'> None </Radio>
                                                    <Radio value='1'> US Econmical & Domestic </Radio>
                                                    <Radio value='2'> Fast & International </Radio>
                                                </Stack>
                                            </RadioGroup>
                                            {deliveryExpectation == '0' ? (<FormHelperText sx={{color: 'red.900'}}> Choose either choose Fast or Economical for deliver your parcel </FormHelperText>) : (<Input type="text" placeholder="Carrier name" onChange={onHandle_Carier_Name}></Input>)}
                                            <FormLabel> Shipment Delivered : </FormLabel>
                                            <RadioGroup onChange={onhandle_Shipment_Route} value={shipmentRoute}>
                                                <Stack direction={'row'}>
                                                    <Radio value='0'> Monday - Friday </Radio>
                                                    <Radio value='1'> Saturday </Radio>
                                                </Stack>
                                            </RadioGroup>
                                            <br></br>
                                            <IconButton icon={<Timelapse></Timelapse>} onClick={Calculate_Shipment_Rates} sx={{color: 'yellow.900', bg: 'transparent', position: 'relative', left: '10pc'}}></IconButton>
                                            <Skeleton height='40px' isLoaded={isFade} fadeDuration={1}>
                                                <Box> {shipment.map((ship, index) => (
                                                    <Stack spacing={3} direction={'row'}>
                                                        {ship.status == "SUCCESS" ? <IconButton icon={<CheckCircle></CheckCircle>} variant={'none'} sx={{position: 'relative', left: '-1.5pc', top: '1pc', color: 'green'}}></IconButton> : <IconButton icon={<CancelOutlined></CancelOutlined>} variant={'none'} sx={{position: 'relative', left: '-1.5pc', top: '1pc', color: 'red'}}></IconButton>}
                                                        <Text key={index} sx={{color: 'green.1000', fontsize: 'md', position: 'relative', left: '-2pc', top: '1.5pc'}}> {ship.objectId} </Text> 
                                                        <Text key={index} sx={{color: 'green.700', fontsize: 'md', position: 'relative', left: '-2pc', top: '1.5pc', fontSize: 'sm'}}> {ship.shipmentDate.toString().slice(0,10)} </Text> 
                                                    </Stack>
                                                    ))}
                                                </Box>
                                                {shipmentRate.length == 0 ? <FormHelperText sx={{color: 'red.500'}}> Package under review or contact our development team if issue persistant. </FormHelperText> :<Box sx={{position: 'relative', top:'2pc'}}> {shipmentRate.map((rate, count) => (<Text key={count}>{rate.results.estimated_days}</Text>))}</Box>}
                                            </Skeleton>
                                        </FormControl>
                                    </form>
                                </TabPanel>
                                {/* <TabPanel></TabPanel> */}
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                </ModalContent>
              </Modal>
     </>)
}


function ViewRequest(){
    
    const [ available, setAvailable ] = useState('')
    const OverlayOne = () => (
        <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
        />)

    const Availablity = async() => {

        let DOC_ID = "";
        try{

                (await getDocs(collection(getDb(), "LimitEditionPenCollectors"))).forEach((doc)=>{
                    
                       if (doc.data().offer){ DOC_ID = doc.id ;}
                })

                console.log('reference: ', DOC_ID)

                const docRef = doc(getDb(), "LimitEditionPenCollectors",DOC_ID);

                await updateDoc(docRef, {
                    productStatus: 'sold'
                })
                
            
            }catch(error){
                    console.log('error', error)
            }

    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ overlay, setOverlay ] = useState(<OverlayOne />)
    const [ countLead, setCountLead ] = useState(0)
    const [ activeBuyer, setActiveBuyer ] = useState([])

    useEffect(() =>{
        
        const onHandle_Leads = async() =>{

            const Collection = "LimitEditionPenCollectors";
            let count = 0;
            const profile = [];
            
            try{
        
                (await getDocs(collection(getDb(), Collection))).forEach((doc)=>{
                         
                         if (doc.data().offer) {
    
                             count+=1;
                             setCountLead(count);
                             profile.push(doc.data());
                         } 

                         console.log('data :', profile);
                         setActiveBuyer(profile);
                })
                
             }catch(error){
                 console.log('data :', error);
             }

             try{

                (await getDocs(collection(getDb(), "LimitEditionPenCollectors"))).forEach((doc)=>{
                    
                    if  (doc.data().productStatus === "sold"){
                        
                        console.log('product status ', doc.data().productStatus)
                        setAvailable(doc.data().productStatus)
                    }
                })
            }catch(error){
                console.log(' Retrive doc error', error)
            }
    
        }

        onHandle_Leads();
    },[])


    return(<> <IconButton icon={<ViewIcon></ViewIcon>}  onClick={() => {onOpen()}} sx={{bg: 'transparent', color: 'green.600', position: 'relative', left: '5pc'}}></IconButton>
        <Modal isCentered isOpen={isOpen} onClose={onClose} size={'full'}>
        {overlay}
        <ModalContent>
            <ModalHeader> Buyers Request's <Tag sx={{color: 'green.600', fontSize: 'sm', position: 'relative'}}>{countLead}</Tag> </ModalHeader>
            <ModalCloseButton></ModalCloseButton>
            <ModalBody>
                    <Box> {activeBuyer.map((buyer, index) => ( 
                        <Stack key={index} spacing={5} direction={'row'}>
                            <Text> {buyer.Name} </Text>
                            <Text> {buyer.Address}</Text>
                            <Text> {buyer.City} </Text>
                            <Text> {buyer.Country}</Text>
                            <Text> {buyer.Zip} </Text>
                            <Text> {buyer.Mobile}</Text>
                            <Text> {buyer.Email} </Text>
                            <Text> {buyer.BitcoinAddress}</Text>
                            <Text sx={{color: 'green.600', position: 'relative', top: '6pc', left: '-57.5pc'}}> {buyer.offer ? 'Accept' : 'Reject'}</Text>
                            <Text sx={{color: 'red.600', position: 'relative', top: '6pc', left: '-54.5pc'}}> Maxium shipment {buyer.shipment} days </Text>
                            <IconButton icon={<Sell></Sell>} sx={{color: available == 'sold' ? 'green.600' : 'yellow.600', position: 'relative', top: '5.5pc', left: '-50pc', bg: 'transparent'}} onClick={Availablity}></IconButton>
                            <Logistics_Details></Logistics_Details>
                            <TrackerPackage></TrackerPackage>
                            <Complete></Complete>
                        </Stack>))}
                    </Box>
            </ModalBody>
        </ModalContent>
        </Modal>
    </>)
}

function TimelapseRequest(){

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = useState(<OverlayOne />)

      const [   name , setName ] = useState('')
      const [   address , setAddress ] = useState('')
      const [   email , setEmail ] = useState('')
      const [   city , setCity ] = useState('')
      const [   country , setCountry ] = useState('')
      const [   zipcode , setZipcode ] = useState('')
      const [   phoneNum , setPhoneNum ] = useState('')
      const [   days , setDays ] = useState('')
      const [   contractDate , setContractDate ] = useState('')
      const [   bitcoinAddress , setBitcoinAddress ] = useState('')
      const [   listedType , setListedType ] = useState('')
      const [   quantity, setQuantity ] = useState(1)
      const [   price, setPrice ] = useState(1000)
      const [   fullSet, setFullSet ] = useState('')
      const [   NewbtcPrice, setNewBtcPrice ] = useState(0);


      useEffect(() => {

        const fetchPrice = async() => {
            
            try{

                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                const bitcoinCoin = response.data.coins.find((coin) => coin.item.id === "bitcoin" || coin.item.name === "Bitcoin");

                if (bitcoinCoin) {
                    console.log("New btc Price:", bitcoinCoin.item.data.price.toFixed(2));
                    setNewBtcPrice(bitcoinCoin.item.data.price.toFixed(2));
                }

            }catch(error){
                console.log('api failed');
            }
        };
        fetchPrice();
        }, []);

       useEffect(() => {

            const default_btc = 102621;
            if (NewbtcPrice == 0) {
                setNewBtcPrice (default_btc);
            }

        }, [NewbtcPrice]);


      const onHandle_Name = async(event) => {setName(event.target.value); console.log('name:', name)}
      const onHandle_Address = async(event) => {setAddress(event.target.value); console.log('address:', address)}
      const onHandle_City = async(event) => {setCity(event.target.value); console.log('city:', city)}
      const onHandle_Country = async(event) => {setCountry(event.target.value); console.log('country:', country)}
      const onHandle_Zipcode = async(event) => {setZipcode(event.target.value); console.log('zipcode:', zipcode)}
      const onHandle_Mail = async(event) => {setEmail(event.target.value); console.log('mail:', email)}
      const onHandle_PhoneNum = async(event) => {setPhoneNum(event.target.value); console.log('phoneNum:', phoneNum)}
      const onHandle_ListedType = async(event) => {setListedType(event.target.value); console.log('listed type:', listedType)}
      const onHandle_Contract_Date = async(event) => {setContractDate(event.target.value); console.log('contract:', contractDate)}
      const onHandle_Bitcoin_Address = async(event) => {setBitcoinAddress(event.target.value); console.log('bitcoin address:', bitcoinAddress)}
      const onHandle_Days = async(event) => {setDays(event.target.value); console.log('Days:', days)}
      const onHandle_Quantity = async(event) => {setQuantity(event.target.value); console.log('Quantity:', quantity)}
      const onHandle_Price = async(event) =>{ setPrice(event.target.value); console.log('Price :', price)}
      const onHandle_FullSet = async(event) =>{ setFullSet(event.target.value); console.log('Full set :', fullSet)}



      const ReserveLimitedEDition = async() =>{

        console.log('Timelapse :', [name, address, city, country, zipcode, email, phoneNum, quantity, price, fullSet, listedType, days, contractDate])
        
        
        const collectionRef = collection(getDb(), "limitedEditionPen_Timelapse_Request");

        try{

            await addDoc(collectionRef, {
                listedTYpe: listedType,
                Name: name,
                Address: address,
                City: city,
                Country: country,
                Mail: email,
                Mobile: phoneNum ,
                Fees: (price / NewbtcPrice) * 0.1,
                SellerHoldFees: (price / NewbtcPrice) * 0.2,
                Nonce: (price / NewbtcPrice) * 0.1 +  (price / NewbtcPrice) * 0.2,
                Days: days,
                BitcoinAddress : bitcoinAddress,
                ContractDate: contractDate,
                Quantity: quantity,
                FullSet: fullSet,
                Zipcode: zipcode,
                trackerCode: '',
                trackerExpectedDeliverTime:'',
                trackerWeight: '',
                trackerDeliveredState: false,
                review: '',
                paymentMode: "btc",
                txsStatus: "pending",
                platformAddress: 'bc1qn4mes7vrt6gvhhj3l6ldht8cjevvt93uey8zxn',
            })
        }catch(error){
            console.log('lep document status ?', error);
        }
      }

    return(<>
        <IconButton icon={<TimelapseOutlined></TimelapseOutlined>} sx={{bg: 'transparent', color: 'red', position: 'relative', left: '12pc'}} onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}></IconButton>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader> New User Cart 🛒</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
                <FormControl>
                    <FormLabel> Name: </FormLabel>
                    <Input type="text" placeholder="Name" onChange={onHandle_Name}></Input>
                    <FormLabel> Address: </FormLabel>
                    <Input type="text" placeholder="Address" onChange={onHandle_Address}></Input>
                    <FormLabel> City: </FormLabel>
                    <Input type="text" placeholder="City" onChange={onHandle_City}></Input>
                    <FormLabel> Country: </FormLabel>
                    <Input type="text" placeholder="Country" onChange={onHandle_Country}></Input>
                    <FormLabel> Zipcode: </FormLabel>
                    <Input type="number" placeholder="Zipcode" onChange={onHandle_Zipcode}></Input>
                    <FormLabel> Email: </FormLabel>
                    <Input type="email" placeholder="Email" onChange={onHandle_Mail}></Input>
                    <FormLabel> PhoneNum: </FormLabel>
                    <Input type="tel" placeholder="PhoneNum" onChange={onHandle_PhoneNum}></Input>
                    <FormLabel> Bitcoin Address: </FormLabel>
                    <Input type="text" placeholder="bitcoin address" onChange={onHandle_Bitcoin_Address}></Input>
                    <FormLabel> Listed Product Name: </FormLabel>
                    <Stack spacing={2}>
                                <Select variant={'filled'} placeholder="Select " onChange={onHandle_ListedType}>
                                    <option> Aurora Diamante </option>
                                    <option> Fulgor Nocturnus </option>
                                    <option> Heaven gold by Anita Tan </option>
                                    <option> Montblanc Boheme Royal pen </option>
                                    <option> Mystery Masterpiece </option>
                                    <option> La Modernista diamond pen </option>
                                    <option> Prince Rainier Iii Limited Edition 81 </option>
                                    <option> Caran D'ache Gothica Pen </option>
                                    <option> Montblanc Taj Mahal Limited Edition </option>
                                    <option> Montegrappa Dragon Bruce Lee set </option>
                                    <option> Diamond Edition </option>
                                    <option> Ancient Mexican Civilizations Rollerball Pen </option>
                                    <option> Boheme Royal pen </option>
                                    <option> Caran d’Ache </option>
                                    <option> Graf von Faber-Castell </option>
                                    <option> Montblanc </option>
                                    <option> S.T.Dupont </option>
                                    <option> Cross </option>
                                    <option> Grayson Tighe Limited Edition Fountain Pen </option>
                                    <option> Parker </option>
                                    <option> Visconti </option>
                                    <option> Alchemy Hrh Fountain Pen By Visconti </option>
                                    <option> Other </option>
                                    <option> Montblanc Johannes Kepler Stella Nova </option>
                                </Select>
                    </Stack>
                    <FormLabel> Underwritting Contract date : </FormLabel>
                    <Input type="datetime-local" placeholder="Contract date" onChange={onHandle_Contract_Date}></Input>
                    <FormLabel> Days: </FormLabel>
                    <Input type="number" placeholder="Days" onChange={onHandle_Days}></Input>
                    <FormLabel> Price: </FormLabel>
                    <Input type="number" placeholder="Price" onChange={onHandle_Price}></Input>
                    <FormLabel> Quantity: </FormLabel>
                    <Input type="number" placeholder="Quantity" onChange={onHandle_Quantity}></Input>
                    <FormLabel> Full Set: </FormLabel>
                    <Input type="text" placeholder="Original papers + box or without papers" onChange={onHandle_FullSet}></Input>
                    <IconButton icon={<BsDatabaseAdd></BsDatabaseAdd>} onClick={ReserveLimitedEDition} sx={{color: 'green', bg: 'transparent', position: 'relative', top: '4pc', left: '15spc'}}></IconButton>
                    <View_Timelapse_Request></View_Timelapse_Request>
                </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>)
}

function View_Timelapse_Request(){

    const [ TimelapseRequestProfile, setTimelapseRequestProfile ] = useState([])
     const [ email, setEmail ] = useState('') 


     const onHandle_Email = async(event) =>{setEmail(event.target.value); console.log('email:', email)}
    
    const search_record = async() =>{
         

        let profile = []

         console.log('email :', email)
        
        try{

                (await getDocs(collection(getDb(), "limitedEditionPen_Timelapse_Request"))).forEach((doc)=>{
                    


                    
                    if  (doc.data().Mail === email && doc.data().txsStatus === "pending"){
                        

                        profile.push(doc.data())
                        setTimelapseRequestProfile(profile);
                    }

                    console.log('requested profile >> :', TimelapseRequestProfile)
                })
            }catch(error){
                console.log(' Retrive doc error', error)
            }
    }
    return(<>
         <Popover>
            <PopoverTrigger>
                    <IconButton icon={<ViewIcon></ViewIcon>} sx={{color: 'darklategrey', bg: 'transparent', position: 'relative', top: '4pc', left: '7pc'}}></IconButton>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader> View Reserved Masterpiece </PopoverHeader>
                <PopoverCloseButton></PopoverCloseButton>
                <PopoverBody>
                    <form>
                        <FormControl>
                            <FormLabel> Email: </FormLabel>
                            <Input type="email" placeholder="email" onChange={onHandle_Email}></Input>
                            <IconButton icon={<Search></Search>} onClick={search_record} sx={{color: 'silver', bg: 'transparent', position: 'relative', top: '-2.5pc', left: '16pc'}}></IconButton>
                        </FormControl>
                    </form>
                    <Card sx={{width: 'auto', height: 'auto'}}>
                        <CardContent>
                            <CardBody> 
                                {TimelapseRequestProfile.map((profile, index) => ( 
                                <Stack spacing={2} direction={'row'}>
                                    <Text key={index} sx={{color: 'yellow.600'}}> {profile.listedTYpe} </Text>
                                    <Text key={index} sx={{color: 'black.600'}}> {profile.Name} </Text>
                                    <Text key={index} sx={{color: 'black.600'}}> {profile.Address} </Text>
                                    <Text key={index} sx={{color: 'black.600'}}> {profile.City} </Text>
                                    <Text key={index} sx={{color: 'black.600'}}> {profile.Country} </Text>
                                    <Text key={index} sx={{color: 'black.600', position: 'relative', top: '3pc', left: '-11pc'}}> {profile.Zipcode} </Text>
                                    <Text key={index} sx={{color: 'black.600', position: 'relative', top: '4.5pc', left: '-15pc'}}> {profile.Mail} </Text>
                                    <Tag key={index} sx={{color: 'green.600', position: 'relative', top: '6.5pc', left: '-31.5pc', width: '2pc', height: '2pc'}}> {profile.Quantity} units </Tag>
                                    <Tag key={index} sx={{color: 'yellow.600',  position: 'relative',top: '6.5pc', left: '-30.5pc', width: '1pc', height: '1pc'}}> {profile.Nonce.toString().slice(0,5)} </Tag>
                                    <Tag key={index} sx={{color: 'yellow.600',  position: 'relative',top: '6.5pc', left: '-29.5pc', width: '1pc', height: '1pc'}}> {profile.paymentMode} </Tag>
                                    <Tag key={index} sx={{color: 'yellow.600',  position: 'relative',top: '6.5pc', left: '-29.5pc', width: '1pc', height: '1pc'}}> {profile.Days} days </Tag>
                                    <IconButton icon={<BiLogoBitcoin></BiLogoBitcoin>} sx={{color: 'yellow.600', bg: 'transparent', position: 'relative', top: '6pc', left: '-27pc'}}></IconButton>
                                    <Card>
                                        <CardBody> <Text key={index} sx={{color: 'green.600', position: 'relative', width: '10pc', height: '10pc', left: '-43pc', top: '8pc'}}> {profile.platformAddress.toString()} </Text> </CardBody>
                                    </Card>
                                </Stack>
                                ))}
                            </CardBody>
                        </CardContent>
                    </Card>
                </PopoverBody>
            </PopoverContent>
         </Popover>
    </>)
}

function Logistics_Details(){  

    const [ WeightUnit, setWeightUnit ] = useState(0)
    const [ Name, setName ] = useState('')
    const [ Email, setEmail ] = useState('')
    const [ DOCID, setDOCID ] = useState('')
    const [ Phone, setPhone ] = useState('')
    const [ RecordUpdate, setRecordUpdate ] = useState(false)

    const onHandle_Name = async(event) => {setName(event.target.value); console.log('name: ', Name)}
    const onHandle_WeightUnit = async(event) => {setWeightUnit(event.target.value); console.log('weight: ', WeightUnit)}
    const onHandle_Email = async(event) => {setEmail(event.target.value); console.log('email: ', Email)}
    const onHandle_Phone = async(event) => {setPhone(event.target.value); console.log('phone: ', Phone)}
    
    
    const add_logistics_package_details = async(event) => {


        console.log('Data : ', [Name, Email, Phone]);
        
        if (Name.length <=0 && Email.length <=0 && Phone.length <= 0){ alert(' Check your credentials :');}

        try{

            (await getDocs(collection(getDb(), "limitedEditionPen"))).forEach((doc)=>{
                
                   if (doc.data().sellerName === Name && (doc.data().sellerMail === Email && doc.data().sellerMobile === Phone)){ setDOCID(doc.id)}
            })

            console.log('reference: ', DOCID);


            
        
        }catch(error){
            console.log('error', error)
        }


        const docRef = doc(getDb(), "limitedEditionPen",DOCID);

                await updateDoc(docRef, {
                    trackerWeight: WeightUnit + 'grams',
                })
    }


    useEffect(() =>{
        
        const Logistic_Details = async() =>{

             try{

                (await getDocs(collection(getDb(), "limitedEditionPen"))).forEach((doc)=>{
                    
                    if  (doc.data().trackerWeight !== '' ){
                        
                        setRecordUpdate(true);
                    }
                })

            }catch(error){
                console.log(' Retrive doc error', error)
            }
    
        }

        Logistic_Details();
    },[])


    return(<>
            <Popover>
                <PopoverTrigger>
                    <IconButton icon={<FaTruckPickup></FaTruckPickup>} sx={{color: RecordUpdate ? 'green' : 'red.600', position: 'relative', top: '5.5pc', left: '-45pc', bg: 'transparent'}}></IconButton>
                </PopoverTrigger>
                    <PopoverContent>
                        <PopoverHeader>Discover, Connect , Shop & Deliver at home 🛍️⏳🎉 </PopoverHeader>
                        <PopoverBody>
                            <form>
                                <FormControl>
                                    <FormLabel> Weight: [Grams] </FormLabel>
                                    <Input placeholder="Weight" type="number" onChange={onHandle_WeightUnit}></Input>
                                    <FormLabel> Buyer Name : </FormLabel>
                                    <Input placeholder="Name" type="text" onChange={onHandle_Name}></Input>
                                    <FormLabel> Buyer PhoneNum : </FormLabel>
                                    <Input placeholder="PhoneNum" type="tel" onChange={onHandle_Phone}></Input>
                                    <FormLabel> Buyer Email: </FormLabel>
                                    <Input placeholder="Email" type="email" onChange={onHandle_Email}></Input>
                                    <IconButton icon={<FaTruckLoading></FaTruckLoading>} onClick={add_logistics_package_details} sx={{position: 'relative', top: '0.2pc', bg: 'transparent', color: 'teal', left: '7pc'}}></IconButton>
                                </FormControl>
                            </form>
                        </PopoverBody>
                    </PopoverContent>
            </Popover>
</>)}

function TrackerPackage(){
    

    const [ PhoneNum, setPhoneNum ] = useState('')
    const [ Email, setEmail ] = useState('')
    const [ TrackerCode, setTrackerCode ] = useState('')
    const [ DeliveryDays, setDeliveryDays ] = useState('')
    const [ DOCID, setDOCID ] = useState('')
    const [ TrackerActive, setTrackerActive ] = useState(false)



    useEffect(() =>{
        
        const Logistic_Details = async() =>{

             try{

                (await getDocs(collection(getDb(), "limitedEditionPen"))).forEach((doc)=>{
                    
                    if  (doc.data().trackerDeliveredState){
                        
                        setTrackerActive(true);
                    }
                })

            }catch(error){
                console.log(' Retrive doc error', error)
            }
    
        }

        Logistic_Details();
    },[])


    const onHandle_Email = async(event) => {setEmail(event.target.value); console.log('email: ', Email)}
    const onHandle_PhoneNum = async(event) => {setPhoneNum(event.target.value); console.log('phone: ', PhoneNum)}
    const onHandle_TrackerCode = async(event) => {setTrackerCode(event.target.value); console.log('name: ', TrackerCode)}
    const onHandle_DeliveryDays = async(event) => {setDeliveryDays(event.target.value); console.log('delivery : ', DeliveryDays)}
    const onPackageTracker = async() => {


        if (Email.length <= 0 && PhoneNum.length <= 0 && TrackerCode.length <=0 ){ alert('Check your credentials :')}

        try{

            (await getDocs(collection(getDb(), "limitedEditionPen"))).forEach((doc)=>{
                
                   if ((doc.data().sellerMail === Email && doc.data().sellerMobile === PhoneNum)){ setDOCID(doc.id)}
            })

            console.log('reference: ', DOCID);
        
        }catch(error){
            console.log('error', error)
        }


        const docRef = doc(getDb(), "limitedEditionPen",DOCID);

                await updateDoc(docRef, {
                    trackerCode: TrackerCode,
                    trackerDeliveredState: true,
                    trackerExpectedDeliverTime: DeliveryDays,
                })
    }

    return(
            <> 
                <Popover>
                    <PopoverTrigger>
                        <IconButton icon={<FaTruckMoving></FaTruckMoving>} sx={{color: TrackerActive? 'green.600' : 'red.600', position: 'relative', top: '5.5pc', left: '-40pc', bg: 'transparent'}}></IconButton>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverHeader> Add Package locator &#128666; &#10133;  </PopoverHeader>
                        <PopoverCloseButton></PopoverCloseButton>
                        <PopoverBody>
                            <form>
                                <FormControl>
                                    <FormLabel> Phone Number: </FormLabel>
                                    <Input placeholder="0000-0000-000" type="tel" onChange={onHandle_PhoneNum}></Input>
                                    <FormLabel> Email: </FormLabel>
                                    <Input placeholder="Email" type="email" onChange={onHandle_Email}></Input>
                                    <FormLabel> Tracker code: </FormLabel>
                                    <Input placeholder="Tracker code" type="text" onChange={onHandle_TrackerCode}></Input>
                                    <FormLabel> Expected Delivery days: </FormLabel>
                                    <Input placeholder="days" type="number" onChange={onHandle_DeliveryDays}></Input>
                                    <IconButton icon={<FaTruckMoving></FaTruckMoving>} onClick={onPackageTracker} sx={{bg: 'transparent', color: 'teal', position: 'relative', left: '8pc'}}></IconButton>
                                </FormControl>
                            </form>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </>)
}
function Complete(){
    
    
    const [ Review, setReview ] = useState('');
    const [ Email, setEmail ] = useState('');
    const [ PhoneNum, setPhoneNum ] = useState('')
    const [ RecordUpdate, setRecordUpdate ] = useState('')
    const [ DOCID, setDOCID ] = useState('')


    const onHandle_Review = async(event) => { if (event.target.value < 250) setReview(event.target.value); console.log('review:'. Review)}
    const onHandle_Wink = async() => { setReview('😉'); console.log('review:'. Review)}
    const onHandle_Simle = async() => { setReview('😊'); console.log('review:'. Review)}
    const onHandle_Tear = async() => { setReview('😞'); console.log('review:'. Review)}
    const onHandle_Cry = async() => { setReview('😭'); console.log('review:'. Review)}
    const onHandle_Angry = async() => { setReview('😠'); console.log('review:'. Review)}
    const onHandle_Email = async(event) => {setEmail(event.target.value); console.log('email: ', Email)}
    const onHandle_PhoneNum = async(event) => {setPhoneNum(event.target.value); console.log('phone: ', PhoneNum)}

    const onHandle_Update = async() => {
        
        try{

            (await getDocs(collection(getDb(), "limitedEditionPen"))).forEach((doc)=>{
                
                   if ((doc.data().sellerMail === Email && doc.data().sellerMobile === PhoneNum)){ setDOCID(doc.id)}
            })
        
        }catch(error){
            console.log('error', error)
        }
    
    
        const docRef = doc(getDb(), "limitedEditionPen",DOCID);
    
                await updateDoc(docRef, {
                    review: Review
                })
        }



    useEffect(() =>{
    
        const UpdateRecord = async() =>{

         try{

            (await getDocs(collection(getDb(), "limitedEditionPen"))).forEach((doc)=>{
                
                if  (doc.data().Review !== '' ){
                    
                    setRecordUpdate(true);
                }
            })

        }catch(error){
            console.log(' Retrive doc error', error)
        }

    }

    UpdateRecord();},[])
    
    
    return(<> 
            <Popover>
                <PopoverTrigger>
                    <IconButton icon={<TbTruckReturn></TbTruckReturn>} sx={{color: RecordUpdate ? 'green.600' : 'red.600', position: 'relative', top: '5.5pc', left: '-35pc', bg: 'transparent'}}></IconButton>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader> Feedback about service &#128522; </PopoverHeader>
                    <PopoverCloseButton></PopoverCloseButton>
                    <PopoverBody>
                        <form>
                            <FormControl>
                                <FormLabel> Review </FormLabel>
                                <Input placeholder="only Emojis accepted" type="text" value={Review} maxLength={250} onChange={onHandle_Review}></Input>
                                <FormLabel> Phone Number: </FormLabel>
                                <Input placeholder="0000-0000-000" type="tel" onChange={onHandle_PhoneNum}></Input>
                                <FormLabel> Email: </FormLabel>
                                <Input placeholder="Email" type="email" onChange={onHandle_Email}></Input>
                                <IconButton icon={<Computer></Computer>} onClick={onHandle_Update} sx={{color: 'black.aplha', bg: 'transparent'}}></IconButton> 
                                <IconButton icon={<FaSmileWink></FaSmileWink>} onClick={onHandle_Wink} sx={{color: 'green', bg: 'transparent'}}></IconButton>
                                <IconButton icon={<FaSmileBeam></FaSmileBeam>} onClick={onHandle_Simle} sx={{color: 'gold', bg: 'transparent'}}></IconButton>
                                <IconButton icon={<FaSadTear></FaSadTear>} onClick={onHandle_Tear} sx={{color: 'grey', bg: 'transparent'}}></IconButton>
                                <IconButton icon={<FaSadCry></FaSadCry>} onClick={onHandle_Cry} sx={{color: 'red.500', bg: 'transparent'}}></IconButton>
                                <IconButton icon={<BiAngry></BiAngry>} onClick={onHandle_Angry} sx={{color: 'red.600', bg: 'transparent'}}></IconButton>
                            </FormControl>
                        </form>
                    </PopoverBody>
                </PopoverContent>
            </Popover></>)
}