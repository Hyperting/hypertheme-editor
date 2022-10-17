
import React, { FC } from "react";
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'



type Props = {

}


export const IconStepperContainer: FC<Props> = (props) => {
    const colorMode = useColorModeValue('#E8EBF0', 'gray')
    return (
        <Box
            boxSize='100%'
            pos='relative'
            marginLeft="-1.2em"
            marginRight='1.2rem'
            paddingLeft='1rem'
            paddingBottom='0'

            _after={{ content: `""`, position: "absolute", left: "calc(-7.5px)", top: "2.8em", width: "14px", height: "12px", borderLeft: `solid 2px ${colorMode}`, borderBottom: `solid 2px ${colorMode}`, borderRadius: "0 0 0 6px", zIndex: '1', borderEndColor: ` ${colorMode}`, borderLeftColor: ` ${colorMode}` }}
        >{props.children}
        </Box>


    )
}









