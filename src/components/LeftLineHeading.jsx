import React from 'react'
import { Heading } from '@chakra-ui/react'

function LeftLineHeading(props) {
    return (
        <Heading fontSize={['xl', '2xl']} px='4' borderLeft={`3px solid ${props.color? props.color:'red'} `}>
            {props.children}
        </Heading>
    )
}

export default LeftLineHeading