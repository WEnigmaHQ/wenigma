import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, IconButton, Box, FormLabel, Input, NumberInput, NumberInputField } from '@chakra-ui/react'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import Heading from './Heading';
export default function Lesuire(){

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('right')

  const deals = [
    {
      "image": "https://bellprinters.com/wp-content/uploads/2022/12/luxury-watch-collection-boxes-smart-watch-packaging-box-manufacturer.jpg",
      "id": "0",
      "type": "Collection",
      "alert": "Sorry currently our international deliver will be start soon"
    },
    {
      "image": "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/las-ventanas-al-paraiso-los-cabos-mexico.jpg?ssl=1",
      "id": "1",
      "type": "Tours",
      "alert": "Sorry Currently this option is only for local customers. However, we will start soon."
    },
    {
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/467527942.jpg?k=d4290b06feb17b949750dfc0348f09be11326f7de7025bfcaf2a28702b329e52&o=&hp=1",
      "id": "2",
      "type": "StayIn",
      "alert": "Sorry Currently this option is only for local customers. However, we will start soon."
    }
  ];

    return(
        <Tabs defaultIndex={1}>
          { deals.map((data, index) => (index == data.id ? <Box>  <TabPanels>
              <TabPanel>
                    <Image boxSize='400px' fit='cover' src={data.image}/>
                    <IconButton aria-label='Book' icon={<DeliveryDiningIcon />} sx={{position: 'relative', top: '-3pc', left: '11.4pc', borderRadius:'2pc', color: 'white', background: 'transparent'}} onClick={onOpen}></IconButton>
                    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                      <DrawerOverlay />
                      <DrawerContent>
                          <DrawerHeader borderBottomWidth='1px'> Appointment Schedule </DrawerHeader>
                          <DrawerBody>
                                 <FormLabel> First name </FormLabel>
                                 <Input placeholder='Ali' type='text' id='first' />
                                 <FormLabel> Family name </FormLabel>
                                 <Input placeholder='Hassan' type='text' id='last' />
                                 <FormLabel> Email </FormLabel>
                                 <Input placeholder='abc@gmail.com' type='email' id='email' />
                                 <FormLabel> PhoneNum </FormLabel>
                                 <Input placeholder='+9200 111 1110' type='phone' id='phone' />
                                 <FormLabel> Advance Payment </FormLabel>
                                 <NumberInput min={10000} max={100000} keepWithinRange={true}> <NumberInputField placeholder='10000 Rupees' type='number' id='range'></NumberInputField></NumberInput>
                                 <FormLabel> Schedule Appointment </FormLabel>
                                 <Input type='date' id='date' />
                                 <IconButton aria-label='Submit' icon={<ThumbUpAltIcon />} sx={{position: 'relative', top: '0.3pc', left: '10pc', color: 'green', background: 'transparent'}} ></IconButton>
                                 <IconButton aria-label='Cancel' icon={<ThumbDownAltIcon />} sx={{position: 'relative', top: '0.3pc', left: '10pc', color: 'red', background: 'transparent'}} ></IconButton>
                          </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                    <Popover>
                      <PopoverTrigger>
                      <IconButton aria-label='Book Flight' icon={<LocalAirportIcon />} sx={{position: 'relative', top: '-3pc', left: '-11.4pc', borderRadius:'2pc', color: 'white', background: 'black'}}></IconButton>
                      </PopoverTrigger>
                      <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader> Alert </PopoverHeader>
                          <PopoverBody> {data.alert} </PopoverBody>
                      </PopoverContent>
                    </Popover>
              </TabPanel>
        </TabPanels>
        <TabList>
            <Tab sx={{position: 'relative', left: '10pc'}}> {data.type}</Tab>
        </TabList></Box> : null))}

        </Tabs>
    );
}