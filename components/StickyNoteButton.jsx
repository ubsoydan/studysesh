import { Fab, Badge } from "@mui/material";
import NoteIcon from "@mui/icons-material/Note";

export default function StickyNoteButton({ addNewStickyNote }) {
    return (
        <li className="inline mx-4">
            <Badge badgeContent=" " color="success">
                <Fab
                    aria-label="Sticky Note Widget"
                    sx={{ height: "80px", width: "80px" }}
                    onClick={() => addNewStickyNote()}
                >
                    <NoteIcon />
                </Fab>
            </Badge>
        </li>
    );
}
