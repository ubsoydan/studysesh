"use client";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import StickyNote from "@/components/StickyNote";

export default function DragButton() {
    const buttonPos = useSpring({ x: 0, y: 0 });
    const bindButtonPos = useDrag((params) => {
        buttonPos.x.set(params.offset[0]);
        buttonPos.y.set(params.offset[1]);
    });

    return (
        <animated.div
            {...bindButtonPos()}
            style={{ x: buttonPos.x, y: buttonPos.y }}
        >
            <StickyNote />
        </animated.div>
    );
}
