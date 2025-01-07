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
        <StatGroup sx={{position:'relative', top : '100pc', color:'green', bg: 'transparent', fontSize: 'xx-lg', left: '8pc'}} w={[300, 600]}>
            <Stat>
                <StatLabel> Brand Partnership </StatLabel>
                <StatNumber> 20 </StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                    35%
                </StatHelpText>
            </Stat>
            <Stat>
                <StatLabel> Worth </StatLabel>
                <StatNumber> Billions </StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                    24.05%
                </StatHelpText>
            </Stat>
            <Stat>
                <StatLabel> Projects  </StatLabel>
                <StatNumber> 100+ </StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                    25.05%
                </StatHelpText>
            </Stat>
            <Stat>
                <StatLabel> Aesthetic </StatLabel>
                <StatNumber> 100% </StatNumber>
            </Stat>
        </StatGroup>
    );
}