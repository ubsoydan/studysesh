import { Fab, Badge } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function TaskTrackerButton({ toggleTaskTracker }) {
    return (
        <li className="inline mx-4">
            <Badge badgeContent=" " color="success">
                <Fab
                    aria-label="Sticky Note Widget"
                    sx={{ height: "80px", width: "80px" }}
                    onClick={toggleTaskTracker}
                >
                    <AssignmentIcon />
                </Fab>
            </Badge>
        </li>
    );
}
