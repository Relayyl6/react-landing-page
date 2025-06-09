// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client"
import React from "react"

export default function Gestures({className, children, tap }) {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={ tap ? {} : {scale : 0.8} }
            className={`${className || ''} `}
        >
            {children}
        </motion.div>
    )
}