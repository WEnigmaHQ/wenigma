import { Box } from "@chakra-ui/react";
import Instruction from "./Instruction.jsx";
import Instruction_1 from "./Instruction_1.jsx";
import Instruction_2 from "./Instruction_2.jsx";


export default function Download(){

    return(
        <Box sx={{position: 'relative', top: '1pc', color: 'green'}} w={[300, 600]}>
            <p>
                Download Rust on your machine
            </p>
            {/* <Instruction></Instruction> */}

            <Box sx={{position: 'relative', top: '1pc', color: 'blue'}} w={[300, 600]}>
                Download Cmake for (Rust)
                {/* <Instruction_1></Instruction_1> */}
            </Box>
            <Box sx={{position: 'relative', top: '2pc', color: 'red'}} w={[300, 600]}>
                Congratulation 
                {/* <Instruction_2></Instruction_2> */}
            </Box>
        </Box>
    );
}