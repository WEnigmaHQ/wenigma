import { Card, CardBody, Text, Heading, Image } from '@chakra-ui/react'
export default function Tour(){

    return(
        <Card maxW='sm' sx={{position: 'relative', top: '20pc', left : '5pc'}}>
        <CardBody sx={{width: '10pc'}}>
          <Image
            src='https://www.bestboomertowns.com/wp-content/uploads/2021/06/club-house-1600x875.jpg'
            alt='Golf-Tours'
            borderRadius='lg'/>
        
        <Text sx={{position: 'relative', left : '7.8pc', top: '2pc'}}>
             Prestige Country Clubs <Image src='https://i.fbcd.co/products/resized/resized-750-500/592-0202cefb8498c7c48ab255e1f6e472a22ad18e94cf6144731b86fc018fc38e5e.jpg' sx={{width: '7.5pc', position: 'relative', top : '0pc', left : '0pc', borderRadius: '2pc'}}></Image>
        </Text>
        
        <Heading sx={{fontSize: 'md', position: 'relative;' , top : '-2pc', color: 'teal'}}>
            Do Business with immense Pleasure
        </Heading>
    </CardBody>
    
    <CardBody sx={{width: '10pc'}}>
      <Image
        src='https://tesoroclub.com/wp-content/uploads/2022/11/tesoro-championship-golf-ready-to-return-blog-golf-course-110822-hole-10-min.jpg'
        alt='GOlf Championship Tour'
        borderRadius='lg'
      />
      
        <Heading sx={{fontSize: 'md', position: 'relative' , top : '-4pc', left : '8pc', color:'darkslategrey'}}>
            Excellence shot deserve Honour
        </Heading>
        <Heading sx={{position: 'relative', left: '8pc', top: '-1pc', color: 'darkgreen'}}> 19 Pars </Heading>
        <Text sx={{position: 'relative', left: '8pc', top: '-2pc'}}> <Heading sx={{position: 'relative', left: '-6pc', top: '1.2pc'}}> Prestige Dine Tour </Heading> enrich your experience </Text>
    </CardBody>
</Card>);
}