import { Fab, Badge } from "@mui/material";
import NoteIcon from "@mui/icons-material/Note";

export default function StickyNoteButton({
    addNewStickyNote,
    stickyNotesCounter,
}) {
    return (
        <li className="inline mx-4">
            <Badge badgeContent={stickyNotesCounter} color="success">
                <Fab
                    aria-label="Sticky Note Widget"
                    sx={{ height: "70px", width: "70px" }}
                    onClick={() => addNewStickyNote()}
                >
                    <NoteIcon />
                </Fab>
            </Badge>
        </li>
    );
}
