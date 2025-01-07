import { Box, Button, IconButton, Image} from "@chakra-ui/react";
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { useEffect, useState } from "react";
import { FaHeart } from 'react-icons/fa';
import Stories  from "./Stories.jsx";
import Sign from './assets/sign.png';

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
            const utter = new SpeechSynthesisUtterance('Fearless winds call—embrace the rush!');

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
        <Box boxSize='lg' sx={{position: 'relative', top : '20pc', left : '-2pc',  width : '90'}} w={[300, 500]}>
            <Button onClick={handleClick} sx={{border : 'none', borderRadius: '20', bg: 'red' , color : 'white', colorScheme: 'red', title: 'Speak up', position: 'relative', left : '25pc'}}> <GraphicEqIcon ></GraphicEqIcon> Thhrilll I love it ! </Button>
            <IconButton icon={<FaHeart></FaHeart>} color={"red"} bg={'transparent'} sx={{position: 'relative', top: '-3pc', left: '17pc'}} aria-label='trilled'> Love </IconButton>
            <Stories></Stories>
            <Image src={Sign} alt="Sign" sx={{position: 'relative', top: '5pc', left : '-20pc', transform: "rotate(-45deg)"}}></Image>
        </Box>
    );
}