"use client";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import StickyNote from "@/components/StickyNote";

export default function WidgetArea() {
    const StickyNotePos = useSpring({ x: 0, y: 0 });
    const bindStickyNotePos = useDrag((params) => {
        StickyNotePos.x.set(params.offset[0]);
        StickyNotePos.y.set(params.offset[1]);
    });

    return (
        <animated.div
            className="inline-block"
            {...bindStickyNotePos()}
            style={{ x: StickyNotePos.x, y: StickyNotePos.y }}
        >
            <StickyNote />
        </animated.div>
    );
}
