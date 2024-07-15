import { Box, Tag } from "@chakra-ui/react";

export default function Pricing(){

    return(
        <Box sx={{position:'relative', top : '3pc', left : '2pc' , width: '15pc'}} w={[300, 600]}>
            <strong> Exclusive gift with shipment  </strong>
            <Tag> $500 </Tag>
        </Box>
    )
}