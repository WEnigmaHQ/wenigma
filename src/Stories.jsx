import { CardHeader, Card, Flex, CardBody, Text, Box, Image, Tag, TagLabel, IconButton } from "@chakra-ui/react";
import { BiComment, BiLike, BiSave, BiShare } from "react-icons/bi";
import Follow from "./Follow.jsx"


export default function Stories(){
    return(
        <>
            <Card maxW='md' sx={{position: 'relative', left: '-5pc', top: '45pc', height: '40pc'}}>
                <CardHeader>
                    <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Image src={"https://www.shutterstock.com/shutterstock/videos/3391929501/thumb/1.jpg?ip=x480"}></Image>
                            <IconButton colorScheme="transparent" color={"red"} variant={'outline'} icon={<BiLike></BiLike>}> </IconButton>
                            <IconButton colorScheme="transparent" color={"green"} variant={'outline'} icon={<BiComment></BiComment>}></IconButton>
                            <IconButton colorScheme="transparent" color={"black"} variant={'outline'} icon={<BiShare></BiShare>}></IconButton>
                            <IconButton colorScheme="transparent" color={"black"} variant={'outline'} sx={{position: 'relative', left: '12pc'}} icon={<BiSave></BiSave>}></IconButton>
                        </Flex>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Box boxSize='md'>
                        <Text sx={{width: '25pc'}}>
                          "We are the alchemists of luxury and innovation, turning the extraordinary into the exceptional. Our mission is to weave the enchanting narratives of vintage and luxury watches into the tapestry of modern investment. We navigate the high-stakes realm of real estate with the audacity of rebels, transforming challenges into opportunities. With an eye for the unconventional, we champion niche startups that dare to dream differently, igniting a spark of creativity that challenges the ordinary. Together, we don’t just invest; we create legacies, inspire revolutions, and embrace the thrill of the unknown."
                          <Tag borderRadius='full' sx={{position: 'relative', top: '0pc', left: '2pc'}} variant='solid' colorScheme='green'> <TagLabel> Origin </TagLabel> </Tag>
                          <Tag borderRadius='full' sx={{position: 'relative', top: '0pc', left: '2pc'}} variant='solid' colorScheme='green'> <TagLabel> Luxury </TagLabel> </Tag>
                          <Tag borderRadius='full' sx={{position: 'relative', top: '0pc', left: '2pc'}} variant='solid' colorScheme='green'> <TagLabel> Rebels </TagLabel> </Tag>
                        </Text>
                    </Box>
                </CardBody>
            </Card>
            <Box sx={{position: 'relative', top: '10pc', left: '30pc'}}>
                    <Follow></Follow>
            </Box>
        </>
    );
}