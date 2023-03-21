"use client";
import { useState } from "react";
import { Paper, InputBase, IconButton, Box } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export default function StickyNote() {
    // DRAGGING FEATURE
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
            <Paper
                elevation={3}
                square={true}
                sx={{
                    height: "200px",
                    width: "200px",
                    backgroundColor: "#F3E779",
                }}
            >
                <Box textAlign={"right"}>
                    <IconButton aria-label="delete sticky note">
                        <DeleteForeverIcon fontSize="small" />
                    </IconButton>
                </Box>
                <InputBase
                    id="Sticky_Note"
                    placeholder="Write down before you forget!"
                    multiline
                    rows={7}
                    sx={{
                        marginX: "10px",
                    }}
                />
            </Paper>
        </animated.div>
    );
}
