import { Fab, Badge } from "@mui/material";
import NoteIcon from "@mui/icons-material/Note";

export default function StickyNoteButton() {
    return (
        <li className="inline mx-4">
            <Badge badgeContent=" " color="success">
                <Fab
                    aria-label="Sticky Note Widget"
                    sx={{ height: "80px", width: "80px" }}
                >
                    <NoteIcon />
                </Fab>
            </Badge>
        </li>
    );
}
