import { Box, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Image, Text, useToast, IconButton, Popover, PopoverTrigger, PopoverArrow, PopoverHeader, PopoverContent, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";
import { useRef } from "react";
import seaview from "./assets/public.png"
import Nineelm from "./assets/1587452556mini-04-1597437468.jpg";
import Lagoonview from "./assets/lagoon.jpg"
import CafexBot from "./assets/cafe.jpeg";
import WarpointVR from "./assets/warpoint.jpeg";
import WisdomEnigma from "./assets/wisdomenigma.jpg";
import BugattiTower from "./assets/bugatti.jpeg";
import TrillioniareEsatte from "./assets/bb-2.jpeg";
import OceanHouseSurfside from "./assets/OceanHouse.jpg";
import RitzCarltonView from "./assets/Ritz Carlton.jpg";
import { Email, WhatsApp } from "@mui/icons-material";

function Damc(){

    const {isOpen, onClose, onOpen} = useDisclosure();
    const btnRef = useRef();
    return(<> <Button ref={btnRef} variant={'none'} onClick={onOpen} sx={{position: 'relative', top: '5pc', left: '0.7pc', color: 'white', borderColor: 'black'}}> DAMAC </Button>
        <Drawer isOpen={isOpen} placement={'right'} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton></DrawerCloseButton>
                <DrawerHeader> DAMAC  </DrawerHeader>
                <DrawerBody>
                    <Image src={seaview} alt="damac dubai" width={100} height={100} sx={{borderRadius:'20pc', position: 'relative', top: '3pc'}}></Image>
                    <Text sx={{position: 'relative', left: '8pc'}}> Dubai </Text>
                    <Image src={Nineelm} alt="damac london" width={100} height={100} sx={{borderRadius:'20pc', position: 'relative', top: '6pc'}}></Image>
                    <Text sx={{position: 'relative', left: '8pc', top: '3pc'}}> London </Text>
                    <Text sx={{position: 'relative', left: '0pc', top: '7pc'}}> In the heart of Dubai, DAMAC towers rise majestically, embodying luxury and innovation. Each detail reflects a commitment to excellence, offering an unparalleled lifestyle. Meanwhile, Nine Elms in London captivates with its blend of modern design and rich heritage, providing a unique perspective on urban living. Together, these iconic developments not only promise exceptional returns but also create a narrative of opulence and sophistication that transforms the urban landscape. Investing in them is more than a financial decision; it’s a gateway to a lifestyle defined by elegance and prestige.</Text>
                    <Text sx={{position: 'relative', left: '3pc', top: '9pc', color: 'gold', fontSize: 'x-large'}}> Coming Soon  </Text>
                    <Popover>
                        <PopoverTrigger>
                            <IconButton icon={<Email></Email>} sx={{position: 'relative', top: '10pc', left: '5pc',bg: 'black', color: 'white'}}></IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> <h3> Contatct us </h3> </PopoverHeader>
                            <PopoverBody>  Shall you want to invest in Studio Apartment, well decorated, natural view of Beach, Aesthetic & Luxury lifestyle for your family. Contact us through email  wizdwarfs@gmail.com </PopoverBody>
                        </PopoverContent>
                    </Popover>   
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer></>);
}




function Lagoon(){

    const {isOpen, onClose, onOpen} = useDisclosure();
    const btnRef = useRef();
    return(<> <Button ref={btnRef} variant={'none'} onClick={onOpen} sx={{position: 'relative', top: '2pc', left: '0.7pc', color: 'white', borderColor: 'black'}}> Lagoon </Button>
        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton></DrawerCloseButton>
                <DrawerHeader> Lagoon Off Plan  </DrawerHeader>
                <DrawerBody>
                    <Image src={Lagoonview} alt="loggon dubai" width={100} height={100} sx={{borderRadius:'20pc', position: 'relative', top: '3pc'}}></Image>
                    <Text sx={{position: 'relative', left: '8pc'}}> Dubai </Text>
                    <Text sx={{position: 'relative', left: '0pc', top: '7pc'}}> Investing in Dubai Lagoon’s off-plan luxury apartments promises stunning views and vibrant community living, paving the way for future success. </Text>
                    <Popover>
                        <PopoverTrigger>
                            <IconButton icon={<Email></Email>} sx={{position: 'relative', top: '10pc', left: '5pc',bg: 'black', color: 'white'}}></IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> <h3> Contatct us </h3> </PopoverHeader>
                            <PopoverBody> Shall you want to invest in off plan resident apartments in dubai, this is my personal favourite investment. Contact us through Email Address, if you prefer. wizdwarfs@gmail.com </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                        <IconButton icon={<WhatsApp></WhatsApp>} sx={{position: 'relative', top: '10pc', left: '8pc',bg: 'black', color: 'white'}}></IconButton> 
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> Book Appointment </PopoverHeader>
                            <PopoverBody>  +92-317-4287461  </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer></>);
    
}

function Comming(){

    const {isOpen, onClose, onOpen} = useDisclosure();
    const btnRef = useRef();
    return(<> <Button ref={btnRef} variant={'none'} onClick={onOpen} sx={{position: 'relative', top: '-4pc', left: '30pc', color: 'white', borderColor: 'black'}}> Coming soon </Button>
        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton></DrawerCloseButton>
                <DrawerHeader>  </DrawerHeader>
                <DrawerBody>
                    <Text sx={{position: 'relative', left: '0pc', top: '7pc', color: 'gold'}}> <h1> Allure the Magic; </h1>  </Text>
                    <Popover>
                        <PopoverTrigger>
                            <IconButton icon={<Email></Email>} sx={{position: 'relative', top: '10pc', left: '5pc',bg: 'black', color: 'white'}}></IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> <h3> Contatct us </h3> </PopoverHeader>
                            <PopoverBody>  wizdwarfs@gmail.com </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                        <IconButton icon={<WhatsApp></WhatsApp>} sx={{position: 'relative', top: '10pc', left: '8pc',bg: 'black', color: 'white'}}></IconButton> 
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> Book Appointment </PopoverHeader>
                            <PopoverBody>  +92-317-4287461  </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer></>);
    
}

function Oceanhouse(){

    const {isOpen, onClose, onOpen} = useDisclosure();
    const btnRef = useRef();
    return(<> <Button ref={btnRef} variant={'none'} onClick={onOpen} sx={{position: 'relative', top: '-3pc', left: '-35pc', color: 'white', borderColor: 'black'}}> Ocean House </Button>
        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton></DrawerCloseButton>
                <DrawerHeader> Ocean House </DrawerHeader>
                <DrawerBody>
                <Image src={OceanHouseSurfside} alt="ocean house" width={100} height={100} sx={{borderRadius:'20pc', position: 'relative', top: '3pc'}}></Image>
                    <Text sx={{position: 'relative', left: '8pc'}}> USA </Text>
                    <Text sx={{position: 'relative', left: '0pc', top: '7pc'}}> Everyone is different when he/she invest in opportunities. Ocean House most luxury Residence in between Mami & Bal Harbour. Comfortable and vibant space, that will design for your family. A true paradise   </Text>
                    <Popover>
                        <PopoverTrigger>
                            <IconButton icon={<Email></Email>} sx={{position: 'relative', top: '10pc', left: '5pc',bg: 'black', color: 'white'}}></IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> <h3> Contatct us </h3> </PopoverHeader>
                            <PopoverBody> Shall you want to invest in Ocean House, I like it personally, a comfortable and luxury apartment with excellent amenties. Contact us Directly on mail, wizdwarfs@gmail.com </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                        <IconButton icon={<WhatsApp></WhatsApp>} sx={{position: 'relative', top: '10pc', left: '8pc',bg: 'black', color: 'white'}}></IconButton> 
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> Book Appointment </PopoverHeader>
                            <PopoverBody>  +92-317-4287461  </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer></>);
    
}

function Trillionaire(){

    const {isOpen, onClose, onOpen} = useDisclosure();
    const btnRef = useRef();
    return(<> <Button ref={btnRef} variant={'none'} onClick={onOpen} sx={{position: 'relative', top: '-1pc', left: '8pc', color: 'white', borderColor: 'black'}}> Trillionaire </Button>
        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton></DrawerCloseButton>
                <DrawerHeader>  </DrawerHeader>
                <DrawerBody>
                <Image src={TrillioniareEsatte} alt="Trillioniare residence" width={100} height={100} sx={{borderRadius:'20pc', position: 'relative', top: '3pc'}}></Image>
                    <Text sx={{position: 'relative', left: '8pc'}}> Dubai </Text>
                    <Text sx={{position: 'relative', left: '0pc', top: '7pc'}}> "Investing in Dubai Trillionaire Residence is a wonderful opportunity, a place where luxury is the ultimate solution for sophisticated living. With exquisite decor and breathtaking views of nature and the night sky, it’s a dream destination where stars live a life of elegance, offering all the amenities you deserve. Join a community of like-minded individuals and seize this chance to elevate your life today."</Text>
                    <Popover>
                        <PopoverTrigger>
                            <IconButton icon={<Email></Email>} sx={{position: 'relative', top: '10pc', left: '5pc',bg: 'black', color: 'white'}}></IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> <h3> Contatct us </h3> </PopoverHeader>
                            <PopoverBody> Shall you invest in trillioniare residence where trillioniare enjoy every amenties that deserve, alluring views, aesthetic space for residence not for you perhaps for your whole family . Direct email on our mail wizdwarfs@gmail.com </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                        <IconButton icon={<WhatsApp></WhatsApp>} sx={{position: 'relative', top: '10pc', left: '8pc',bg: 'black', color: 'white'}}></IconButton> 
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> Book Appointment </PopoverHeader>
                            <PopoverBody>  +92-317-4287461  </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer></>);
}


function WarPoint(){

    const {isOpen, onClose, onOpen} = useDisclosure();
    const btnRef = useRef();
    return(<> <Button ref={btnRef} variant={'none'} onClick={onOpen} sx={{position: 'relative', top: '7pc', left: '-10.9pc', color: 'white', borderColor: 'black'}}> Warpoint </Button>
        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton></DrawerCloseButton>
                <DrawerHeader> Warpoint VR Acade  </DrawerHeader>
                <DrawerBody>
                    <Image src={WarpointVR} alt="warpoint" width={100} height={100} sx={{borderRadius:'20pc', position: 'relative', top: '3pc'}}></Image>
                    <Text sx={{position: 'relative', left: '8pc'}}> London </Text>
                    <Text sx={{position: 'relative', left: '0pc', top: '7pc'}}> Across generations, games have enchanted us, from ancient Rome to chess. Today, they generate over $20 billion, blending luxury and artistry, uniting hearts in joyful competition. </Text>
                    <Popover>
                        <PopoverTrigger>
                            <IconButton icon={<Email></Email>} sx={{position: 'relative', top: '10pc', left: '5pc',bg: 'black', color: 'white'}}></IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> <h3> Contact us </h3> </PopoverHeader>
                            <PopoverBody>  Shall you want to invest in games if it's your favourite spot for investment. Contact us directly through Email or other means wizdwarfs@gmail.com </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                        <IconButton icon={<WhatsApp></WhatsApp>} sx={{position: 'relative', top: '10pc', left: '8pc',bg: 'black', color: 'white'}}></IconButton> 
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> Book Appointment </PopoverHeader>
                            <PopoverBody>  +92-317-4287461  </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer></>);
}

function CafeXBot(){

    const {isOpen, onClose, onOpen} = useDisclosure();
    const btnRef = useRef();
    return(<> <Button ref={btnRef} variant={'none'} onClick={onOpen} sx={{position: 'relative', top: '4pc', left: '0.7pc', color: 'white', borderColor: 'black'}}> CafeXBot </Button>
        <Drawer isOpen={isOpen} placement={'right'} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton></DrawerCloseButton>
                <DrawerHeader> CafeXBot  </DrawerHeader>
                <DrawerBody>
                    <Image src={CafexBot} alt="cafexbot dubai" width={100} height={100} sx={{borderRadius:'20pc', position: 'relative', top: '3pc'}}></Image>
                    <Text sx={{position: 'relative', left: '8pc'}}> Dubai </Text>
                    <Text sx={{position: 'relative', left: '0pc', top: '7pc'}}> CafeXBot redefines mornings, brewing coffee and tea in minutes, while crafting ice cream and cakes. It inspires joy, connection, and entrepreneurial dreams, turning everyday moments into cherished memories.</Text>
                    <Popover>
                        <PopoverTrigger>
                            <IconButton icon={<Email></Email>} sx={{position: 'relative', top: '10pc', left: '5pc',bg: 'black', color: 'white'}}></IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> Contatct us </PopoverHeader>
                            <PopoverBody>  Invest in the Automated Prestige Machine - delicious and delightful! Unlock profitable endeavors for your business. Contact us at wizdwarfs@gmail.com </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                        <IconButton icon={<WhatsApp></WhatsApp>} sx={{position: 'relative', top: '10pc', left: '8pc',bg: 'black', color: 'white'}}></IconButton> 
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> Book Appointment </PopoverHeader>
                            <PopoverBody>  +92-317-4287461  </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer></>);
}

function Ritz(){

    const {isOpen, onClose, onOpen} = useDisclosure();
    const btnRef = useRef();
    return(<> <Button ref={btnRef} variant={'none'} onClick={onOpen} sx={{position: 'relative', top: '-7pc', left: '5pc', color: 'white', borderColor: 'black'}}> Ritz Carlton Resisdence </Button>
        <Drawer isOpen={isOpen} placement={'right'} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton></DrawerCloseButton>
                <DrawerHeader> Ritz Calton Residence  </DrawerHeader>
                <DrawerBody>
                    <Image src={RitzCarltonView} alt="Ritz Carlton dubai" width={100} height={100} sx={{borderRadius:'20pc', position: 'relative', top: '3pc'}}></Image>
                    <Text sx={{position: 'relative', left: '8pc'}}> Dubai </Text>
                    <Text sx={{position: 'relative', left: '0pc', top: '7pc'}}> "Ritz Carlton offers residences for wealthy families, featuring unique spaces with spectacular views, perfect for vacations or enjoying life’s finest moments. Embrace a lifestyle defined by luxury, elegance, and uniqueness. Discover your dream lifestyle at Ritz Carlton."</Text>
                    <Popover>
                        <PopoverTrigger>
                            <IconButton icon={<Email></Email>} sx={{position: 'relative', top: '10pc', left: '5pc',bg: 'black', color: 'white'}}></IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> Contatct us </PopoverHeader>
                            <PopoverBody> Shall you want to invest in Ritz Carlton Residence? This is a perfect opportunity for families who deserve the best—unique, luxurious spaces with extraordinary private living areas. Explore this unparalleled opportunity today. Contact us at wizdwarfs@gmail.com </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                        <IconButton icon={<WhatsApp></WhatsApp>} sx={{position: 'relative', top: '10pc', left: '8pc',bg: 'black', color: 'white'}}></IconButton> 
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> Book Appointment </PopoverHeader>
                            <PopoverBody>  +92-317-4287461  </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer></>);
}

function Bugatti(){

    const {isOpen, onClose, onOpen} = useDisclosure();
    const btnRef = useRef();
    return(<> <Button ref={btnRef} variant={'none'} onClick={onOpen} sx={{position: 'relative', top: '-2pc', left: '27pc', color: 'white', borderColor: 'black'}}> Bugatti Lifestyle </Button>
        <Drawer isOpen={isOpen} placement={'right'} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton></DrawerCloseButton>
                <DrawerHeader> Bugatti Lifestyle  </DrawerHeader>
                <DrawerBody>
                    <Image src={BugattiTower} alt="bugatti bingatti" width={100} height={100} sx={{borderRadius:'20pc', position: 'relative', top: '3pc'}}></Image>
                    <Text sx={{position: 'relative', left: '8pc'}}> Dubai </Text>
                    <Text sx={{position: 'relative', left: '0pc', top: '7pc'}}> At Bugatti Lifestyle Tower, luxury transcends mere living. Each apartment and townhouse is a canvas for dreams, where elegance meets community, and every sunrise promises a new chapter of extraordinary experiences.</Text>
                    <Popover>
                        <PopoverTrigger>
                            <IconButton icon={<Email></Email>} sx={{position: 'relative', top: '10pc', left: '5pc',bg: 'black', color: 'white'}}></IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> Contatct us </PopoverHeader>
                            <PopoverBody> Shall you want invest your time & money on something that true art of living, peaceful like paradise, luxury you have never experience before. Life you deserve one click away. Contact us at wizdwarfs@gmail.com </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                        <IconButton icon={<WhatsApp></WhatsApp>} sx={{position: 'relative', top: '10pc', left: '8pc',bg: 'black', color: 'white'}}></IconButton> 
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow></PopoverArrow>
                            <PopoverCloseButton></PopoverCloseButton>
                            <PopoverHeader> Book Appointment </PopoverHeader>
                            <PopoverBody>  +92-317-4287461  </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer></>);
}


export default function Brands(){
    return(
        <>
            <Box sx={{bg: 'black', position: 'relative', top: '120pc', width: '50pc', color: 'white', fontSize: 'lg', font:'bold', height: '10pc', rounded: 'full'}}>
                <Damc></Damc>
                <Lagoon></Lagoon>
                <CafeXBot></CafeXBot>
                <WarPoint></WarPoint>
                <Image src={WisdomEnigma} alt="wisdomenigma" sx={{position: 'relative', left: '22pc', borderRadius: '50%'}}></Image>
                <Comming></Comming>
                <Bugatti></Bugatti>
                <Trillionaire></Trillionaire>
                <Ritz></Ritz>
                <Oceanhouse></Oceanhouse>
            </Box>
        </>
    )
}