
import React, { FC } from "react";
import { Box, Circle } from '@chakra-ui/react'



type Props = {

}


export const IconStepperContainer: FC<Props> = (props) => {

    return (
        <Box
            boxSize='100%'
            pos='relative'
            marginLeft="-1.2em"
            marginRight='1.2rem'
            paddingLeft='1rem'
            paddingBottom='0'
            _after={{ content: `""`, position: "absolute", left: "calc(-7px)", top: "2.8em", width: "14px", height: "12px", borderLeft: "solid 2px #E8EBF0", borderBottom: "solid 2px #E8EBF0", borderRadius: "0 0 0 6px", zIndex: '1' }}
        >{props.children}
        </Box>


    )
}









