import { Box, Button, Input } from "@chakra-ui/react";
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton} from '@chakra-ui/react';
import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import { useState } from "react";

export default function Messager(){

    const [response, setResponse] = useState('')
    const cache = './login_cache/'

    async function llamamodel(event){


        console.log("input =", event.target.elments.help.value)

       const signin = new Login('${process.env.HUGGINGFACE_EMAIL}', '${process.env.HUGGINGFACE_APIKEY}')
       const res = await signin.login(cache)
       const chat = new ChatBot(res)
       const data = await chat.chat(event.target.elments.help.value)
        setResponse(await data.completeResponsePromise());
        console.log(response);

        event.preventDefault();
    }

    return(
        <Box sx={{position: 'relative', top : '100pc',  left : '40pc'}}>
            <Popover>
                <PopoverTrigger>
                    <Button> <VoiceChatIcon></VoiceChatIcon> </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader> Question </PopoverHeader>
                    <PopoverBody>
                        <form onSubmit={llamamodel}>
                            <FormControl>
                                <FormLabel> How can I help you? </FormLabel>
                                <Input type='text' id="help"/>
                                <FormHelperText> We'll like to serve you </FormHelperText>
                                <Button variant='ghost' leftIcon={<QuickreplyIcon></QuickreplyIcon>} type="submit"> Submit </Button>
                            </FormControl>
                        </form>
                        <span> <strong> {response} </strong></span>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
}