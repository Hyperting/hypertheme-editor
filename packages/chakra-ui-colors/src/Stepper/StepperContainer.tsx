
import React, { FC } from "react";
import { Box as PseudoBox, useColorModeValue } from '@chakra-ui/react'
import { GrAnalytics } from "react-icons/gr";



type Props = {

}


export const StepperContainer: FC<Props> = (props) => {
    const bgColor = useColorModeValue('#E8EBF0', 'gray.200')

    return (
        <PseudoBox

            boxSize='100%'
            pos='relative'
            marginLeft="-0.5em"
            marginRight='1.2rem'
            paddingLeft='0.3rem'
            paddingBottom='0'
            _before={{ content: `""`, position: "absolute", right: "100%", mt: '-0.5em', height: '110%', width: '2px', backgroundColor: bgColor, }}
            _after={{ content: `""`, position: "absolute", left: "calc(-1.5px)", top: "1.3em", width: "16px", height: "6px", borderLeft: "solid 2px #E8EBF0", borderBottom: "solid 2px #E8EBF0", borderRadius: "0 0 0 6px" }}
            _last={{ _before: { height: "1.8em" } }}
            _first={{ _before: { mt: '-0.7em', height: '120%', _after: { top: '2.5em' } } }}
        >
            {props.children}
        </PseudoBox >


    )
}









