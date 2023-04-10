"use client";
import { useState, useEffect } from "react";
import { Paper, InputBase, IconButton, Box } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
//
import Draggable from "react-draggable";

export default function StickyNote({
    id,
    content,
    updateStickyNote,
    deleteStickyNote,
}) {
    // STATE OF NOTE
    const [noteContent, setNoteContent] = useState(content);

    useEffect(() => {
        updateStickyNote(id, noteContent);
    }, [id, noteContent, updateStickyNote]);

    return (
        <Draggable>
            <div className="absolute">
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
                        autoFocus
                    />
                </Paper>
            </div>
        </Draggable>
    );
}
