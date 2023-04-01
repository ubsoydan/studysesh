"use client";
import { useState, useEffect } from "react";
import { Paper, InputBase, IconButton, Box } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export default function StickyNote({
    id,
    content,
    updateStickyNote,
    deleteStickyNote,
}) {
    // STATE OF NOTE
    const [noteContent, setNoteContent] = useState(content);

    // DRAGGING FEATURE
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
    const bindStickyNotePos = useDrag(({ offset: [x, y] }) =>
        api.start({ x, y })
    );

    useEffect(() => {
        updateStickyNote(id, noteContent);
    }, [id, noteContent, updateStickyNote]);

    return (
        <animated.div
            className="inline-block"
            {...bindStickyNotePos()}
            style={{ x, y }}
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
                    <IconButton
                        aria-label="delete sticky note"
                        onClick={() => deleteStickyNote(id)}
                    >
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
                    onChange={(e) => setNoteContent(e.target.value)}
                    value={noteContent}
                />
            </Paper>
        </animated.div>
    );
}
