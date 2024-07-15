import { Box, Button, Image} from "@chakra-ui/react";
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import Messager from "./Messager.jsx";
import { useEffect, useState } from "react";



export default function Voiceover(){

    const  [utterance, setutterance] = useState(null);
    const [voice, setVoice] = useState(null);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(1);


    window.speechSynthesis.onvoiceschanged = function(){
        
        const voices = window.speechSynthesis.getVoices();
        console.log("voice == ", voices);

        setVoice(voices[3]);
    }


    useEffect(()=>{

            const synth = window.speechSynthesis
            const utter = new SpeechSynthesisUtterance('tapestry allure the magic');

            setutterance(utter);

            return (() =>{

                synth.cancel();
            });

    }, []);

    const handleClick = (event) => {

        const synth = window.speechSynthesis;
        utterance.voice = voice
        utterance.pitch = pitch
        utterance.volume = volume
        utterance.rate = rate
        console.log("utter = ", utterance);
        synth.speak(utterance)
        event.preventDefault()
    };

    return(
        <Box boxSize='lg' sx={{position: 'relative', top : '5pc', left : '0pc',  width : '90'}} w={[300, 500]}>
            <Image src="https://element.io/blog/content/images/2021/08/Voice-Messages-blog.jpg"></Image>
            <Box sx={{position: 'relative', top : '2pc'}} w={[300, 600]}>
                <Button onClick={handleClick} sx={{border : 'none', borderRadius: '20', color : 'green', colorScheme: 'teal', title: 'Speak up'}}> <GraphicEqIcon ></GraphicEqIcon> Speak </Button>
            </Box>
            {<Messager></Messager>}
        </Box>
    );
}