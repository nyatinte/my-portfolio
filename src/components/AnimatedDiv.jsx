import React from 'react'
import { motion } from 'framer-motion'

const AnimatedDiv = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: .3 } }}
            exit={{ opacity: 0 }}
        >
            {props.children}
        </motion.div>
    )
}

export default AnimatedDiv