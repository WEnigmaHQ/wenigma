import { StepIcon, StepIndicator, StepNumber, StepStatus, useSteps, StepSeparator,StepDescription,StepTitle,Stepper, Step, Box } from "@chakra-ui/react";
import Exclusive from "./Exclusive.jsx"



const follows = [
    { title: 'Register account', description: 'Register account '},
    { title: 'Exclusive Benefits', description: 'Exclusive benefits for insiders'},
    { title: 'Exclusive club', description: ' Pay Exclusive club membership for an year '},
    { title: 'Exclusive Member', description: 'Official Exclusive club member'},
];

export default function FollowThrough(){

    const { activeSteps } = useSteps({ index: 1, count: follows.length});

    return(
        <>
            <Stepper index={activeSteps} orientation='vertical' height='400px' gap='5px' position={'relative'} top={'5pc'}>
                    {follows.map((follow, index) => (
                        <Step key={index}>
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon/>}
                                    incomplete={<StepNumber/>}
                                    active={<StepNumber/>}
                                />
                            </StepIndicator>
                            <Box flexShrink='0' sx={{color:'teal', colorScheme: 'teal'}}>
                                <StepTitle>{follow.title}</StepTitle>
                                <StepDescription>{follow.description}</StepDescription>
                            </Box>
                            <StepSeparator />
                        </Step>
                    ))}
            </Stepper>
            <Box sx={{position: 'relative', top: '8pc', left: '0pc'}}>
                <Exclusive></Exclusive>
            </Box>
        </>
    );
}