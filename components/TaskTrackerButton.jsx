"use client";
// REACT IMPORTS
import { useState } from "react";
// MUI IMPORTS
import { Fab, Badge } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function TaskTrackerButton({ toggleTaskTracker }) {
    const [isBadgeInvisible, setIsBadgeInvisible] = useState(false);

    const toggleBadge = () => {
        setIsBadgeInvisible((prevState) => !prevState);
    };

    const clickHandler = () => {
        toggleTaskTracker();
        toggleBadge();
    };
    return (
        <li className="inline mx-4">
            <Badge
                badgeContent=" "
                color="success"
                invisible={isBadgeInvisible}
            >
                <Fab
                    aria-label="Sticky Note Widget"
                    sx={{ height: "70px", width: "70px" }}
                    onClick={clickHandler}
                >
                    <AssignmentIcon />
                </Fab>
            </Badge>
        </li>
    );
}
