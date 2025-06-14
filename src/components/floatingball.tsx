import { frame, motion, useSpring } from "motion/react"
import { RefObject, useEffect, useRef } from "react"
import React from "react"

export default function Drag({ className}) {
    const ref = useRef<HTMLDivElement>(null)
    const { x, y } = useFollowPointer(ref)

    return <motion.div
                ref={ref}
                className={`w-[20px] h-[20px] bg-[#ff0088] border rounded-full shadow-lg ${className || ''}`}
                drag
                style={{ x, y }} />
}

const spring = {
    damping: 3,
    stiffness: 20,
    restDelta: 0.001
}

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
    const x = useSpring(0, spring)
    const y = useSpring(0, spring)

    useEffect(() => {
        if (!ref.current) return

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!

            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
                y.set(clientY - element.offsetTop - element.offsetHeight / 2)
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)
    }, [])

    return { x, y }
}



