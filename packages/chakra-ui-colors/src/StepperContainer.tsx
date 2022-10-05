
import React, { FC } from "react";
import { Box as PseudoBox } from '@chakra-ui/react'



type Props = {

}


export const StepperContainer: FC<Props> = (props) => {
    return (
        <PseudoBox
            boxSize='100%'
            pos='relative'
            marginLeft="0.5em"
            marginRight='1rem'
            paddingLeft='0.8rem'
            paddingBottom='0'
            _before={{ content: `""`, position: "absolute", right: "100%", top: "-0.5em", height: '100%', width: '2px', backgroundColor: "#E8EBF0", }}
            _after={{ content: `""`, position: "absolute", left: "calc(-1.5px)", top: "1.1em", width: "14px", height: "12px", borderLeft: "solid 2px #E8EBF0", borderBottom: "solid 2px #E8EBF0", borderRadius: "0 0 0 8px" }}
            _last={{ _before: { height: "65%" } }}

        >{props.children}
        </PseudoBox>


    )
}









