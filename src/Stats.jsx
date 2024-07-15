import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'


export default function Stats(){

    return(
        <StatGroup sx={{position:'relative', top : '14pc', color:'darkslategrey'}} w={[300, 600]}>
            <Stat>
                <StatLabel> Followers </StatLabel>
                <StatNumber> 4K </StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                    23.36%
                </StatHelpText>
            </Stat>
            <Stat>
                <StatLabel> Leads </StatLabel>
                <StatNumber> 200 </StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                    9.05%
                </StatHelpText>
            </Stat>
            <Stat>
                <StatLabel> Brand's  </StatLabel>
                <StatNumber> 100+ </StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                    0.05%
                </StatHelpText>
            </Stat>
        </StatGroup>
    );
}