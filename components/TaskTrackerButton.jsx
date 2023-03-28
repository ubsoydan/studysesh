"use client";
// REACT IMPORTS
import { useState } from "react";
// MUI IMPORTS
import { Fab, Badge } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function TaskTrackerButton({ toggleTaskTracker }) {
    const [isBadgeVisible, setIsBadgeVisible] = useState(true);

    const toggleBadge = () => {
        setIsBadgeVisible((prevState) => !prevState);
    };

    const clickHandler = () => {
        toggleTaskTracker();
        toggleBadge();
    };
    return (
        <li className="inline mx-4">
            <Badge badgeContent=" " color="success" invisible={isBadgeVisible}>
                <Fab
                    aria-label="Sticky Note Widget"
                    sx={{ height: "80px", width: "80px" }}
                    onClick={clickHandler}
                >
                    <AssignmentIcon />
                </Fab>
            </Badge>
        </li>
    );
}
